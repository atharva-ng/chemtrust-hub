
# ChemCo Industries Website - Implementation Plan

## Overview
A professional, trustworthy website for a chemical products company with a clean, scientific aesthetic. The site will showcase products, build credibility, and enable customer inquiries.

---

## Design Direction
- **Color Palette**: Deep blue (primary), white, slate grey, accent green for compliance/quality badges
- **Typography**: Clean, professional sans-serif fonts with excellent readability
- **Visual Style**: Minimal with subtle scientific elements (molecule patterns, hexagonal shapes, clean lines)
- **Tone**: Professional, factual, compliance-aware

---

## Pages & Features

### 1. Home Page
**Hero Section**
- Compelling tagline and value proposition
- Professional background with subtle chemistry-inspired patterns
- Two prominent CTA buttons: "View Our Chemicals" and "Contact Us"

**Company Introduction**
- Brief overview of what the company does
- Industries served (pharmaceutical, industrial, research, etc.)

**Key Highlights Section**
- Years of experience
- Quality certifications (ISO, GMP placeholders)
- R&D capabilities
- Global reach

**Why Choose Us**
- Quality assurance
- Regulatory compliance
- Customer-focused approach
- Technical support

---

### 2. Products Page
**Product Catalog**
- Clean grid layout with product cards
- Each card displays: chemical name, short description, potency, available weights, grade

**Search & Filtering**
- Search bar for quick chemical lookup
- Filters for: potency range, weight/packaging, category, grade (Industrial/Lab/Pharma)

**Product Detail View**
- Full product description
- Chemical properties table
- Applications and use cases
- Safety & handling information
- Placeholder links for SDS/Technical datasheets

---

### 3. About Us Page
**Company Story**
- History and background narrative
- Mission and vision statements

**Goals & Roadmap**
- Company objectives and future direction

**Founders Section**
- Founder cards with placeholder photos
- Short bios with roles and expertise

**Trust Indicators**
- Certification badges (ISO, GMP placeholders)
- Manufacturing/lab infrastructure overview

---

### 4. Contact Us Page
**Contact Form** (with database storage via Lovable Cloud)
- Name, Email, Company fields
- Inquiry type dropdown (Product/Partnership/General)
- Message textarea
- Form validation and success feedback

**Contact Information**
- Email address
- Phone number
- Office/Factory address

**Location**
- Embedded Google Map placeholder

---

## Technical Implementation

### Backend (Lovable Cloud)
- Database table for storing contact form submissions
- Secure form handling with validation

### Navigation
- Sticky header with: Home, Products, About Us, Contact Us
- Responsive mobile menu

### Responsive Design
- Desktop, tablet, and mobile optimized layouts
- Mobile-friendly product filters

### Components
- Reusable ProductCard component
- FilterSidebar component
- FounderCard component
- ContactForm with validation

---

## Sample Content Structure
I'll create placeholder products representing typical industrial chemicals with realistic attributes like:
- Sodium Hydroxide (Industrial Grade)
- Hydrochloric Acid (Lab Grade)
- Ethanol (Pharma Grade)
- And similar products to demonstrate the catalog

---

## Deliverables
1. Complete 4-page website structure
2. Fully functional product filtering and search
3. Contact form with Lovable Cloud database integration
4. Responsive design across all devices
5. Professional, clean UI following the specified color palette
