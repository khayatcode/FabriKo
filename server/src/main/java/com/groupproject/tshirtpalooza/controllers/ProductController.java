package com.groupproject.tshirtpalooza.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.Product;
import com.groupproject.tshirtpalooza.services.ProductService;
@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService productServ;
	
//	@Autowired
//	private UserService userServ;

	@GetMapping("/")
	public ResponseEntity<List<Product>> items(){
		return ResponseEntity.status(200).body(this.productServ.all());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> getOneById(@PathVariable Long id){
		return ResponseEntity.status(200).body(this.productServ.getOne(id));
	}
	
	@GetMapping("/api/{category}")
	public ResponseEntity<List<Product>> categoryItems(@PathVariable String category){
		return ResponseEntity.status(200).body(this.productServ.findByProductCategory(category));
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<Product> add(@RequestBody Product product
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
	
	@PostMapping("/update")
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

	@DeleteMapping("/delete/{id}")
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
