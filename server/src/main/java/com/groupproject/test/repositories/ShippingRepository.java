package com.groupproject.test.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groupproject.test.models.Shipping;

@Repository
public interface ShippingRepository extends CrudRepository<Shipping, Long>{
	
	List<Shipping> findAll();
	
	Shipping findByUserId(Long id);
	
}

