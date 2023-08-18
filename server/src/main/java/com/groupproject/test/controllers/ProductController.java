package com.groupproject.test.controllers;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;

import com.groupproject.test.models.Product;
import com.groupproject.test.services.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService productServ;

	@Autowired
	private ServletContext servletContext;

	@GetMapping("/")
	public ResponseEntity<List<Product>> items() {
		return ResponseEntity.status(200).body(this.productServ.all());
	}

	@GetMapping("/edit/{id}")
	public ResponseEntity<Product> getOneById(@PathVariable Long id) {
		return ResponseEntity.status(200).body(this.productServ.getOne(id));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> getById(@PathVariable Long id) {
		return ResponseEntity.status(200).body(this.productServ.getOne(id));
	}

	@GetMapping("/api/{category}")
	public ResponseEntity<List<Product>> categoryItems(@PathVariable String category) {
		return ResponseEntity.status(200).body(this.productServ.findByProductCategory(category));
	}

// 	@PostMapping("/add")
// 	public ResponseEntity<Object> add(@Valid @RequestBody Product productForm, @RequestParam("productImageTest") MultipartFile productImageTest, HttpServletRequest request)
//         throws IOException {
// 		System.out.println("We Got 1 here");
// 	// 	if (result.hasErrors()) {
//     //     List<String> errorMessages = new ArrayList<>();
//     //     for (ObjectError error : result.getAllErrors()) {
//     //         errorMessages.add(error.getDefaultMessage());
//     //     }
// 	// 	System.out.println("errorMessages " + errorMessages);
// 	// 	Collections.sort(errorMessages);
//     //     return ResponseEntity.status(400).body(errorMessages);
//     // }
// 		Product product = new Product();
// 		product.setProductName(productForm.getProductName());
// 		product.setProductCategory(productForm.getProductCategory());
// 		// product.setProductPrice(Double.parseDouble(productPrice));
// 		product.setProductDescription(productForm.getProductDescription());
// 		System.out.println("We Got 2 here");

// 		String uploadDir = servletContext.getRealPath("/images/product/");
// 		System.out.println("upload Dir " + uploadDir);

// 		String fileName = productImageTest.getOriginalFilename();
// 		String serverFileName = uploadDir + File.separator + fileName;
// 		System.out.println("Full Path " + serverFileName);

// 		File directory = new File(uploadDir);
// 		if (!directory.exists()) {
// 			directory.mkdirs();
// 		}

// 		File serverFile = new File(serverFileName);
// 		productImageTest.transferTo(serverFile);

// 		// This gets base URL. It will be used to construct the URL of the image. It can
// 		// be eaither localhost for the back end or IP address for AWS deployment
// 		String baseUrl = request.getRequestURL().toString();
// 		System.out.println("Base URL" + baseUrl);
// 		String imageUrl = baseUrl.substring(0, baseUrl.length() - request.getRequestURI().length())
// 				+ request.getContextPath() + "/images/product/" + fileName;
// 		System.out.println("Image Url " + imageUrl);
// //	    String imageUrl = "http://localhost:8080/images/product/" + fileName; // Use the relative path
// 		product.setProductImage1(imageUrl);

// 		System.out.println("IMAGE " + productForm.getProductImage1());

// 		this.productServ.save(product);

// 		System.out.println("Product " + product);

// 		// Return the saved product
// 		return ResponseEntity.status(HttpStatus.CREATED).body(product);
// 	}

	// Continue from here. You now are able to show the error messages. Keep @Valid
	// @ModelAttribute Product productForm, BindingResult result
	@PostMapping("/add")
	public ResponseEntity<Object> add(
			@RequestParam(value = "productImage1File", required = false) MultipartFile productImage1File,
			@RequestParam(value = "productImage2File", required = false) MultipartFile productImage2File,
			@RequestParam(value = "productImage3File", required = false) MultipartFile productImage3File,
			@Valid @ModelAttribute Product productForm, BindingResult result, HttpServletRequest request)
			throws IOException {
		System.out.println("We Got 1 here");
		System.out.println("product Image Test " + productImage1File);
		if (result.hasErrors() || productImage1File == null || productImage2File == null || productImage3File == null) {
			List<String> errorMessages = new ArrayList<>();
			for (ObjectError error : result.getAllErrors()) {
				errorMessages.add(error.getDefaultMessage());
			}
			if (productImage1File == null || productImage2File == null || productImage3File == null) {
				errorMessages.add("All Product images is required.");
			}
			System.out.println("errorMessages " + errorMessages);
			Collections.sort(errorMessages);
			return ResponseEntity.status(400).body(errorMessages);
		}

		// Initialize Amazon S3 client test
		String accessKey = "REPLACED_ACCESS_KEY";
	    String secretKey = "REPLACED_SECRET_KEY";
	    String region = "us-east-1";
	    String bucketName = "fabriko-bucket";
	    BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);
	    AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
	            .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
	            .withRegion(region)
	            .build();

	    // Upload images to S3 bucket
	    MultipartFile[] files = { productImage1File, productImage2File, productImage3File };
	    String[] imageUrls = new String[3];
	    for (int i = 0; i < files.length; i++) {
	        MultipartFile file = files[i];
	        if (file != null) {
	            String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
	            File tempFile = File.createTempFile("temp", null);
	            file.transferTo(tempFile);
	            PutObjectRequest putRequest = new PutObjectRequest(bucketName, fileName, tempFile);
	            PutObjectResult putResult = s3Client.putObject(putRequest);
	            tempFile.delete();
	            String imageUrl = s3Client.getUrl(bucketName, fileName).toString();
	            imageUrls[i] = imageUrl;
	        } 
	    }
		productForm.setProductImage1(imageUrls[0]);
		productForm.setProductImage2(imageUrls[1]);
		productForm.setProductImage3(imageUrls[2]);
		
		System.out.println(productForm.getProductImage1());

		this.productServ.save(productForm);

		// Return the saved product
		return ResponseEntity.status(HttpStatus.CREATED).body(productForm);
	}

	@PutMapping("/edit/{id}")
	public ResponseEntity<Object> update(@PathVariable Long id,
			@RequestParam(value = "productImage1File", required = false) MultipartFile productImage1File,
			@RequestParam(value = "productImage2File", required = false) MultipartFile productImage2File,
			@RequestParam(value = "productImage3File", required = false) MultipartFile productImage3File,
			@Valid @ModelAttribute Product productForm, BindingResult result, HttpServletRequest request)
			throws IOException {
		if (result.hasErrors() || productImage1File == null || productImage2File == null || productImage3File == null) {
			List<String> errorMessages = new ArrayList<>();
			for (ObjectError error : result.getAllErrors()) {
				errorMessages.add(error.getDefaultMessage());
			}
			if (productImage1File == null || productImage2File == null || productImage3File == null) {
				errorMessages.add("All Product images is required.");
			}
			Collections.sort(errorMessages);
			return ResponseEntity.status(400).body(errorMessages);
		}

		Optional<Product> optionalProduct = productServ.findById(id);
		if (optionalProduct.isPresent()) {
			Product product = optionalProduct.get();
			product.setProductName(productForm.getProductName());
			product.setProductCategory(productForm.getProductCategory());
			product.setProductPrice(productForm.getProductPrice());
			product.setProductDescription(productForm.getProductDescription());

			String uploadDir = servletContext.getRealPath("/images/product/");
			File directory = new File(uploadDir);
			if (!directory.exists()) {
				directory.mkdirs();
			}

			MultipartFile[] files = { productImage1File, productImage2File, productImage3File };
			String[] imageUrls = new String[3];

			for (int i = 0; i < files.length; i++) {
				MultipartFile file = files[i];
				if (file != null) {
					String fileName = file.getOriginalFilename();
					String serverFileName = uploadDir + File.separator + fileName;
					File serverFile = new File(serverFileName);
					file.transferTo(serverFile);

					String baseUrl = request.getRequestURL().toString();
					String imageUrl = baseUrl.substring(0, baseUrl.length() - request.getRequestURI().length())
							+ request.getContextPath() + "/images/product/" + fileName;
					imageUrls[i] = imageUrl;
				}
			}

			product.setProductImage1(imageUrls[0]);
			product.setProductImage2(imageUrls[1]);
			product.setProductImage3(imageUrls[2]);

			this.productServ.save(product);

			// Return the saved product
			return ResponseEntity.status(HttpStatus.OK).body(product);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Product> delete(@PathVariable Long id) {
		this.productServ.delete(id);
		return ResponseEntity.status(200).body(null);

	}
}
