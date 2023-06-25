package com.groupproject.tshirtpalooza.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.Product;
import com.groupproject.tshirtpalooza.services.ProductService;

import jakarta.validation.Valid;

@RestController
@Controller
public class ProductController {
	
	@Autowired
	private ProductService productServ;
	
//	@Autowired
//	private UserService userServ;

	@GetMapping("/product")
	public ResponseEntity<List<Product>> items(){
		return ResponseEntity.status(200).body(this.productServ.all());
	}
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getOneById(@PathVariable Long id){
		return ResponseEntity.status(200).body(this.productServ.getOne(id));
	}
	
	@PostMapping("/product/add")
	public ResponseEntity<Product> add(@Valid @RequestBody Product product
//			HttpSession session
			){
//		if(session.getAttribute("userId") == null) {
//		return "redirect:/login";
//		}
//		User user = userServ.getOne((Long)session.getAttribute("userId"));
//		
//		if(user.getAccountType().equals("Admin")) {
			Product savedProduct = productServ.create(product);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
//		}
	}
	
	@PostMapping("/product/update")
	public ResponseEntity<Product> update(@Valid @RequestBody Product product
//			HttpSession session
			){
//		if(session.getAttribute("userId") == null) {
//		return "redirect:/login";
//		}
//		User user = userServ.getOne((Long)session.getAttribute("userId"));
//		
//		if(user.getAccountType().equals("Admin")) {
			Product savedProduct = productServ.update(product);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
//		}
	}

	@GetMapping("/product/delete/{id}")
	public ResponseEntity<Product> delete(@PathVariable Long id){
//		if(session.getAttribute("userId") == null) {
//		return "redirect:/login";
//		}
		
//		User user = userServ.getOne((Long)session.getAttribute("userId"));
//		
//		if(user.getAccountType().equals("Admin")) {
			this.productServ.delete(id);
			return ResponseEntity.status(200).body(null);
//	    }
		
	}
	
	
}
