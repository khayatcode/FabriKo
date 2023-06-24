package com.groupproject.tshirtpalooza.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.groupproject.tshirtpalooza.models.Billing;
import com.groupproject.tshirtpalooza.services.ProductService;

@Controller
public class MainController {
	
	@Autowired
	private ProductService productServ;

	
	@GetMapping("/home")
	public String home(Model modelView) {
		modelView.addAttribute("products", productServ.all());
		return "home.jsp";
	}
	
	@GetMapping("/user/shoppingCart")
	public String shoppingCart() {
		return "shoppingCart.jsp";
	}
	
	@GetMapping("/shoppingCart/billing")
	public String billing(Model model) {
		model.addAttribute("billing", new Billing());
		return "billing.jsp";
	}
}
