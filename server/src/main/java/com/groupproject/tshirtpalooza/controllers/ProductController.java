package com.groupproject.tshirtpalooza.controllers;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.groupproject.tshirtpalooza.models.Product;
import com.groupproject.tshirtpalooza.services.ProductService;
@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService productServ;

	@GetMapping("/")
	public ResponseEntity<List<Product>> items(){
		return ResponseEntity.status(200).body(this.productServ.all());
	}
	
	@GetMapping("/edit/{id}")
	public ResponseEntity<Product> getOneById(@PathVariable Long id){
		return ResponseEntity.status(200).body(this.productServ.getOne(id));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> getById(@PathVariable Long id){
		return ResponseEntity.status(200).body(this.productServ.getOne(id));
	}
	
	@GetMapping("/api/{category}")
	public ResponseEntity<List<Product>> categoryItems(@PathVariable String category){
		return ResponseEntity.status(200).body(this.productServ.findByProductCategory(category));
	}
	
//	@PostMapping("/add")
//	public ResponseEntity<Product> add(@RequestBody Product product, MultipartFile file
//			){
//		Product savedProduct = productServ.save(product);
//			return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
//	}
	@PostMapping("/add")
	public ResponseEntity<Product> add(@RequestParam("productImage1") MultipartFile productImage1, @ModelAttribute Product product) throws IllegalStateException, IOException {
		Product savedProduct = productServ.save(product);
		System.out.println(savedProduct);
		String uploadDir = "/images/product";
		File directory = new File(uploadDir);
	      if (!directory.exists()) {
	        directory.mkdirs();
	      }

			String fileName = productImage1.getOriginalFilename();
			String serverFileName = uploadDir + fileName; 
		      File serverFile = new File(uploadDir + fileName);
		      productImage1.transferTo(serverFile);
		      product.setProductImage1(serverFileName);
			
		
		return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<Product> update(@PathVariable Long id, @Valid @RequestBody Product updatedProduct) {
	    Optional<Product> optionalProduct = productServ.findById(id);
	    if (optionalProduct.isPresent()) {
	        Product product = optionalProduct.get();
	        product.setProductName(updatedProduct.getProductName());
	        product.setProductPrice(updatedProduct.getProductPrice());
	        product.setProductDescription(updatedProduct.getProductDescription());
	        product.setProductCategory(updatedProduct.getProductCategory());
	        Product savedProduct = productServ.save(product);
	        return ResponseEntity.status(HttpStatus.OK).body(savedProduct);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Product> delete(@PathVariable Long id){
			this.productServ.delete(id);
			return ResponseEntity.status(200).body(null);

	}
}
