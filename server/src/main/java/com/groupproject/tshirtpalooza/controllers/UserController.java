package com.groupproject.tshirtpalooza.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.LoginUser;
import com.groupproject.tshirtpalooza.models.User;
import com.groupproject.tshirtpalooza.services.UserService;


@RestController
public class UserController {
 
 
  @Autowired
  private UserService userServ;

 
  
//  @GetMapping("/login")
//  private ResponseEntity<User> login(@RequestParam String email,
//		  @RequestParam String password){
//	  User user = userServ.findByEmail(email);
//	  
//	  return ResponseEntity.status(200).body(user);
//  }
  
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
  
  @GetMapping("/register")
  private String register(Model model) {
	  model.addAttribute("newUser", new User());
	  return "register.jsp";
  }
 
  
  
 
 @PostMapping("/register")
 public String register(@Valid @ModelAttribute("newUser") User newUser, 
         BindingResult result, Model model, HttpSession session) {
     

     userServ.register(newUser, result);
     
     if(result.hasErrors()) {

         model.addAttribute("newLogin", new LoginUser());
         return "register.jsp";
     }else {
    	 userServ.register(newUser, result);
    	 session.setAttribute("userId",newUser.getId());
    	 return "redirect:/home";
     }
 
 }
 
 
 @GetMapping("/logout")
 public String logout(HttpSession session) {
	 session.invalidate();
	 return "redirect:/login";
 }
 
}