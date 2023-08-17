package com.groupproject.test.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.test.models.Shipping;
import com.groupproject.test.services.CartService;
import com.groupproject.test.services.ShippingService;

@CrossOrigin
@RestController
@RequestMapping("/shipping")
public class ShippingController {
	
	@Autowired
	private ShippingService shippingServ;

	@Autowired
	private CartService cartServ;
	
	@GetMapping("/shipping")
	public ResponseEntity<List<Shipping>> items(){
		return ResponseEntity.status(200).body(this.shippingServ.all());
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<Optional<Shipping>> findByUserId(@PathVariable Long id){
		Optional<Shipping> optShipping = Optional.ofNullable(this.shippingServ.findByUserId(id));
		if(optShipping.isPresent()) {
			return ResponseEntity.status(200).body(optShipping);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/add/update/{id}")
	public ResponseEntity<Object> add(@Valid @RequestBody Shipping shipping, BindingResult result, @PathVariable Long id){
		if (result.hasErrors()) {
			List<String> errorMessages = new ArrayList<>();
			for (ObjectError error : result.getAllErrors()) {
				errorMessages.add(error.getDefaultMessage());
			}
			Collections.sort(errorMessages);
			return ResponseEntity.status(400).body(errorMessages);
		}
		this.shippingServ.create(shipping);
		// get random 10 digit number
		Integer randomNum = (int) (Math.random() * 1000000000);
		this.cartServ.makeComplete(id, randomNum);
		return ResponseEntity.status(HttpStatus.CREATED).body(randomNum);
	}
	
	@PostMapping("/shipping/update")
	public ResponseEntity<Shipping> update(@Valid @RequestBody Shipping shipping
//			HttpSession session
			){
//		if(session.getAttribute("userId") == null) {
//			return ResponseEntity.badRequest().build();
//		}
//		User user = userServ.getOne((Long)session.getAttribute("userId"));
//		
//		if(user.getAccountType().equals("Admin")) {
			Shipping savedProduct = shippingServ.update(shipping);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
//		}
	}

	@GetMapping("/shipping/delete/{id}")
	public ResponseEntity<Shipping> delete(@PathVariable Long id){
//		if(session.getAttribute("userId") == null) {
//			return ResponseEntity.badRequest().build();
//		}
		
//		User user = userServ.getOne((Long)session.getAttribute("userId"));
//		
//		if(user.getAccountType().equals("Admin")) {
			this.shippingServ.delete(id);
			return ResponseEntity.status(200).body(null);
//	    }
		
	}
}
