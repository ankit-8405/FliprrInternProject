# Next Invest - Setup Guide

## Current Status ✅

Both frontend and backend are **RUNNING**:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8080/api

## Features Implemented

### User Features
1. **User Registration** (`/register`)
   - Create new account with name, email, and password
   - Password validation (minimum 6 characters)
   - Automatic redirect to login after registration

2. **User Login** (`/login`)
   - Login with email and password
   - JWT token authentication
   - Secure session management

3. **User Dashboard** (`/dashboard`)
   - View all investment offerings
   - See investment details
   - Protected route (requires login)
   - Logout functionality

4. **Landing Page** (`/`)
   - Hero section
   - Investment offerings display
   - Statistics section
   - Newsletter subscription
   - Responsive design

### Admin Features
5. **Admin Login** (`/admin/login`)
   - Username: `admin`
   - Password: `admin123`

6. **Admin Dashboard** (`/admin/dashboard`)
   - View analytics and charts
   - Manage platform

7. **Manage Offerings** (`/admin/offerings`)
   - Create new investment offerings
   - Edit existing offerings
   - Delete offerings

8. **Manage Subscribers** (`/admin/subscribers`)
   - View all newsletter subscribers
   - Delete subscribers

## API Endpoints

### Public Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/offerings` - Get all offerings
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

### Protected Endpoints (Require JWT Token)
- `POST /api/offerings` - Create offering (Admin only)
- `PUT /api/offerings/:id` - Update offering (Admin only)
- `DELETE /api/offerings/:id` - Delete offering (Admin only)
- `GET /api/newsletter/subscribers` - Get subscribers (Admin only)
- `DELETE /api/newsletter/subscribers/:id` - Delete subscriber (Admin only)

## How to Use

### For Regular Users:
1. Open http://localhost:3000
2. Click "REGISTER" button in navbar
3. Fill in your details (name, email, password)
4. After registration, login with your credentials
5. Browse investment opportunities in your dashboard

### For Admin:
1. Go to http://localhost:3000/admin/login
2. Login with:
   - Username: `admin`
   - Password: `admin123`
3. Access admin dashboard to manage offerings and subscribers

## Technology Stack

### Frontend
- React 18 with Vite
- Tailwind CSS
- React Router DOM
- Axios for API calls
- Framer Motion for animations
- Chart.js for data visualization

### Backend (Mock Server)
- Express.js
- JWT for authentication
- bcrypt for password hashing
- CORS enabled
- In-memory data storage

### Backend (Spring Boot - Ready but not running)
- Spring Boot 3.2
- Spring Security with JWT
- Spring Data JPA
- MySQL/H2 Database
- Lombok

## Testing the Application

### Test User Registration:
1. Go to http://localhost:3000/register
2. Enter:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123
3. Click "Create account"

### Test User Login:
1. Go to http://localhost:3000/login
2. Enter the credentials you just registered
3. You'll be redirected to the dashboard

### Test Newsletter Subscription:
1. Go to http://localhost:3000
2. Scroll to the newsletter section
3. Enter your email and subscribe

### Test Admin Features:
1. Go to http://localhost:3000/admin/login
2. Login with admin/admin123
3. Navigate to manage offerings or subscribers

## Notes

- The mock backend stores data in memory, so data will be lost when the server restarts
- For production, use the Spring Boot backend with MySQL database
- All passwords are securely hashed using bcrypt
- JWT tokens expire after 24 hours

## Troubleshooting

If you see any errors:
1. Make sure both servers are running
2. Check that ports 3000 and 8080 are not in use by other applications
3. Clear browser cache and refresh
4. Check browser console for any JavaScript errors

## Next Steps

To use the Spring Boot backend instead of the mock server:
1. Install Java 17+ and Maven
2. Set up MySQL database
3. Update `application.properties` with your database credentials
4. Run: `mvn spring-boot:run`
5. Stop the mock backend server
