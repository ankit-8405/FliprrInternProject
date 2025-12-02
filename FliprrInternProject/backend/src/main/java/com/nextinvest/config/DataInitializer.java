package com.nextinvest.config;

import com.nextinvest.entity.Offering;
import com.nextinvest.repository.OfferingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {
    
    @Autowired
    private OfferingRepository offeringRepository;
    
    @Override
    public void run(String... args) {
        if (offeringRepository.count() == 0) {
            createSampleOfferings();
        }
    }
    
    private void createSampleOfferings() {
        String[] images = {
            "/assest/Next Invest - Landing Page (images)/10.svg",
            "/assest/Next Invest - Landing Page (images)/12.svg",
            "/assest/Next Invest - Landing Page (images)/8.svg",
            "/assest/Next Invest - Landing Page (images)/10.svg",
            "/assest/Next Invest - Landing Page (images)/11.svg",
            "/assest/Next Invest - Landing Page (images)/12.svg"
        };
        
        for (int i = 0; i < 6; i++) {
            Offering offering = new Offering();
            offering.setTag("HOUSE");
            offering.setImage(images[i]);
            offering.setTitle("Oxalis");
            offering.setLocation("Brooklyn, NY");
            offering.setDescription("A recognized leader in language immersion & early education, opening second school");
            offering.setTotalPrice(1000000.0);
            offering.setSecurityType("Revenue Sharing Note");
            offering.setInvestmentMultiple(1.4);
            offering.setMaturity(48);
            offering.setMinimumInvestment(100.0);
            offering.setCreatedAt(LocalDateTime.now());
            offering.setUpdatedAt(LocalDateTime.now());
            
            offeringRepository.save(offering);
        }
    }
}
