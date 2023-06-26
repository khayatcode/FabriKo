package com.groupproject.tshirtpalooza.models;

import java.math.BigInteger;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="billing")
public class Billing {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @NotBlank(message="Name is required!")
    @Size(min=2, message="Name must be at least 2 characters")
	private String name;
    
    @NotNull(message="Card Number is required!")
    private BigInteger card;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    @NotNull(message="Experation date is required!")
    private Date experationDate;
    
    @NotNull(message="CVV is required!")
    private Integer cvv;
    
    @NotBlank(message="Street address is required!")
	private String address1;
    
	private String address2;
	
	@NotBlank(message="City is required!")
	private String city;
	
	@NotBlank(message="State is required!")
	private String state;
	
	@NotNull(message="Zip is required!")
	private Integer zip;
	
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name="user_id")
//    private User user;
    
    public Billing() {}
    
    @PrePersist
    protected void createAt(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void updateAt(){
        this.updatedAt = new Date();
    }

    
    //=============================== GETTERS AND SETTERS ==============================
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

	public BigInteger getCard() {
		return card;
	}

	public void setCard(BigInteger card) {
		this.card = card;
	}

	public Date getExperationDate() {
		return experationDate;
	}

	public void setExperationDate(Date experationDate) {
		this.experationDate = experationDate;
	}

	public Integer getCvv() {
		return cvv;
	}

	public void setCvv(Integer cvv) {
		this.cvv = cvv;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Integer getZip() {
		return zip;
	}

	public void setZip(Integer zip) {
		this.zip = zip;
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

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
    
}
