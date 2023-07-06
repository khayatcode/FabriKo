package com.groupproject.tshirtpalooza.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groupproject.tshirtpalooza.models.Cart;
import com.groupproject.tshirtpalooza.repositories.CartRepository;

@Service
public class CartService {
	
	@Autowired
	private CartRepository cartRepo;
	
	public Cart create(Cart cart) {
        return this.cartRepo.save(cart);
    }

    public Cart update(Cart cart) {
        return this.cartRepo.save(cart);
    }

    public Cart findById(Long id) {
        return this.cartRepo.findById(id).orElse(null);
    }

    public void delete(Long id) {
        this.cartRepo.deleteById(id);
    }

    public List<Cart> findAll() {
        return (List<Cart>) this.cartRepo.findAll();
    }

    public List<Cart> findByUserId(Long id) {
        return this.cartRepo.findByUserId(id);
    }

    // Get all carts where completed is false
    public List<Cart> findByCompletedFalse(Long id) {
        List<Cart> carts = this.cartRepo.findByUserId(id);

        List<Cart> incompleteCarts = new ArrayList<Cart>();

        for (Cart cart : carts) {
            if (cart.getComplete() == false) {
                incompleteCarts.add(cart);
            }
        }

        return incompleteCarts;

    }

}
