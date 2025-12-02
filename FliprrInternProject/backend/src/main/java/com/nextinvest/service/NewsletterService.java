package com.nextinvest.service;

import com.nextinvest.entity.Newsletter;
import com.nextinvest.repository.NewsletterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NewsletterService {
    
    @Autowired
    private NewsletterRepository newsletterRepository;
    
    public Newsletter subscribe(String email) {
        if (newsletterRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already subscribed");
        }
        
        Newsletter newsletter = new Newsletter();
        newsletter.setEmail(email);
        return newsletterRepository.save(newsletter);
    }
    
    public List<Newsletter> getAllSubscribers() {
        return newsletterRepository.findAll();
    }
    
    public void deleteSubscriber(Long id) {
        newsletterRepository.deleteById(id);
    }
}
