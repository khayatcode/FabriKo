package com.groupproject.tshirtpalooza.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ResponseEntity<Billing> findByUserId(@PathVariable Long id) {
		Billing billing = this.billingSer.findByUserId(id);
		if (billing == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(billing);
	}
	
	@PostMapping("/create/{id}")
	public ResponseEntity<Billing> create(@RequestBody Billing billing, @PathVariable Long id) {
		Optional<Billing> optBilling = Optional.ofNullable(this.billingSer.findByUserId(id));
		if (optBilling.isPresent()) {
			Billing existingBilling = optBilling.get();
			existingBilling.setName(billing.getName());
			existingBilling.setEmail(billing.getEmail());
			existingBilling.setAddress(billing.getAddress());
			existingBilling.setCity(billing.getCity());
			existingBilling.setState(billing.getState());
			existingBilling.setZip(billing.getZip());
			existingBilling.setCard(billing.getCard());
			existingBilling.setExp(billing.getExp());
			existingBilling.setCvv(billing.getCvv());
			Billing updatedBilling = this.billingSer.create(existingBilling);
			return ResponseEntity.ok(updatedBilling);
		} else {
	//        billing.setUser(this.userSer.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id)));
			Billing newBilling = this.billingSer.create(billing);
			return ResponseEntity.ok(newBilling);
		}
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
