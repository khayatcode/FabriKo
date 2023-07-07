package com.groupproject.tshirtpalooza.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.Cart;
import com.groupproject.tshirtpalooza.services.CartService;
import com.groupproject.tshirtpalooza.services.ProductService;
import com.groupproject.tshirtpalooza.services.UserService;

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

    @PostMapping("/create")
    public ResponseEntity<Cart> create(@RequestBody Cart cart) {
    	System.out.println("Create Billing");
        return ResponseEntity.status(HttpStatus.CREATED).body(this.cartServ.create(cart));
    }

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
    public ResponseEntity<List<Cart>> findByUserIdAndIsCompletedFalse(@PathVariable Long id) {
    	System.out.println("CART Controller");
        List<Cart> carts = this.cartServ.findByCompletedFalse(id);
        for (Cart cart : carts) {
            System.out.println("Single Cart Controller: " + cart.getProduct().getProductImage1());
        }
        System.out.println("CART Controller Final");

        return ResponseEntity.ok(carts);
    } 


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Cart> delete(@PathVariable Long id) {
    	this.cartServ.delete(id);
        return ResponseEntity.status(200).body(null);
    }

}
