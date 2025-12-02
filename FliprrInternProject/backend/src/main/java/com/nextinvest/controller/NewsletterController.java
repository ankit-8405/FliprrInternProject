package com.nextinvest.controller;

import com.nextinvest.dto.ErrorResponse;
import com.nextinvest.entity.Newsletter;
import com.nextinvest.service.NewsletterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/newsletter")
public class NewsletterController {
    
    @Autowired
    private NewsletterService newsletterService;
    
    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribe(@RequestBody Map<String, String> request) {
        try {
            Newsletter newsletter = newsletterService.subscribe(request.get("email"));
            return ResponseEntity.ok(newsletter);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        }
    }
    
    @GetMapping("/subscribers")
    public ResponseEntity<List<Newsletter>> getAllSubscribers() {
        return ResponseEntity.ok(newsletterService.getAllSubscribers());
    }
    
    @DeleteMapping("/subscribers/{id}")
    public ResponseEntity<Void> deleteSubscriber(@PathVariable Long id) {
        newsletterService.deleteSubscriber(id);
        return ResponseEntity.noContent().build();
    }
}
