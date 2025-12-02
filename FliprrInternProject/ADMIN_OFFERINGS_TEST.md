# Admin Offerings Management - Feature Test

## ✅ Features Available

### All Required Fields Present:
1. ✅ **Tag** - Category/type of investment (e.g., HOUSE, BUSINESS)
2. ✅ **Image** - Now supports BOTH:
   - Image URL (paste link)
   - File Upload (select from computer)
   - Live preview of selected image
3. ✅ **Title** - Name of the investment opportunity
4. ✅ **Location** - Geographic location (e.g., Brooklyn, NY)
5. ✅ **Description** - Detailed description of the opportunity
6. ✅ **Total Price** - Full investment amount
7. ✅ **Security Type** - Type of security (e.g., Revenue Sharing Note)
8. ✅ **Investment Multiple** - Expected return multiple (e.g., 1.4x)
9. ✅ **Maturity** - Duration in months
10. ✅ **Minimum Investment** - Minimum amount to invest

### CRUD Operations:
- ✅ **Create** - Add new offerings
- ✅ **Read** - View all offerings in table
- ✅ **Update** - Edit existing offerings
- ✅ **Delete** - Remove offerings (with confirmation)

### UI Features:
- ✅ Form validation (all fields required)
- ✅ Responsive design
- ✅ Clean table view
- ✅ Edit/Delete buttons with icons
- ✅ Cancel button to close form
- ✅ Image preview when uploading

## How to Test

### 1. Login as Admin:
```
URL: http://localhost:3000/admin/login
Username: admin
Password: admin123
```

### 2. Navigate to Manage Offerings:
- Click "Manage Offerings" from dashboard
- OR go directly to: http://localhost:3000/admin/offerings

### 3. Add New Offering:
1. Click "Add New Offering" button
2. Fill in all fields:
   - Tag: HOUSE
   - Image: Either paste URL OR upload file
   - Title: Test Property
   - Location: New York, NY
   - Description: A great investment opportunity
   - Total Price: 500000
   - Security Type: Equity
   - Investment Multiple: 1.5
   - Maturity: 36
   - Minimum Investment: 1000
3. Click "Create Offering"

### 4. Edit Offering:
1. Click edit icon (pencil) on any offering
2. Modify fields
3. Click "Update Offering"

### 5. Delete Offering:
1. Click delete icon (trash) on any offering
2. Confirm deletion

## API Endpoints Used

- `GET /api/offerings` - Fetch all offerings
- `POST /api/offerings` - Create new offering
- `PUT /api/offerings/:id` - Update offering
- `DELETE /api/offerings/:id` - Delete offering

## Current Status

✅ Backend API is running on port 8080
✅ Frontend is running on port 3000
✅ All CRUD operations are functional
✅ Image upload/URL option added
✅ Form validation in place

## Note on Image Upload

Currently, uploaded images are converted to base64 and stored in the database. For production:
- Consider using cloud storage (AWS S3, Cloudinary, etc.)
- Store only the URL in database
- Implement proper file size limits
- Add image optimization
