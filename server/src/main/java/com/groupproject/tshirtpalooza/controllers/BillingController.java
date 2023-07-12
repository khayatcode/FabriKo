package com.groupproject.tshirtpalooza.controllers;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.groupproject.tshirtpalooza.models.Billing;
import com.groupproject.tshirtpalooza.services.BillingService;

@CrossOrigin
@RestController
@RequestMapping("/billing")
public class BillingController {

	@Autowired
	private BillingService billingSer;

	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Billing>> findByUserId(@PathVariable Long id) {
		Optional<Billing> optBilling = Optional.ofNullable(this.billingSer.findByUserId(id));
		if (optBilling.isPresent()) {
			System.out.println("Billing Controller " + optBilling.get().getExp());
			return ResponseEntity.status(200).body(optBilling);
		} else {
			System.out.println("Billing Controller Failed ");
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping("/create/update/{id}")
	public ResponseEntity<Object> create(@Valid @RequestBody Billing billing, BindingResult result, @PathVariable Long id) {
		if (result.hasErrors() || (billing.getExp() != null && billing.getExp().before(new Date()))) {
			List<String> errorMessages = new ArrayList<>();
			for (ObjectError error : result.getAllErrors()) {
				errorMessages.add(error.getDefaultMessage());
			}
            if (billing.getExp() != null && billing.getExp().before(new Date())) {
                errorMessages.add("Expiration date must be in the future");
            }
			Collections.sort(errorMessages);
			return ResponseEntity.status(400).body(errorMessages);
		}
		System.out.println("Billing date: " + billing.getExp());
		Billing newBilling = this.billingSer.create(billing);
		return ResponseEntity.status(200).body(newBilling);
	}

	@PutMapping("/update")
	public ResponseEntity<Billing> update(@RequestBody Billing billing) {
		return ResponseEntity.ok(this.billingSer.update(billing));
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable Long id) {
		this.billingSer.delete(id);
		return ResponseEntity.status(200).body(null);
	}

}
