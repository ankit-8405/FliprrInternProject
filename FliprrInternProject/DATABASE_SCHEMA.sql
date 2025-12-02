-- Create Database
CREATE DATABASE IF NOT EXISTS nextinvest_db;
USE nextinvest_db;

-- Users Table
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    INDEX idx_username (username)
);

-- Offerings Table
CREATE TABLE offerings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    tag VARCHAR(100) NOT NULL,
    image VARCHAR(500) NOT NULL,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT,
    total_price DOUBLE NOT NULL,
    security_type VARCHAR(100) NOT NULL,
    investment_multiple DOUBLE NOT NULL,
    maturity INT NOT NULL,
    minimum_investment DOUBLE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at)
);

-- Newsletter Subscribers Table
CREATE TABLE newsletter_subscribers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);

-- Insert Default Admin User (password: admin123)
-- BCrypt hash for 'admin123'

INSERT INTO users (username, password, role) 
VALUES ('admin', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'ROLE_ADMIN');

-- Sample Offerings Data
INSERT INTO offerings (tag, image, title, location, description, total_price, security_type, investment_multiple, maturity, minimum_investment) VALUES
('Featured', '/assest/Next Invest - Landing Page (images)/1.svg', 'Downtown Coffee Shop', 'New York, NY', 'Established coffee shop in prime downtown location with steady revenue growth', 250000, 'Revenue Share', 1.5, 36, 5000),
('New', '/assest/Next Invest - Landing Page (images)/2.svg', 'Tech Startup Hub', 'San Francisco, CA', 'Co-working space for tech startups with high occupancy rate', 500000, 'Equity', 2.0, 48, 10000),
('Popular', '/assest/Next Invest - Landing Page (images)/3.svg', 'Organic Farm', 'Portland, OR', 'Sustainable organic farm supplying local restaurants and markets', 180000, 'Revenue Share', 1.3, 24, 3000),
('Featured', '/assest/Next Invest - Landing Page (images)/4.svg', 'Boutique Hotel', 'Miami, FL', 'Luxury boutique hotel in the heart of Miami Beach', 750000, 'Debt', 1.8, 60, 15000),
('New', '/assest/Next Invest - Landing Page (images)/5.svg', 'Fitness Center', 'Austin, TX', 'Modern fitness center with personal training and group classes', 320000, 'Revenue Share', 1.6, 36, 7500),
('Popular', '/assest/Next Invest - Landing Page (images)/6.svg', 'Craft Brewery', 'Denver, CO', 'Award-winning craft brewery expanding distribution', 450000, 'Equity', 2.2, 48, 12000);
