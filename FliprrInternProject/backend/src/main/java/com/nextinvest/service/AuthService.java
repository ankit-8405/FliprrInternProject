package com.nextinvest.service;

import com.nextinvest.dto.*;
import com.nextinvest.entity.User;
import com.nextinvest.repository.UserRepository;
import com.nextinvest.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("USER");
        
        user = userRepository.save(user);
        
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());
        UserDTO userDTO = new UserDTO(user.getId(), user.getName(), user.getEmail(), user.getRole());
        
        return new AuthResponse(token, userDTO);
    }
    
    public AuthResponse login(LoginRequest request) {
        // Check if it's admin login (using username)
        if (request.getUsername() != null && !request.getUsername().isEmpty()) {
            // Admin login with hardcoded credentials
            if ("admin".equals(request.getUsername()) && "admin123".equals(request.getPassword())) {
                String token = jwtUtil.generateToken("admin", "ADMIN");
                UserDTO userDTO = new UserDTO(0L, "Admin", "admin", "ADMIN");
                return new AuthResponse(token, userDTO);
            } else {
                throw new RuntimeException("Invalid admin credentials");
            }
        }
        
        // Regular user login with email
        if (request.getEmail() == null || request.getEmail().isEmpty()) {
            throw new RuntimeException("Email is required");
        }
        
        if (request.getPassword() == null || request.getPassword().isEmpty()) {
            throw new RuntimeException("Password is required");
        }
        
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
        
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());
        UserDTO userDTO = new UserDTO(user.getId(), user.getName(), user.getEmail(), user.getRole());
        
        return new AuthResponse(token, userDTO);
    }
}
