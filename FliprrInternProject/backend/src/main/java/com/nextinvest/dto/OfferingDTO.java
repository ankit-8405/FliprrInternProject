package com.nextinvest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OfferingDTO {
    private Long id;
    private String tag;
    private String image;
    private String title;
    private String location;
    private String description;
    private Double totalPrice;
    private String securityType;
    private Double investmentMultiple;
    private Integer maturity;
    private Double minimumInvestment;
}
