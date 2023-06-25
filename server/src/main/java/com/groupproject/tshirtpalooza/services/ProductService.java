package com.groupproject.tshirtpalooza.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.groupproject.tshirtpalooza.models.Product;
import com.groupproject.tshirtpalooza.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repo;
	
	public Product getOne(Long id) {
		
		Optional<Product> result = repo.findById(id);
		if(result.isPresent()) {
			return result.get();
		}
		
		return null;
	}
	

	public List<Product> all() {
		return repo.findAll();
	}
	
	public Product create(Product product) {
		return repo.save(product);
	}
	
	public void delete(Long id) {
		repo.deleteById(id);
	}
	
	public Product update(Product product) {
		return repo.save(product);
	}
	
}
