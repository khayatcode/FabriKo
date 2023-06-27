package com.groupproject.tshirtpalooza.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.groupproject.tshirtpalooza.models.Product;
import com.groupproject.tshirtpalooza.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repo;
	
	private static final int PAGE_SIZE = 9;
	
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
	
	public Page<Product> findByCategory(int pageNumber, String category) {
		PageRequest pageRequest = PageRequest.of(pageNumber, PAGE_SIZE, Sort.Direction.DESC, "created_at");
		Page<Product> productsInCategory = repo.findByProductCategory(pageRequest, category);
		return productsInCategory;
	}
	
}
