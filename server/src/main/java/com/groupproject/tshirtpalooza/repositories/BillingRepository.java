package com.groupproject.tshirtpalooza.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.groupproject.tshirtpalooza.models.Billing;

public interface BillingRepository extends CrudRepository<Billing, Long>{
	List<Billing> findAll();
	// get billing by user id
	Billing findByUserId(Long id);
}
