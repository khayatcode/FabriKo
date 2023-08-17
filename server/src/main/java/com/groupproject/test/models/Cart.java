package com.groupproject.tshirtpalooza.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="cart")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Cart {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@NotNull(message="Choose quantity amount")
    @Min(value=1, message="Quantity must be greater than 0")
    private Integer quantity;

    @NotBlank(message="Please choose a size")
    private String size;
    
    @NotNull(message="Total cant be null")
    private Double total;

    @NotNull(message="Complete cant be null")
    private Boolean complete;
    
    @NotNull
    private Integer orderNumber;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="product_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // Add this line to ignore the "hibernateLazyInitializer" and "handler" properties
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // Add this line to ignore the "hibernateLazyInitializer" and "handler" properties
    private User user;
    
    public Cart() {
    	
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}
	

	public Boolean getComplete() {
		return complete;
	}

	public void setComplete(Boolean complete) {
		this.complete = complete;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Integer getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(Integer orderNumber) {
		this.orderNumber = orderNumber;
	}
	
	

}

