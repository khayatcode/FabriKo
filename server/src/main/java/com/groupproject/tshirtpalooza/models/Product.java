package com.groupproject.tshirtpalooza.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="shirts")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Size(min=3, message="Item Name must be at least 3 characters long")
	private String productName;
	
	@NotBlank(message="Category is required!")
	private String productCategory;
	
	@Min(value=1, message="Price must be at least greater than 0")
	private Double productPrice;
	
	@NotBlank(message="Description is required!")
	private String productDescription;
	
//	private String fileName;
	
//	@Lob
//	@Column(name="content", columnDefinition = "BLOB")
//	private byte[] content;
	
	
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name="user_id")
//    private User user;
    
    public Product() {}
    
    @PrePersist
    protected void createAt(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void updateAt(){
        this.updatedAt = new Date();
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public Double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

    
    //================== GETTERS AND SETTERS ===========================
    
	
    
}
