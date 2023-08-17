package com.groupproject.test.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groupproject.test.models.Shipping;
import com.groupproject.test.repositories.ShippingRepository;

@Service
public class ShippingService {
	
	@Autowired
	private ShippingRepository repo;
	
	public Shipping getOne(Long id) {
		
		Optional<Shipping> result = repo.findById(id);
		if(result.isPresent()) {
			return result.get();
		}
		
		return null;
	}
	

	public List<Shipping> all() {
		return repo.findAll();
	}
	
	public Shipping findByUserId(Long id) {
		return repo.findByUserId(id);
	}
	
	public Shipping create(Shipping shipping) {
		return repo.save(shipping);
	}
	
	public void delete(Long id) {
		repo.deleteById(id);
	}
	
	public Shipping update(Shipping shipping) {
		return repo.save(shipping);
	}
}
