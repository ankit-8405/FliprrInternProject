package com.nextinvest.controller;

import com.nextinvest.entity.Offering;
import com.nextinvest.service.OfferingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/offerings")
public class OfferingController {
    
    @Autowired
    private OfferingService offeringService;
    
    @GetMapping
    public ResponseEntity<List<Offering>> getAllOfferings() {
        return ResponseEntity.ok(offeringService.getAllOfferings());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Offering> getOfferingById(@PathVariable Long id) {
        return ResponseEntity.ok(offeringService.getOfferingById(id));
    }
    
    @PostMapping
    public ResponseEntity<Offering> createOffering(@RequestBody Offering offering) {
        return ResponseEntity.ok(offeringService.createOffering(offering));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Offering> updateOffering(@PathVariable Long id, @RequestBody Offering offering) {
        return ResponseEntity.ok(offeringService.updateOffering(id, offering));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOffering(@PathVariable Long id) {
        offeringService.deleteOffering(id);
        return ResponseEntity.noContent().build();
    }
}
