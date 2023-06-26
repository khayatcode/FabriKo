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
	
	@NotBlank(message="Item Name is required!")
	@Size(min=3, message="Item Name must be at least 3 characters long")
	private String name;
	
	@NotBlank(message="Category is required!")
	private String category;
	
	@NotNull(message="Price is required!")
	@Min(value=1, message="Price must be at least greater than 0")
	private Double price;
	
	@NotBlank(message="Description is required!")
	@Size(min=10, message="Description must be at least 10 characters long")
	private String description;
	
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

    
    //================== GETTERS AND SETTERS ===========================
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
//
//	public String getFileName() {
//		return fileName;
//	}
//
//	public void setFileName(String fileName) {
//		this.fileName = fileName;
//	}

//	public byte[] getContent() {
//		return content;
//	}
//
//	public void setContent(byte[] content) {
//		this.content = content;
//	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
    
    
}
