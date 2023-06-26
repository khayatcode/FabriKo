package com.groupproject.tshirtpalooza.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.groupproject.tshirtpalooza.models.LoginUser;
import com.groupproject.tshirtpalooza.models.User;
import com.groupproject.tshirtpalooza.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http//localhost:3000")
@RestController
public class UserController {
 
 
  @Autowired
  private UserService userServ;

 
  
  
  @PostMapping("/login")
  public ResponseEntity<User> login(@Valid @RequestBody LoginUser loginUser, 
          BindingResult result, HttpSession session) {
      
	  
		User savedLogin = userServ.login(loginUser, result);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(savedLogin);
		
// 		 User user = userServ.login(loginUser, result);
// 		 if(user != null) {
// 			 session.setAttribute("userId", user.getId());
// 			 return ResponseEntity.ok(null);
// 		 }else {
// 			 return ResponseEntity.badRequest().build();
// 		 }
  }
  
  
	@PostMapping("/register/add")
	public ResponseEntity<User> add(@Valid @RequestBody User newUser,
			BindingResult result, HttpSession session){

			User savedProduct = userServ.register(newUser, result);
	 		
			if(newUser != null) {
				
				 session.setAttribute("userId", newUser.getId());
				
				 return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
				 
			}else {
				
			 return ResponseEntity.badRequest().build();
		 }


	}
  
	@GetMapping("/user")
	public ResponseEntity<List<User>> items() {

		return ResponseEntity.status(200).body(this.userServ.all());
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getOneById(@PathVariable Long id) {

		return ResponseEntity.status(200).body(this.userServ.getOne(id));
	}
	
	@PostMapping("/user/update")
	public ResponseEntity<User> update(@Valid @RequestBody User user) {

		User savedProduct = userServ.update(user);

		return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
	}

	@GetMapping("/user/delete/{id}")
	public ResponseEntity<User> delete(@PathVariable Long id) {

		this.userServ.delete(id);

		return ResponseEntity.status(200).body(null);

	}
	
 
	 @GetMapping("/logout")
	 public String logout(HttpSession session) {
		 session.invalidate();
		 return "redirect:/login";
	 }
 
}