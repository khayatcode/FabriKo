package com.groupproject.tshirtpalooza.controllers;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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
	
	@Autowired
	private ServletContext servletContext;

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
	public ResponseEntity<Product> add(
	        @RequestParam("productImage1") MultipartFile productImage1,
	        @RequestParam("productName") String productName,
	        @RequestParam("productCategory") String productCategory,
	        @RequestParam("productPrice") String productPrice,
	        @RequestParam("productDescription") String productDescription,
	        HttpServletRequest request
	) throws IOException {
	    // Create a new Product instance and set its properties
		System.out.println("We Got here");
		System.out.println("Product Name " + productName);
		System.out.println("Product Image " + productImage1);
	    Product product = new Product();
	    product.setProductName(productName);
	    product.setProductCategory(productCategory);
	    product.setProductPrice(Double.parseDouble(productPrice));
	    product.setProductDescription(productDescription);
	    
	    System.out.println("We Got 2 here");

		// Handle file upload
//		String uploadDir = "/Users/a.khayat/Documents/JAVA/Spring/FabriKo-wade_combined/server/src/main/resources/static/images/product/";		
//		String fileName = productImage1.getOriginalFilename();
//		String serverFileName = uploadDir + fileName;
//		File directory = new File(uploadDir);
//		if (!directory.exists()) {
//			directory.mkdirs();
//		}
//		File serverFile = new File(serverFileName);
//		productImage1.transferTo(serverFile);
//		String imageUrl = "http://localhost:8080/images/product/" + fileName;
//		product.setProductImage1(imageUrl);
	    
	 // Handle file upload

	 	// This gets the absolute path of the folder to upload the image. It will be used to construct the full path of the image
		// ex: /Users/a.khayat/Documents/JAVA/Spring/FabriKo-wade_combined/server/src/main/webapp/images/product/
	    String uploadDir = servletContext.getRealPath("/images/product/");
	    System.out.println("upload Dir " + uploadDir);
		
	    String fileName = productImage1.getOriginalFilename();
	    String serverFileName = uploadDir + File.separator + fileName;
	    System.out.println("Full Path " + serverFileName);
	    

	    File directory = new File(uploadDir);
	    if (!directory.exists()) {
	        directory.mkdirs();
	    }
 
	    File serverFile = new File(serverFileName);
	    productImage1.transferTo(serverFile);
	    
		//This gets base URL. It will be used to construct the URL of the image. It can be eaither localhost for the back end or IP address for AWS deployment
	    String baseUrl = request.getRequestURL().toString();
	    System.out.println("Base URL" + baseUrl);
	    String imageUrl = baseUrl.substring(0, baseUrl.length() - request.getRequestURI().length()) + request.getContextPath() + "/images/product/" + fileName;
	    System.out.println("Image Url " + imageUrl); 
//	    String imageUrl = "http://localhost:8080/images/product/" + fileName; // Use the relative path
	    product.setProductImage1(imageUrl);  

 
	    
	    System.out.println("IMAGE " + product.getProductImage1());
	     
	    // Save the product to the database
	    Product savedProduct = productServ.save(product);
	    
	    System.out.println("Product " + savedProduct);

	    // Return the saved product
	    return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
	} 

	
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
