package com.groupproject.tshirtpalooza.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.LoginUser;
import com.groupproject.tshirtpalooza.models.User;
import com.groupproject.tshirtpalooza.services.UserService;

@CrossOrigin
@RestController
public class UserController {
 
 
  @Autowired
  private UserService userServ;

  @PostMapping("/api/login")
  public ResponseEntity<User> login(@Valid @RequestBody LoginUser loginUser, 
          BindingResult result, HttpSession session) {
	  
		User savedLogin = userServ.login(loginUser, result);
		if(!result.hasErrors()) {
		return ResponseEntity.status(HttpStatus.CREATED).body(savedLogin);
		}
		else {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(savedLogin);
		}
  }
  
 @PostMapping("/api/register")
 public ResponseEntity<User> register(@Valid @RequestBody User user, 
         BindingResult result, Model model, HttpSession session) {
     userServ.register(user, result);
     if(result.hasErrors()) {
    	 System.out.println(result);
    	 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(user);
     }
     else {
    	 System.out.println(user);
    	 return ResponseEntity.status(HttpStatus.CREATED).body(user);
     }
 }
 
 @GetMapping("/api/logout")
 public ResponseEntity<User> logout(HttpSession session) {
	 session.invalidate();
	 return ResponseEntity.status(HttpStatus.RESET_CONTENT).body(null);
 }
 
}