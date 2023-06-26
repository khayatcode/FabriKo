package com.groupproject.tshirtpalooza.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.groupproject.tshirtpalooza.models.Billing;
import com.groupproject.tshirtpalooza.services.BillingService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http//localhost:3000")
@RestController
public class BillingController {
	
	@Autowired
	private BillingService billingServ;

	@GetMapping("/billing")
	public ResponseEntity<List<Billing>> items() {

		return ResponseEntity.status(200).body(this.billingServ.all());
	}

	@GetMapping("/billing/{id}")
	public ResponseEntity<Billing> getOneById(@PathVariable Long id) {

		return ResponseEntity.status(200).body(this.billingServ.getOne(id));
	}

	@PostMapping("/billing/add")
	public ResponseEntity<Billing> add(@Valid @RequestBody Billing billing) {

		Billing savedProduct = billingServ.create(billing);

		return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);

	}

	@PostMapping("/billing/update")
	public ResponseEntity<Billing> update(@Valid @RequestBody Billing billing) {

		Billing savedProduct = billingServ.update(billing);

		return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
	}

	@GetMapping("/billing/delete/{id}")
	public ResponseEntity<Billing> delete(@PathVariable Long id) {

		this.billingServ.delete(id);

		return ResponseEntity.status(200).body(null);

	}
	
}
