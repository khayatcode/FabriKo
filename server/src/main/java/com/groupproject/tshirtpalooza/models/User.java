package com.groupproject.tshirtpalooza.models;

import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
    
@Entity
@Table(name="users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message="First Name is required!")
    @Size(min=2, message="First name must be at least 2 characters")
    private String firstName;
    
    @NotBlank(message="Last Name is required!")
    @Size(min=2, message="Last name must be at least 2 characters")
    private String lastName;
    
    @NotBlank(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotBlank(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
    @Transient
    @NotBlank(message="Confirm Password is required!")
    @Size(min=8, max=128, message="Confirm Password must be at least 8 characters and matches PW")
    private String confirm;
    
    @NotBlank(message="Profile is required!")
    private String accountType;
    
  
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
//    @OneToMany(mappedBy="user", fetch=FetchType.LAZY)
//    private List<Billing> billing;
//    
//    @OneToMany(mappedBy="user", fetch=FetchType.LAZY)
//    private List<Shipping> shipping;
    
//    @OneToMany(mappedBy="user", fetch=FetchType.LAZY)
//    private List<Product> product;
	
    public User() {}
    
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

	

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirm() {
		return confirm;
	}

	public void setConfirm(String confirm) {
		this.confirm = confirm;
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

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

//	public List<Billing> getBilling() {
//		return billing;
//	}
//
//	public void setBilling(List<Billing> billing) {
//		this.billing = billing;
//	}
//
//	public List<Shipping> getShipping() {
//		return shipping;
//	}
//
//	public void setShipping(List<Shipping> shipping) {
//		this.shipping = shipping;
//	}

//	public List<Product> getProduct() {
//		return product;
//	}
//
//	public void setProduct(List<Product> product) {
//		this.product = product;
//	}


	
}
