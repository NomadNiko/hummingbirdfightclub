# Hummingbird Fight Club - Website Recovery Notes

## Recovery Date
November 11, 2025

## Sources Used

### 1. Wayback Machine Archive
**URL:** https://web.archive.org/web/20230722020017/https://hummingbirdfightclub.com/

#### Content Recovered:
- **Hero Section:**
  - Main heading: "Handcrafted in Rhode Island."
  - Logo and branding
  - Shop Now CTA button

- **Featured Products Section:**
  - Section heading
  - Product grid (images not fully recovered - placeholders added)

- **Newsletter Signup Section:**
  - "Sign up for news and updates." heading
  - Email signup form

- **Instagram Feed Section:**
  - 7 Instagram post placeholders
  - Link to Instagram: @hummingbirdfightclub

- **Contact Form:**
  - "Have Questions? Get in Touch!" heading
  - Form fields: Name, Email, Message
  - reCAPTCHA notice

- **About Section:**
  - Three cards with descriptions:
    1. **Hummingbird Fight Club**: "Hummingbird Fight Club has an assortment of handcrafted jewelry and accessories that range from dainty and precious to gothic and sarcastic. It's all in the name! No one person can be put into a box, and neither can our brand! Browse our assortment of unique items and find what suits your personal style, or find a gift for a friend."
    2. **Meet the Team!**: "This is our Owner, Jess! When she isn't creating kick ass jewelry, you can usually find her with a diet coke in her hand, quoting David from Schitt's Creek."
    3. **The Cutest Member!**: "This is Pinto, he can usually be found chasing and attacking Jess's legs (inevitably tripping her over), staring at the peasants from the top of his cat tree, or meowing SUPER loud for absolutely no reason."

- **Footer:**
  - Social media links (Facebook, Instagram)
  - Copyright: "Copyright © 2023 Hummingbird Fight Club - All Rights Reserved."
  - Privacy Policy link
  - Terms and Conditions link

### 2. Facebook Page
**URL:** https://www.facebook.com/hummingbirdfightclub

#### Information Recovered:
- Email: hummingbirdfightclub@gmail.com
- Instagram: hummingbirdfightclub
- Website: hummingbirdfightclub.com
- Page type: Product/service
- 130 likes, 140 followers
- Description: "Welcome to Hummingbird Fight Club! I create jewelry and small home accessories! 🖤"
- Photos section available (9+ product photos visible)

### 3. Instagram
**URL:** https://www.instagram.com/hummingbirdfightclub
- Account exists but requires login to view content
- Can be accessed for future image gathering

## What Was NOT Recovered
- Shop page (not archived on Wayback Machine)
- Product catalog details
- Pricing information
- Actual product images (placeholders created)
- Owner photo (Jess)
- Cat photo (Pinto)
- Original logo (placeholder created)

## Next Steps for Full Recovery

### 1. Images to Replace
All placeholder images in `/public/assets/` should be replaced with actual images:
- `logo-placeholder.svg` - Replace with actual logo
- `product-placeholder-1.svg` through `product-placeholder-3.svg` - Replace with product photos
- `instagram-placeholder-1.svg` through `instagram-placeholder-7.svg` - Get from Instagram feed
- `brand-placeholder.svg` - Brand/product photo
- `jess-placeholder.svg` - Photo of Jess (owner)
- `pinto-placeholder.svg` - Photo of Pinto the cat

### 2. Shop Page
- Needs to be rebuilt from scratch
- Consider using e-commerce platform or custom build
- Will need product photos, descriptions, and pricing

### 3. Additional Pages
- Privacy Policy page
- Terms and Conditions page

### 4. Functionality to Add
- Contact form submission (currently just console logs)
- Newsletter signup integration
- Shopping cart functionality
- Product search functionality

## Technical Implementation

### Framework
- Next.js with App Router
- React 18+
- Tailwind CSS

### File Structure
```
app/
  (publicPages)/
    page.jsx - Main landing page with all recovered content
    layout.js - Layout with Navbar
components/
  Navbar.jsx - Updated navigation
  ThemeToggle.jsx - Dark/light mode toggle
public/
  assets/ - Placeholder images (SVG format)
```

### Features Implemented
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Contact form with state management
- Newsletter signup form
- Social media links
- Clean, modern UI matching original aesthetic

## Contact Information
- Email: hummingbirdfightclub@gmail.com
- Facebook: https://www.facebook.com/hummingbirdfightclub
- Instagram: https://www.instagram.com/hummingbirdfightclub
