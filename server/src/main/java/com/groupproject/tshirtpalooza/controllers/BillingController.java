package com.groupproject.tshirtpalooza.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;
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
public ResponseEntity<Optional<Billing>> findByUserId(@PathVariable Long id) {
    Optional<Billing> optBilling = Optional.ofNullable(this.billingSer.findByUserId(id));
    if (optBilling.isPresent()) {
		System.out.println("Billing Controller" + optBilling.get().getExp());
        return ResponseEntity.status(200).body(optBilling);
    } else {
		System.out.println("Billing Controller Failed");
        return ResponseEntity.notFound().build();
    }
}
	
	@PostMapping("/create/{id}")
	public ResponseEntity<Billing> create(@RequestBody Billing billing, @PathVariable Long id) {
		Optional<Billing> optBilling = Optional.ofNullable(this.billingSer.findByUserId(id));
		if (optBilling.isPresent()) {
			Billing updatedBilling = this.billingSer.create(billing);
			return ResponseEntity.ok(updatedBilling);
		} else {
			System.out.println("Billing date: " + billing.getExp());
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
