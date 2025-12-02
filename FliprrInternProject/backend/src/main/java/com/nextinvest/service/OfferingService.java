package com.nextinvest.service;

import com.nextinvest.entity.Offering;
import com.nextinvest.repository.OfferingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OfferingService {
    
    @Autowired
    private OfferingRepository offeringRepository;
    
    public List<Offering> getAllOfferings() {
        return offeringRepository.findAll();
    }
    
    public Offering getOfferingById(Long id) {
        return offeringRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Offering not found"));
    }
    
    public Offering createOffering(Offering offering) {
        offering.setCreatedAt(LocalDateTime.now());
        offering.setUpdatedAt(LocalDateTime.now());
        return offeringRepository.save(offering);
    }
    
    public Offering updateOffering(Long id, Offering offering) {
        Offering existing = getOfferingById(id);
        existing.setTag(offering.getTag());
        existing.setImage(offering.getImage());
        existing.setTitle(offering.getTitle());
        existing.setLocation(offering.getLocation());
        existing.setDescription(offering.getDescription());
        existing.setTotalPrice(offering.getTotalPrice());
        existing.setSecurityType(offering.getSecurityType());
        existing.setInvestmentMultiple(offering.getInvestmentMultiple());
        existing.setMaturity(offering.getMaturity());
        existing.setMinimumInvestment(offering.getMinimumInvestment());
        existing.setUpdatedAt(LocalDateTime.now());
        return offeringRepository.save(existing);
    }
    
    public void deleteOffering(Long id) {
        offeringRepository.deleteById(id);
    }
}
