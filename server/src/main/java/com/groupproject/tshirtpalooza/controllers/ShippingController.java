package com.groupproject.tshirtpalooza.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.Shipping;
import com.groupproject.tshirtpalooza.services.CartService;
import com.groupproject.tshirtpalooza.services.ShippingService;

@CrossOrigin
@RestController
@RequestMapping("/shipping")
public class ShippingController {
	
	@Autowired
	private ShippingService shippingServ;

	@Autowired
	private CartService cartServ;
	
//	@Autowired
//	private UserService userServ;
//  NOTE: for email domain name check fabriko.com prevent from creating an "admin" account type

	@GetMapping("/shipping")
	public ResponseEntity<List<Shipping>> items(){
		return ResponseEntity.status(200).body(this.shippingServ.all());
	}
	
//	@GetMapping("/shipping/{id}")
//	public ResponseEntity<Shipping> getOneById(@PathVariable Long id){
//		return ResponseEntity.status(200).body(this.shippingServ.getOne(id));
//	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<Optional<Shipping>> findByUserId(@PathVariable Long id){
		Optional<Shipping> optShipping = Optional.ofNullable(this.shippingServ.findByUserId(id));
		if(optShipping.isPresent()) {
			return ResponseEntity.status(200).body(optShipping);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/add/{id}")
	public ResponseEntity<Shipping> add(@RequestBody Shipping shipping, @PathVariable Long id){
		System.out.println("shipping controller add method");
		System.out.println("Request body: " + shipping);
		Optional<Shipping> optShipping = Optional.ofNullable(this.shippingServ.findByUserId(id));
		if(optShipping.isPresent()) {
			Shipping existingShipping = optShipping.get();
			existingShipping.setName(shipping.getName());
			existingShipping.setAddress(shipping.getAddress());
			existingShipping.setCity(shipping.getCity());
			existingShipping.setState(shipping.getState());
			existingShipping.setZip(shipping.getZip());
			existingShipping.setCountry(shipping.getCountry());
			existingShipping.setPhoneNumber(shipping.getPhoneNumber());
			Shipping savedShipping = shippingServ.update(existingShipping);
			this.cartServ.makeComplete(id);
			return ResponseEntity.ok(savedShipping);
		}
		Shipping savedShipping = shippingServ.create(shipping);
		this.cartServ.makeComplete(id);
		return ResponseEntity.ok(savedShipping);
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
