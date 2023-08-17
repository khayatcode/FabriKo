package com.groupproject.test.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.groupproject.test.models.Product;
import com.groupproject.test.repositories.ProductRepository;

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
	
	public Product save(Product product) {
		return repo.save(product);
	}
	
	public void delete(Long id) {
		repo.deleteById(id);
	}
	
	public List<Product> findByProductCategory(String category) {
		List<Product> productsInCategory = repo.findByProductCategory(category);
		return productsInCategory;
	}


	public Optional<Product> findById(Long id) {
		Optional<Product> findOne = repo.findById(id);
		return findOne;
	}
	
}
