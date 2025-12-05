# Munir B. - Personal Portfolio Website

A modern, responsive single-page portfolio website showcasing data analysis, web development, and digital strategy consulting services.

## 🎨 Design

- **Inspired by:** Anthropic/Claude design aesthetic
- **Primary Color:** Orange (#D97706)
- **Typography:** Inter font family
- **Style:** Minimalist, clean, professional yet approachable

## 🚀 Quick Start

### Add Your Personal Photo

**IMPORTANT:** Save your personal photo to complete the About section:

1. Save your photo as: `images/munir-profile.jpg`
2. Recommended dimensions: 800x800px or larger
3. Format: JPG or PNG
4. The photo will appear in the About section

### Local Development

Simply open `index.html` in your browser to view the site locally.

```bash
# No build process needed - pure HTML/CSS/JS
open index.html
```

### Deploy to GitHub Pages

1. Commit your changes:
```bash
git add .
git commit -m "Initial portfolio website"
git push origin claude/add-personal-picture-01MjkQ8kLsXjdKkEzLakW7eM
```

2. Configure GitHub Pages:
   - Go to repository Settings → Pages
   - Select branch: `main` (or your deployment branch)
   - Select folder: `/ (root)`
   - Save

3. Your site will be live at: `https://munirb.com`

## 📁 Project Structure

```
/
├── index.html          # Main single-page site
├── css/
│   └── styles.css      # All styles with CSS custom properties
├── js/
│   └── main.js         # Interactive functionality
├── images/
│   ├── munir-profile.jpg  # ⚠️ ADD YOUR PHOTO HERE
│   ├── portfolio/         # Portfolio screenshots go here
│   └── icons/             # Service icons (if needed)
├── assets/
│   └── cv/                # Resume/CV files
├── CLAUDE.md              # AI assistant instructions
└── README.md              # This file
```

## ✅ To-Do Before Launch

### Required
- [ ] Add personal photo: `images/munir-profile.jpg`
- [ ] Update Cal.com link in `index.html` and `js/main.js`
- [ ] Add actual LinkedIn URL in footer
- [ ] Add actual GitHub URL in footer
- [ ] Verify email address (currently set to contact@munirb.com)

### Content
- [ ] Add 2-3 portfolio projects with screenshots
- [ ] Add project descriptions and case studies
- [ ] Consider adding testimonials (optional)

### Optional Enhancements
- [ ] Add Google Analytics tracking code
- [ ] Add favicon
- [ ] Add Open Graph meta tags for social sharing
- [ ] Optimize images for web (compress if needed)
- [ ] Add loading="lazy" to images for performance

## 🔧 Customization

### Colors

All colors are defined as CSS custom properties in `css/styles.css`:

```css
:root {
  --color-orange: #D97706;
  --color-orange-light: #F59E0B;
  --color-orange-dark: #B45309;
  /* ... */
}
```

### Cal.com Integration

1. Get your Cal.com booking link (e.g., `https://cal.com/munirb/30min`)
2. Update in `index.html`:
   - Replace `#` in `id="cal-link"` with your URL
   - Replace `#` in `id="cal-cta"` with your URL
3. Remove placeholder alert in `js/main.js`

### Adding Portfolio Items

Add new portfolio items in the `<section class="portfolio">`:

```html
<div class="portfolio-item">
  <img src="images/portfolio/project-name.jpg" alt="Project description">
  <div class="portfolio-content">
    <h3 class="portfolio-title">Project Name</h3>
    <p class="portfolio-description">Brief description...</p>
    <div class="portfolio-tags">
      <span class="tag">Tag 1</span>
      <span class="tag">Tag 2</span>
    </div>
  </div>
</div>
```

## 📱 Features

- ✅ Fully responsive (mobile-first design)
- ✅ Smooth scroll navigation
- ✅ Fade-in animations on scroll
- ✅ Mobile menu toggle
- ✅ Optimized performance
- ✅ Accessibility considerations
- ✅ Clean, semantic HTML
- ✅ No dependencies (vanilla JS)

## 🎯 Performance

- No heavy frameworks or libraries
- Minimal external resources (only Google Fonts)
- Optimized for fast loading
- Mobile-first responsive design

## 📄 License

© 2024 Munir B. All rights reserved.

## 💡 Support

For questions or modifications, refer to `CLAUDE.md` for AI assistant guidance.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript
**Hosted on:** GitHub Pages
**Domain:** munirb.com
