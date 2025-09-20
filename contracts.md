# API Contracts - Kashish Arora Portfolio

## Overview
This document outlines the API contracts for transforming the frontend mock data into a fully functional backend-integrated portfolio system.

## Current Mock Data Structure
The following mock data in `/app/frontend/src/data/mock.js` needs backend integration:

### 1. Personal Information
- **Data**: `personalInfo` object with basic contact details
- **Action**: Static data, no backend required
- **Frontend Usage**: Direct import and display

### 2. Skills
- **Data**: `skills` object with technical and soft skills arrays
- **Action**: Static data, no backend required
- **Frontend Usage**: Direct mapping to skill components

### 3. Experience & Education
- **Data**: `experience` and `education` arrays
- **Action**: Static data, no backend required
- **Frontend Usage**: Timeline components display

### 4. Contact Form
- **Current State**: Frontend-only form with no submission
- **Backend API Required**: 
  - `POST /api/contact` - Handle contact form submissions
  - **Payload**: `{ name, email, projectType, message }`
  - **Response**: `{ success: boolean, message: string }`

### 5. Projects (Case Studies)
- **Current State**: Static mock data with project details
- **Backend Enhancement**: Optional CMS-like functionality
- **Potential API**: 
  - `GET /api/projects` - Fetch project data
  - `GET /api/projects/:id` - Fetch single project details

### 6. Blog Posts
- **Current State**: Static mock data with placeholder content
- **Backend Enhancement**: Blog management system
- **Potential APIs**:
  - `GET /api/blog` - Fetch all blog posts
  - `GET /api/blog/:id` - Fetch single blog post
  - `POST /api/blog` - Create new blog post (admin)

### 7. Testimonials
- **Current State**: Static mock testimonials
- **Action**: Keep as static data for now
- **Future Enhancement**: Admin panel to manage testimonials

## Priority Implementation Plan

### Phase 1: Essential Backend Integration
1. **Contact Form API** (High Priority)
   - Implement email sending functionality
   - Form validation and sanitization
   - Success/error response handling
   - Frontend integration to replace mock form submission

### Phase 2: Content Management (Optional)
2. **Projects API** (Medium Priority)
   - Dynamic project management
   - Admin interface for adding/editing projects
   
3. **Blog System** (Low Priority)
   - Full blog post management
   - Rich text content support
   - SEO metadata handling

## Database Schema Requirements

### Contact Form Submissions
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  projectType: String,
  message: String,
  createdAt: Date,
  status: String // 'new', 'read', 'responded'
}
```

### Future Schema (Projects & Blog)
```javascript
// Projects Collection
{
  _id: ObjectId,
  title: String,
  subtitle: String,
  description: String,
  tags: [String],
  metrics: Object,
  images: [String],
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}

// Blog Posts Collection
{
  _id: ObjectId,
  title: String,
  excerpt: String,
  content: String,
  tags: [String],
  featuredImage: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Frontend Integration Changes Required

### 1. Contact Form Integration
- **File**: `/app/frontend/src/components/Portfolio.js`
- **Change**: Replace form submission with API call
- **Method**: Use axios POST to `/api/contact`
- **UI Updates**: Add loading states, success/error messages

### 2. Environment Variables
- **Frontend**: Use `process.env.REACT_APP_BACKEND_URL` for API calls
- **Backend**: Email service configuration (SMTP settings)

### 3. Form Validation
- **Frontend**: Client-side validation for better UX
- **Backend**: Server-side validation for security

## Email Service Integration
- **Service**: NodeMailer with SMTP configuration
- **Templates**: HTML email templates for contact form submissions
- **Recipient**: Forward submissions to Kashish's email
- **Auto-responder**: Optional confirmation email to sender

## Testing Strategy
1. **Contact Form**: Test form submission, validation, email delivery
2. **Error Handling**: Test network failures, validation errors
3. **Mobile Testing**: Ensure form works on all devices
4. **Email Testing**: Verify email delivery and formatting

## Deployment Considerations
- **Environment Variables**: SMTP credentials, email addresses
- **Error Logging**: Implement proper error logging for backend
- **Rate Limiting**: Prevent spam submissions
- **CORS**: Ensure proper CORS configuration for frontend-backend communication

## Success Metrics
- Contact form successfully submits data
- Emails are delivered reliably
- Form provides clear user feedback
- No mock data remains in production
- All interactions feel seamless and professional

---

**Next Steps**: 
1. Implement contact form API endpoint
2. Set up email service with NodeMailer
3. Replace frontend mock form with API integration
4. Test end-to-end contact form functionality