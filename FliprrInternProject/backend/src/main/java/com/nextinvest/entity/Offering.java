package com.nextinvest.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "offerings")
public class Offering {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String tag;
    private String image;
    private String title;
    private String location;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "total_price")
    private Double totalPrice;
    
    @Column(name = "get_price")
    private Double getPrice;
    
    @Column(name = "security_type")
    private String securityType;
    
    @Column(name = "investment_multiple")
    private Double investmentMultiple;
    
    private Integer maturity;
    
    @Column(name = "minimum_investment")
    private Double minimumInvestment;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTag() { return tag; }
    public void setTag(String tag) { this.tag = tag; }
    
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public Double getTotalPrice() { return totalPrice; }
    public void setTotalPrice(Double totalPrice) { this.totalPrice = totalPrice; }
    
    public Double getGetPrice() { return getPrice; }
    public void setGetPrice(Double getPrice) { this.getPrice = getPrice; }
    
    public String getSecurityType() { return securityType; }
    public void setSecurityType(String securityType) { this.securityType = securityType; }
    
    public Double getInvestmentMultiple() { return investmentMultiple; }
    public void setInvestmentMultiple(Double investmentMultiple) { this.investmentMultiple = investmentMultiple; }
    
    public Integer getMaturity() { return maturity; }
    public void setMaturity(Integer maturity) { this.maturity = maturity; }
    
    public Double getMinimumInvestment() { return minimumInvestment; }
    public void setMinimumInvestment(Double minimumInvestment) { this.minimumInvestment = minimumInvestment; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
