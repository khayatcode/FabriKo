package com.groupproject.tshirtpalooza.controllers;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.LoginUser;
import com.groupproject.tshirtpalooza.models.User;
import com.groupproject.tshirtpalooza.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;


@RestController
@Controller
public class UserController {
 
 
  @Autowired
  private UserService userServ;

 
  
  @GetMapping("/login")
  private ResponseEntity<String> login(@RequestParam String email,
		  @RequestParam String password){
	  User user = userServ.findByEmail(email);
	  
	  if(user != null && user.getPassword().equals(password)) {
		  return ResponseEntity.ok("Login successful");
	  }else {
		  return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	  }
  }

  
  @PostMapping("/login")
  public ResponseEntity<String> login(@Valid @RequestBody LoginUser loginUser, 
          BindingResult result, HttpSession session) {
      
  
      if(result.hasErrors()) {
    	  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid username or password1");
      }
 	 else{
 		 User user = userServ.login(loginUser, result);
 		 if(user != null) {
 			 session.setAttribute("userId", user.getId());
 			 return ResponseEntity.ok("Login successful");
 		 }else {
 			 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
 		 }
 	 }
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