package com.groupproject.test.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.test.models.Cart;
import com.groupproject.test.services.CartService;
import com.groupproject.test.services.ProductService;
import com.groupproject.test.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartServ;

	@Autowired
	private UserService userServ;

	@Autowired
	private ProductService productServ;

	@PostMapping("/create/{productId}/{userId}")
	public ResponseEntity<Object> create(@Valid @RequestBody Cart cart, BindingResult result, @PathVariable Long productId,
			@PathVariable Long userId) {
		if (result.hasErrors()) {
			List<String> errorMessages = new ArrayList<>();
			for (ObjectError error : result.getAllErrors()) {
				errorMessages.add(error.getDefaultMessage());
			}
			Collections.sort(errorMessages);
			return ResponseEntity.status(400).body(errorMessages);
		}
		// check if cart exists. if it does, update the quantity and total price
		List<Cart> existingCart = this.cartServ.findByProductIdAndUserIdAndFalse(productId, userId);
		// do a loop to see if the size matches
		if (existingCart.size() > 0) {
			for (Cart cartItem : existingCart) {
				if (cartItem.getSize().equals(cart.getSize())) {
					cartItem.setQuantity(cartItem.getQuantity() + cart.getQuantity());
					cartItem.setTotal(cartItem.getTotal() + cart.getTotal());
					return ResponseEntity.ok(this.cartServ.update(cartItem));
				}
			}
		}
		// if cart does not exist, create a new cart
		Cart newCart = this.cartServ.create(cart);
		return ResponseEntity.ok(newCart);
	}

	// if (existingCart != null && existingCart.getSize().equals(cart.getSize())) {
	// existingCart.setQuantity(existingCart.getQuantity() + cart.getQuantity());
	// existingCart.setTotal(existingCart.getTotal() + cart.getTotal());
	// return ResponseEntity.ok(this.cartServ.update(existingCart));
	// } else {
	// // if cart does not exist, create a new cart
	// Cart newCart = this.cartServ.create(cart);
	// return ResponseEntity.ok(newCart);
	// }

	@PutMapping("/update/{id}")
	public ResponseEntity<Cart> update(@RequestBody Cart cart) {
		return ResponseEntity.ok(this.cartServ.update(cart));
	}

	// find cart by user id
	@GetMapping("/find/{id}")
	public ResponseEntity<List<Cart>> findByUserId(@PathVariable Long id) {
		return ResponseEntity.ok(this.cartServ.findByUserId(id));
	}

	@GetMapping("/find/uncomplete/{id}")
	public List<Map<String, Object>> findByUserIdAndIsCompletedFalse(@PathVariable Long id) {
		List<Cart> carts = this.cartServ.findByCompletedFalse(id);
		List<Map<String, Object>> cartInfoList = new ArrayList<>();
		for (Cart cart : carts) {
			Map<String, Object> cartInfo = new HashMap<>();
			cartInfo.put("id", cart.getId());
			cartInfo.put("quantity", cart.getQuantity());
			cartInfo.put("size", cart.getSize());
			cartInfo.put("total", cart.getTotal());
			cartInfo.put("complete", cart.getComplete());
			Map<String, Object> productInfo = new HashMap<>();
			productInfo.put("id", cart.getProduct().getId());
			productInfo.put("productName", cart.getProduct().getProductName());
			productInfo.put("productImage1", cart.getProduct().getProductImage1());
			cartInfo.put("product", productInfo);
			cartInfoList.add(cartInfo);
		}
		return cartInfoList;
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Cart> delete(@PathVariable Long id) {
		this.cartServ.delete(id);
		return ResponseEntity.status(200).body(null);
	}

}
