# Munir B. - Personal Portfolio Website

A modern, minimalist portfolio website showcasing data science, web development, and digital strategy consulting services.

## 🎨 Design Specifications

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Headings**: 42-58px max
- **Body Text**: 14-16px
- **Navigation**: 13-14px

### Visual Style
- **No rounded corners** - sharp, clean edges throughout
- **Default state**: Grayed out elements (opacity: 0.6)
- **Hover state**: Full color with smooth transitions (0.3s ease)
- **Orange accent**: #D97706 (used sparingly for highlights)
- **Animated topographic background** in hero section with hover translation effect

### Design Inspiration
- Anthropic.com
- Linear.app
- Vercel.com
- Apptension.com

## 🚀 Features

- **Fixed Navigation**: Backdrop blur and smooth scroll
- **Hero Section**: Animated topographic SVG background + rotating circular badge
- **Services Grid**: 2x2 layout with alternating light/dark wave pattern cards
- **Portfolio**: Alternating left/right layout showcasing 3 projects
- **About Section**: Dark theme with topographic waves and statistics grid
- **Contact**: Email and Cal.com consultation cards
- **Footer**: Social links with hover animations

## 📁 Project Structure

```
/
├── index.html          # Main single-page site
├── css/
│   └── styles.css      # Poppins typography, no rounded corners
├── js/
│   └── main.js         # Smooth scroll and animations
├── images/
│   ├── portfolio/      # Portfolio screenshots
│   └── icons/          # Service icons
├── assets/
│   └── cv/             # Resume/CV files
├── CLAUDE.md           # AI assistant guide
└── README.md           # This file
```

## 🛠 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, NO rounded corners
- **Vanilla JavaScript**: Smooth scrolling and intersection observers
- **Poppins Font**: Via Google Fonts
- **GitHub Pages**: Hosting

## 📋 Sections

1. **Navigation** - Fixed header with smooth scroll, gray-to-dark hover states
2. **Hero** - Animated topographic background that translates on hover, rotating badge
3. **Services** - 4 core offerings in 2x2 grid with wave patterns
4. **Portfolio** - 3 featured projects (Bodyblooms, Prizpot, Healthcare App)
5. **About** - Dark section with stats (10+ years, 50+ projects, 15+ technologies)
6. **Contact** - Email and Cal.com booking links
7. **Footer** - Three-column layout with social links

## 🎯 Services Offered

1. **Data Analysis & Visualization** - Tableau dashboards and advanced analytics
2. **Web Development** - Modern sites with Claude, Webflow, and Framer
3. **Dashboard Creation** - Custom Tableau visualizations
4. **Digital Strategy Consulting** - Process optimization and productivity

## 🎨 Color Palette

```css
--orange: #D97706;      /* Primary accent */
--dark: #1F2937;        /* Text and dark backgrounds */
--gray: #6B7280;        /* Secondary text */
--gray-bg: #E5E7EB;     /* Backgrounds */
--white: #FFFFFF;       /* Base color */
```

## ✨ Interactive Features

- Smooth scroll navigation
- Topographic background translates on hover (10px, -10px)
- Service cards lift with shadow on hover (translateY -4px)
- Rotating badge animation (20s infinite)
- Intersection observers for fade-in effects
- Social icon hover animations

## 📱 Responsive Design

- Desktop-first approach
- Breakpoints at 968px and 640px
- Mobile-optimized typography and layouts
- Touch-friendly interactions
- Hidden rotating badge on mobile

## ⚡ Performance

- **Load Time Target**: Under 3 seconds
- **No heavy dependencies**: Vanilla JS only
- **Optimized SVGs**: For topographic backgrounds
- **Smooth animations**: All transitions 0.3s ease

## 🚀 Deployment to GitHub Pages

1. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `(root)`
   - Save

2. **Site will be live at**: munirb.com

## 📞 Contact Information

- **Email**: munirmans@gmail.com
- **LinkedIn**: [linkedin.com/in/munir-abdullahi](https://www.linkedin.com/in/munir-abdullahi/)
- **Location**: UAE
- **Cal.com**: [Add your booking link]

## 📝 Critical Design Requirements Met

✅ **Poppins font** (NOT Inter)
✅ **NO rounded corners** - border-radius: 0 everywhere
✅ **Smaller font sizes** - 14-16px body, 42-58px max headings
✅ **Gray default state** - opacity: 0.6
✅ **Full color on hover** - opacity: 1
✅ **Topographic background** - Animated SVG with hover effect
✅ **Rotating badge** - 20s infinite rotation
✅ **2x2 services grid** - Light/dark alternating
✅ **Wave patterns** - CSS gradients for service cards
✅ **Portfolio alternating** - Left/right layout
✅ **Dark about section** - With subtle topographic waves
✅ **Stats grid** - Orange numbers, white labels
✅ **All transitions** - 0.3s ease throughout

## 📄 License

© 2025 Munir B. All rights reserved.

---

**Built with Claude** - AI-assisted development using Anthropic's Claude
**Design Style**: Sharp, professional, Anthropic/Claude-inspired aesthetic
