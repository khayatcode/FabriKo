package com.groupproject.tshirtpalooza.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.Shipping;
import com.groupproject.tshirtpalooza.services.ShippingService;

@RestController
public class ShippingController {
	
	@Autowired
	private ShippingService shippingServ;
	
//	@Autowired
//	private UserService userServ;
//  NOTE: for email domain name check fabriko.com prevent from creating an "admin" account type

	@GetMapping("/shipping")
	public ResponseEntity<List<Shipping>> items(){
		return ResponseEntity.status(200).body(this.shippingServ.all());
	}
	
	@GetMapping("/shipping/{id}")
	public ResponseEntity<Shipping> getOneById(@PathVariable Long id){
		return ResponseEntity.status(200).body(this.shippingServ.getOne(id));
	}
	
	@PostMapping("/shipping/add")
	public ResponseEntity<Shipping> add(@Valid @RequestBody Shipping shipping
//			HttpSession session
			){
//		if(session.getAttribute("userId") == null) {
//			return ResponseEntity.badRequest().build();
//		}
//		User user = userServ.getOne((Long)session.getAttribute("userId"));
//		
//		if(user.getAccountType().equals("Admin")) {
			Shipping savedProduct = shippingServ.create(shipping);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
//		}
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
