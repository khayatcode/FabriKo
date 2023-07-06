package com.groupproject.tshirtpalooza.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groupproject.tshirtpalooza.models.Cart;

@Repository
public interface CartRepository extends CrudRepository<Cart, Long> {
	List<Cart> findAll();

	// Find all carts by user id
	List<Cart> findByUserId(Long id);

}
