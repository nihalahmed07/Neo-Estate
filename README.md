# PCL Website Clone - Lorem Ipsum Version

A comprehensive, responsive clone of the PCL Construction website (https://www.pcl.com/us/en) with all content replaced with lorem ipsum placeholder text.

## Overview

This is a faithful recreation of the PCL Construction website's structure, design, and layout using standard HTML, CSS, and JavaScript. All actual content has been replaced with lorem ipsum text while maintaining the professional look and feel of the original.

## ✨ Recent Enhancements

### Homepage Enhancements

1. **Stunning Page Load Animation** - Professional preloader with PCL logo, triple-ring spinner, and smooth entrance
2. **Video Hero Background** - Full-screen video with play/pause controls and beautiful overlays
3. **Transparent Navbar** - Glass-morphism header that appears on scroll/hover
4. **Authentic PCL Styling** - Integrated official PCL CSS patterns and Barlow typography
5. **Enhanced Animations** - Cascading entrance effects, scroll triggers, and micro-interactions
6. **Real Estate Content** - Converted from construction to real estate theme with property search interface
7. **Cities Grid Section** - Beautiful city cards with hover effects linking to property listings

### Property Listing Page (NEW!)

1. **Enhanced Hero Section** - Animated gradient background with real-time statistics and counter animations
2. **Advanced Filter System** - Modern filter UI with icons, view toggles (grid/list/map), and save search functionality
3. **Premium Property Cards** - Rich cards with image galleries, agent info, photo counts, and comparison features
4. **Interactive Features** - Favorite properties, share buttons, filter tags, and clear all functionality
5. **Professional Design** - Glassmorphism effects, smooth animations, and responsive layouts
6. **Sticky Filters** - Filters stay visible while scrolling for easy property refinement
7. **View Options** - Toggle between grid, list, and map views (map view ready for integration)

## Features

### Design & UX

- **Stunning Page Load Animation**: Beautiful preloader with PCL logo, animated spinner, and smooth page entrance
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design matching PCL's corporate aesthetic
- **Smooth Animations**:
  - Page load preloader with gradient background
  - Animated logo with expanding underline
  - Cascading entrance animations for all sections
  - Scroll-triggered fade-ins and counter animations
  - Hover effects and micro-interactions
- **Interactive Elements**: Tabbed content, video controls, and dynamic sections

### Technical Features

- Sticky navigation header with dropdown menus
- Mobile hamburger menu with smooth transitions
- Intersection Observer API for scroll animations
- Smooth scrolling navigation
- Animated statistics counters
- Responsive grid layouts using CSS Grid and Flexbox
- Custom CSS variables for easy theming

## Sections

The clone includes all major sections from the PCL website:

### 0. **Page Load Preloader** ✨ NEW

- Full-screen animated preloader
- PCL logo with letter-spacing animation
- Expanding gradient underline
- Triple-ring spinner with staggered timing
- "Loading Excellence..." text fade-in
- Gradient background (navy → teal → green)
- Smooth fade-out after 1.5 seconds
- Cascading page entrance animation

### 1. **Header Navigation** ✨ ENHANCED

- **Transparent navbar** when at the top of the page
- **Animated background** appears on scroll or hover
- Sticky header with gradient logo
- Multi-level dropdown navigation for Sectors
- Smooth transitions for all nav states
- Desktop and mobile responsive menu
- Glass-morphism effects on hover
- Gradient contact CTA button with shine effect
- White text on transparent, dark text on solid background

### 2. **Hero Carousel with Video Background**

- **100vh full-screen** hero section with background video
- Beautiful gradient overlay with transparency
- Autoplay, looping video (muted for autoplay)
- Play/Pause control button with smooth animations
- Fallback gradient background if video fails
- PCL-style yellow accent line after eyebrow
- Call-to-action button with glow effect
- Responsive video scaling (maintains 100vh on all devices)
- Performance optimization (pauses when out of view)
- Text shadows for perfect readability over video

### 3. **Who We Are**

- Two-column layout with main content and stats sidebar
- Large statistics with animated counters:
  - Years in Operation
  - Annual Construction Volume
  - Industry Ranking

### 4. **Where We Work - Map Section**

- Interactive tabbed map interface
- Tabs for different regions (US, Canada, Caribbean, Australia)
- Key statistics display
- Placeholder for interactive map

### 5. **What We Do - Category Tabs**

- Tabbed interface for different sectors:
  - Buildings
  - Civil Infrastructure
  - Heavy Industrial
  - Special Projects
- Image and text content for each category

### 6. **Project Showcase**

- Alternating left/right image layouts
- Detailed project information
- Location and market metadata
- Multiple project cards

### 7. **Careers Section**

- Video placeholder with play button
- Three career pathway buttons:
  - Professionals
  - Skilled Trades + Craft
  - Interns

### 8. **Our Owners**

- Employee spotlight component
- Two-column content layout
- Employee photo and bio placeholder

### 9. **Safety/Image-Text Section**

- Full-width image with overlaid content
- Call-to-action button

### 10. **Featured Insights**

- Three-column grid of article cards
- Category tags and metadata
- Hover effects

### 11. **Latest News**

- News article grid
- Category badges
- Read time estimates

### 12. **Pre-Footer Contact**

- Prominent call-to-action section
- Dual CTA buttons for projects and careers
- Gradient background

### 13. **Subscription Section**

- Email subscription form
- Green accent background

### 14. **Footer**

- Six-column footer layout:
  - Company info with logo
  - Sectors links
  - Services links
  - Company links
  - Social media links
  - Region selector
- Legal links
- Copyright notice

## File Structure

```
├── index.html              # Main homepage with hero video and cities grid
├── properties.html         # Property listing page with advanced filters
├── styles.css              # Main styling and responsive design
├── property-styles.css     # Property page specific styles
├── script.js               # Main interactive functionality
├── property-script.js      # Property page specific functionality
├── image.png               # Placeholder image for properties
└── README.md               # Documentation (this file)
```

## Property Listing Page Features

### Hero Section

- **Animated Background** - Gradient background with subtle animation effects
- **Breadcrumb Navigation** - Easy navigation back to home
- **Live Statistics** - Animated counters showing:
  - 247 Properties Available
  - €850K Average Price
  - 15 New This Week
  - 24 Hours Average Response Time

### Advanced Filters

- **Filter Header** - Shows property count and view options
- **View Toggles** - Switch between grid, list, and map views
- **Save Search** - Save current filter settings for later
- **Filter Options**:
  - Property Type (Apartment, House, Villa, Penthouse, Studio, Duplex)
  - Price Range (Up to €5M+)
  - Bedrooms (1-5+)
  - Bathrooms (1-4+)
  - Sort By (Newest, Price, Size, Featured)
- **Clear Filters** - One-click reset all filters
- **Active Filter Tags** - Visual display of active filters

### Property Cards

- **Rich Information Display**:
  - High-quality images with photo count indicator
  - Property type badge
  - New/Featured badges with animations
  - Price prominently displayed
  - Location with icon
  - Bed/Bath/Size specifications
  - Agent information with avatar
- **Interactive Actions**:
  - Favorite/Unfavorite button
  - Share property button
  - Compare properties (up to 3)
  - Click to view details
- **Visual Effects**:
  - Smooth hover animations
  - Image zoom on hover
  - Pulsing "New" badge
  - Glassmorphism effects

### User Experience

- **Sticky Filters** - Filters remain accessible while scrolling
- **Responsive Design** - Perfect on all devices
- **Loading States** - Visual feedback for all actions
- **Smooth Animations** - Professional entrance and interaction effects
- **Performance Optimized** - Intersection Observer for lazy animations

## Color Scheme

The design uses PCL's official corporate color palette from their production website:

```css
--primary-color: #003d6a      /* Navy Blue - Primary brand color */
--secondary-color: #e87722    /* Orange - Accent/CTA color */
--accent-green: #00502f       /* PCL Green - Ownership/sustainability */
--accent-yellow: #ffc425      /* PCL Yellow - Highlights/accents */
--text-dark: #1a1a1a         /* Primary text */
--text-medium: #36383d       /* Medium gray text */
--text-light: #666           /* Secondary text */
--text-lighter: #a6a6a6      /* Lighter gray */
--bg-light: #f9f9f9          /* Light gray background */
--bg-gray: #e2e2e2           /* Medium gray background */
--border-color: #cfcfcf      /* Border color */
```

## Typography

- **Font Family**: Barlow (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Headings**: Bold, large sizes with navy blue color
- **Body**: Regular weight, readable line-height
- **Character**: Modern, geometric sans-serif with excellent readability

## Interactive Features

### Animated Statistics

Numbers count up from 0 when scrolled into view:

- Years: 119
- Volume: $8.3B+
- Ranking: #11
- Ownership: 100%
- Projects: 1000+

### Scroll Animations

- Elements fade in and slide up when entering viewport
- Smooth transitions using Intersection Observer

### Tabbed Content

- Map region tabs (United States, Canada, Caribbean, Australia)
- What We Do category tabs (Buildings, Civil, Industrial, Special Projects)

### Mobile Responsiveness

- Hamburger menu for mobile devices
- Stacked layouts for small screens
- Touch-friendly button sizes

## Browser Support

Compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #003d6a;
  --secondary-color: #e87722;
  /* etc. */
}
```

### Replacing Lorem Ipsum

Simply find and replace the placeholder text in `index.html` with your actual content.

### Adding Real Images

Replace the `.placeholder-image` divs with actual `<img>` tags:

```html
<!-- Before -->
<div class="placeholder-image"><span>Image</span></div>

<!-- After -->
<img src="your-image.jpg" alt="Description" />
```

### Changing the Hero Video

Replace the video source in `index.html`:

```html
<video class="hero-video" autoplay muted loop playsinline>
  <source src="your-video.mp4" type="video/mp4" />
</video>
```

**Video Tips:**

- Use MP4 format for best compatibility
- Keep file size reasonable (compress if needed)
- Recommended resolution: 1920x1080 or higher
- The video will automatically loop and is muted for autoplay compliance
- Users can pause/play using the control button

### Adjusting Preloader Timing

In `script.js`, change the display duration:

```javascript
// Change 1500 to your desired milliseconds (1500 = 1.5 seconds)
setTimeout(() => {
  document.body.classList.add("loaded");
  // ...
}, 1500);
```

To hide the preloader immediately when page loads, uncomment the alternative code block in `script.js`.

## Usage

1. Open `index.html` in any modern web browser
2. No build process or server required
3. All assets are self-contained

## Development Notes

- Built with semantic HTML5
- Uses modern CSS features (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (no frameworks)
- Mobile-first responsive approach
- Accessibility-friendly structure

## Performance

- Lightweight: No external dependencies except Google Fonts
- Fast loading: Minimal CSS and JS
- Optimized animations: Uses CSS transforms and opacity

## Credits

This is a demonstration clone created for educational purposes, based on the design and structure of PCL Construction's website (https://www.pcl.com).

**Original Design**: PCL Construction  
**Clone Version**: Lorem Ipsum demonstration with placeholder content

## License

This clone is for demonstration and educational purposes only. All design concepts are property of PCL Construction.
