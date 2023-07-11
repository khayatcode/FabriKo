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
        System.out.println("CART SERVICE");
        List<Cart> carts = this.cartRepo.findByUserId(id);
        System.out.println("CARTS: " + carts);
        return carts;
    }

    // make a method to find all carts by user id and completed = false, and make complete = true/
    public List<Cart> makeComplete(Long id) {
        List<Cart> carts = this.cartRepo.findByUserId(id);

        for (Cart cart : carts) {
            if (cart.getComplete() == false) {
                cart.setComplete(true);
                this.cartRepo.save(cart);
            }
        }
        return carts;
    }

    public List<Cart> findByCompletedFalse(Long id) {
    List<Cart> carts = this.cartRepo.findByUserId(id);

    List<Cart> incompleteCarts = new ArrayList<Cart>();

    for (Cart cart : carts) {
        if (cart.getComplete() == false) {
            incompleteCarts.add(cart);
        }
    }
    System.out.println("INCOMPLETE CARTS: " + incompleteCarts);
    return incompleteCarts;
}

    public List<Cart> findByProductIdAndUserIdAndFalse(Long productId, Long userId) {
        System.out.println("CART SERVICE ProductId and UserId");
        List<Cart> cart = this.cartRepo.findByProductIdAndUserIdAndCompleteFalse(productId, userId);
        System.out.println("List CART: " + cart);
        return cart;
    }

    

}
