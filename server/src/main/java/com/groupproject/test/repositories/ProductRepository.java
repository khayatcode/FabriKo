package com.groupproject.tshirtpalooza.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groupproject.tshirtpalooza.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long>{
	List<Product> findAll();
	List<Product> findByProductCategory(String productCategory);
	Optional<Product> findById(Long id);
}
