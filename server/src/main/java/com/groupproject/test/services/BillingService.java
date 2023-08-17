package com.groupproject.tshirtpalooza.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groupproject.tshirtpalooza.models.Billing;
import com.groupproject.tshirtpalooza.repositories.BillingRepository;

@Service
public class BillingService {
	
	@Autowired
	private BillingRepository repo;
	
	public Billing getOne(Long id) {
		
		Optional<Billing> result = repo.findById(id);
		if(result.isPresent()) {
			return result.get();
		}
		
		return null;
	}
	

	public List<Billing> all() {
		return repo.findAll();
	}
	
	// get Billing by user id
	public Billing findByUserId(Long id) {
		return repo.findByUserId(id);
	}
	
	public Billing create(Billing billing) {
		return repo.save(billing);
	}
	
	public void delete(Long id) {
		repo.deleteById(id);
	}
	
	public Billing update(Billing billing) {
		return repo.save(billing);
	}
}
