package com.groupproject.tshirtpalooza.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.groupproject.tshirtpalooza.models.Product;
import com.groupproject.tshirtpalooza.models.User;
import com.groupproject.tshirtpalooza.services.ProductService;
import com.groupproject.tshirtpalooza.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class ProductController {
	
	@Autowired
	private ProductService productServ;
	
	@Autowired
	private UserService userServ;

	@GetMapping("/product")
	public String product(Model modelView) {
		modelView.addAttribute("products", productServ.all());
		
		return "product.jsp";
	}
	
	@GetMapping("/product/add")
	public String addProduct(Model model, HttpSession session) {
		User user = userServ.getOne((Long)session.getAttribute("userId"));
		
		if(user.getAccountType().equals("Admin")) {
			model.addAttribute("product", new Product());
			return "addProduct.jsp";
		}
		
		return "redirect:/product";
	}
	
	@PostMapping("/product/add")
	public String addProduct(@Valid @ModelAttribute("product")Product product,
			BindingResult result, Model model, HttpSession session) {
		User user = userServ.getOne((Long)session.getAttribute("userId"));
		
		if(session.getAttribute("userId") == null) {
			return "redirect:/login";
		}
		
		if(user.getAccountType().equals("Admin")) {
			
			if(result.hasErrors()) {
				model.addAttribute("newProduct", new Product());
				return "addProduct.jsp";
			}else {
				product.setUser(userServ.getOne((Long)session.getAttribute("userId")));
				productServ.create(product);
				return "redirect:/product";
			}
		}
		
		return "redirect:/product";
		
	}
	
	@GetMapping("/product/item/{id}")
	public String showProduct(@ModelAttribute("product")Product product,
			@PathVariable("id")Long id,Model model, HttpSession session){

		
		if(session.getAttribute("userId") == null) {
			return "redirect:/login";
		}
		
		model.addAttribute("thisProduct", productServ.getOne(id));
		return "showProductItem.jsp";

		
	}
	
	@GetMapping("/product/edit/{id}")
	public String editProduct(@ModelAttribute("product")Product product,
	@PathVariable("id")Long id,Model model, HttpSession session){
		User user = userServ.getOne((Long)session.getAttribute("userId"));
		
		if(session.getAttribute("userId") == null) {
			return "redirect:/login";
		}
		
		if(user.getAccountType().equals("Admin")) {
			model.addAttribute("product", productServ.getOne(id));
			return "editProduct.jsp";
		}
		
		return "redirect:/product";
	}
	
	@PutMapping("/product/edit/{id}")
	public String editProduct(@Valid @ModelAttribute("product")Product product,
			BindingResult result, @PathVariable("id")Long id,Model model, HttpSession session) {
		User user = userServ.getOne((Long)session.getAttribute("userId"));
		
		if(session.getAttribute("userId") == null) {
			return "redirect:/login";
		}
		
		if(user.getAccountType().equals("Admin")) {
			if(result.hasErrors()) {
				return "editProduct.jsp";
			}else {
				Product prod = productServ.getOne(id);
				product.setUser(prod.getUser());
				productServ.update(product);
				return "redirect:/product";
			}
		}
		
		return "redirect:/product";
	}
	
	
	
}
