package com.groupproject.test.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.test.models.LoginUser;
import com.groupproject.test.models.User;
import com.groupproject.test.services.UserService;

@CrossOrigin
@RestController
public class UserController {
 
 
  @Autowired
  private UserService userServ;

  @PostMapping("/api/login")
  public ResponseEntity<Object> login(@Valid @RequestBody LoginUser loginUser, 
          BindingResult result, HttpSession session) {
		User savedLogin = userServ.login(loginUser, result);
		if (result.hasErrors()) {
			List<String> errorMessages = new ArrayList<>();
			for (ObjectError error : result.getAllErrors()) {
				errorMessages.add(error.getDefaultMessage());
			}
			Collections.sort(errorMessages);
			return ResponseEntity.status(400).body(errorMessages);
		}else {
			System.out.println(savedLogin.getId());
			return ResponseEntity.status(HttpStatus.CREATED).body(savedLogin);
		}
		// if(!result.hasErrors()) {
		// return ResponseEntity.status(HttpStatus.CREATED).body(savedLogin);
		// }
		// else {
		// return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(savedLogin);
		// }
  }
  
 @PostMapping("/api/register")
 public ResponseEntity<Object> register(@Valid @RequestBody User user, 
         BindingResult result, Model model, HttpSession session) {
     userServ.register(user, result);
		if (result.hasErrors()) {
			List<String> errorMessages = new ArrayList<>();
			for (ObjectError error : result.getAllErrors()) {
				errorMessages.add(error.getDefaultMessage());
			}
			Collections.sort(errorMessages);
			return ResponseEntity.status(400).body(errorMessages);
		}
     else {
    	 System.out.println(user);
    	 return ResponseEntity.status(HttpStatus.CREATED).body(user);
     }
 }
 
 @GetMapping("/api/logout")
 public ResponseEntity<User> logout(HttpSession session) {
	 session.invalidate();
	 System.out.println("Hello");
	 return ResponseEntity.status(HttpStatus.RESET_CONTENT).body(null);
 }
 
@GetMapping("/api/getuser/{sessionId}")
public ResponseEntity<User> getUser(@PathVariable Long sessionId){
	User currentUser = userServ.getOne(sessionId);
	return ResponseEntity.status(HttpStatus.ACCEPTED).body(currentUser);
}

}