# Interactive Playground

A collection of interactive demos showcasing modern CSS effects and JavaScript interactions. Built with vanilla JavaScript and Alpine.js for lightweight reactivity.

## 🎯 Features

- **5 Interactive Demos**: Card hover effects, gradient animations, 3D parallax, morphing buttons, and data-driven cards
- **Alpine.js Integration**: Lightweight reactive framework (~15kb) for dynamic data handling
- **API-Ready Architecture**: Mock data structure ready to swap with real API endpoints
- **Modular Design**: Clean separation of styles, scripts, and demos for easy expansion
- **Zero Build Tools**: Works directly in the browser with CDN-loaded dependencies

## 📁 Project Structure

```
/workspaces/Playground/
├── index.html              # Landing page with demo grid
├── demos/                  # Individual demo pages
│   ├── card-hover.html     # Original expanding panel effect
│   ├── gradient-hover.html # Mouse-following gradient
│   ├── parallax-cards.html # 3D depth effect with layers
│   ├── morphing-buttons.html # Animated button transformations
│   └── data-cards.html     # Alpine.js data loading demo
├── styles/
│   ├── global.css          # Shared styles and utilities
│   └── card-hover.css      # Demo-specific styles
├── scripts/
│   ├── utils.js            # Reusable helper functions
│   └── card-hover.js       # Demo-specific JavaScript
├── data/                   # Mock API data (JSON files)
│   ├── users.json          # Sample user profiles
│   └── quotes.json         # Sample quotes
└── README.md               # This file
```

## 🚀 Getting Started

1. **Open the playground**: Simply open `index.html` in a browser or use a local server
2. **Browse demos**: Click any demo card to see the effect
3. **Explore code**: Each demo is self-contained with inline styles and scripts

### Using a Local Server (Recommended)

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000`

## 🎨 Available Demos

### 1. Card Hover Effect
Expanding panels with rotating text on hover. Demonstrates CSS transforms and transitions.

### 2. Gradient Hover
Radial gradient that follows cursor movement using CSS custom properties and JavaScript mouse tracking.

### 3. Parallax Cards
3D depth effect with multiple layers moving at different speeds. Uses CSS 3D transforms and perspective.

### 4. Morphing Buttons
Button animations including expand, rotate, slide, and ripple effects using CSS transitions.

### 5. Data Cards
Alpine.js-powered demo loading JSON data. Shows loading states and data switching - ready for API integration.

## 🔌 API Integration Guide

The playground is designed for easy API integration. Here's how to connect real APIs:

### Current Setup (Mock Data)
```javascript
// In data-cards.html
const response = await fetch(`../data/users.json`)
```

### Swap to Real API
```javascript
// Replace with your API endpoint
const response = await fetch(`https://api.example.com/users`)

// Add headers if needed
const response = await fetch(`https://api.example.com/users`, {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  }
})
```

### Recommended APIs for Practice
- **JSONPlaceholder**: https://jsonplaceholder.typicode.com/ (fake REST API)
- **Quotes API**: https://api.quotable.io/random (random quotes)
- **GitHub API**: https://api.github.com/users/{username} (user profiles)
- **Unsplash API**: https://api.unsplash.com/ (images - requires API key)

### Adding New Data-Driven Demos

1. Create a new demo file in `/demos/`
2. Add Alpine.js via CDN: `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>`
3. Use Alpine's `x-data` for reactive state:
```html
<div x-data="{ items: [], loading: false }">
  <!-- Your content -->
</div>
```
4. Fetch data in `init()` or on button click
5. Display with `x-for` loops and `x-show` conditions

## 📦 Adding New Demos

1. **Create demo file**: `/demos/your-demo.html`
2. **Link global styles**: `<link rel="stylesheet" href="../styles/global.css" />`
3. **Add demo-specific styles**: Inline `<style>` or new CSS file in `/styles/`
4. **Include back button**: `<a href="../index.html" class="back-btn">← Back to Playground</a>`
5. **Update index.html**: Add your demo to the `demos` array in Alpine.js data

Example:
```javascript
// In index.html, add to demos array:
{
  title: 'Your Demo Name',
  description: 'What your demo does',
  url: 'demos/your-demo.html',
  tag: 'Category'
}
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Transforms, Animations, Custom Properties
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **Alpine.js**: Lightweight reactive framework (only in data demos)

## 🎯 Next Steps / Roadmap

- [ ] Add theme toggle (dark/light mode)
- [ ] Create more advanced animations (GSAP integration?)
- [ ] Add form validation demo
- [ ] Build interactive chart/graph demo
- [ ] Connect to real public APIs
- [ ] Add search/filter functionality
- [ ] Create exportable code snippets feature
- [ ] Mobile responsive previews

## 📝 Notes

- All demos work without a build process
- Alpine.js is loaded via CDN (no npm required)
- Mock data files simulate API responses
- Each demo is independent and self-contained

---

**Built on**: December 1, 2025  
**Tech Stack**: Vanilla JS + Alpine.js + Modern CSS
