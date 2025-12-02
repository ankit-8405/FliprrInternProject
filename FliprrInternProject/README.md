# Next Invest - Investment Platform

A full-stack investment platform built with React + Vite + Tailwind CSS (Frontend) and Spring Boot + MySQL + JWT (Backend).

## Features

### Landing Page
- Responsive modern UI matching the reference design
- Dynamic investment offerings from backend API
- Newsletter subscription form
- Smooth animations with Framer Motion & AOS
- Stats section with investment metrics
- Capital raising section

### Admin Panel
- JWT-based authentication
- Dashboard with charts (Chart.js)
- CRUD operations for investment offerings
- Newsletter subscriber management
- Protected routes

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Axios for API calls
- React Router for navigation
- Framer Motion & AOS for animations
- Chart.js for data visualization
- React Icons

### Backend
- Spring Boot 3.2
- Spring Security with JWT
- Spring Data JPA
- MySQL Database
- Lombok for boilerplate reduction

## Project Structure

```
investment-platform/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── OfferingsSection.jsx
│   │   │   ├── OfferingCard.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── RaiseCapitalSection.jsx
│   │   │   ├── NewsletterSection.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   └── admin/
│   │   │       ├── AdminLogin.jsx
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── ManageOfferings.jsx
│   │   │       └── ManageSubscribers.jsx
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── offeringService.js
│   │   │   └── newsletterService.js
│   │   ├── config/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── backend/
    ├── src/main/java/com/nextinvest/
    │   ├── entity/
    │   │   ├── User.java
    │   │   ├── Offering.java
    │   │   └── Newsletter.java
    │   ├── repository/
    │   │   ├── UserRepository.java
    │   │   ├── OfferingRepository.java
    │   │   └── NewsletterRepository.java
    │   ├── service/
    │   │   ├── OfferingService.java
    │   │   └── NewsletterService.java
    │   ├── controller/
    │   │   ├── AuthController.java
    │   │   ├── OfferingController.java
    │   │   └── NewsletterController.java
    │   ├── security/
    │   │   ├── JwtUtil.java
    │   │   ├── JwtAuthenticationFilter.java
    │   │   ├── SecurityConfig.java
    │   │   └── CustomUserDetailsService.java
    │   ├── dto/
    │   │   ├── LoginRequest.java
    │   │   ├── AuthResponse.java
    │   │   ├── OfferingDTO.java
    │   │   └── NewsletterDTO.java
    │   └── InvestmentPlatformApplication.java
    ├── src/main/resources/
    │   └── application.properties
    └── pom.xml
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);
```

### Offerings Table
```sql
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
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);
```

### Newsletter Subscribers Table
```sql
CREATE TABLE newsletter_subscribers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL
);
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- Java 17+
- MySQL 8+
- Maven

### Backend Setup

1. Create MySQL database:
```sql
CREATE DATABASE nextinvest_db;
```

2. Update `backend/src/main/resources/application.properties`:
```properties
spring.datasource.username=your_username
spring.datasource.password=your_password
jwt.secret=YourSecretKeyForJWTTokenGenerationMustBeLongEnough
```

3. Run the backend:
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

4. Create admin user (run SQL):
```sql
INSERT INTO users (username, password, role) 
VALUES ('admin', '$2a$10$YourBcryptHashedPassword', 'ROLE_ADMIN');
```

To generate bcrypt password, use online tool or:
```java
BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
String hashedPassword = encoder.encode("admin123");
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Create `.env` file:
```
VITE_API_URL=http://localhost:8080/api
```

3. Run development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## API Endpoints

### Public Endpoints
- `GET /api/offerings` - Get all offerings
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/auth/login` - Admin login

### Protected Endpoints (Require JWT)
- `POST /api/offerings` - Create offering
- `PUT /api/offerings/{id}` - Update offering
- `DELETE /api/offerings/{id}` - Delete offering
- `GET /api/newsletter/subscribers` - Get all subscribers
- `DELETE /api/newsletter/subscribers/{id}` - Delete subscriber

## Deployment

### Frontend (Vercel/Netlify)

**Vercel:**
```bash
cd frontend
npm run build
vercel --prod
```

**Netlify:**
```bash
cd frontend
npm run build
# Deploy dist folder
```

### Backend (Render/AWS/GCP)

**Render:**
1. Create new Web Service
2. Connect GitHub repository
3. Build command: `cd backend && mvn clean install`
4. Start command: `java -jar target/investment-platform-1.0.0.jar`
5. Add environment variables

**Docker (Optional):**
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

## Environment Variables

### Frontend
- `VITE_API_URL` - Backend API URL

### Backend
- `SPRING_DATASOURCE_URL` - MySQL connection URL
- `SPRING_DATASOURCE_USERNAME` - Database username
- `SPRING_DATASOURCE_PASSWORD` - Database password
- `JWT_SECRET` - JWT secret key
- `JWT_EXPIRATION` - Token expiration time (ms)

## Default Admin Credentials
- Username: `admin`
- Password: `admin123` (Change in production!)

## Features Implemented

✅ Responsive landing page with modern UI
✅ Dynamic offerings from backend API
✅ Newsletter subscription with database storage
✅ JWT authentication for admin panel
✅ Admin dashboard with charts
✅ CRUD operations for offerings
✅ Newsletter subscriber management
✅ Protected routes
✅ Smooth animations (Framer Motion + AOS)
✅ RESTful API design
✅ Security with Spring Security + JWT
✅ CORS configuration
✅ Error handling

## License
MIT
