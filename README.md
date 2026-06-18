# EventHub Professional

> A modern, production-ready event management platform with professional UI/UX design, built entirely with HTML, CSS, and JavaScript.

**[Live Demo]** | **[Portfolio](https://github.com/yourusername)**

---

## What This Is

EventHub Professional is a fully-featured event management platform that runs entirely in the browser with no backend required. It features a modern, professional design with smooth animations, responsive layouts, and intuitive user interactions.

### Key Features

1. **Professional Design System** - Modern color palette, consistent typography, and polished UI components
2. **Smooth Animations** - Fade-in effects, hover transitions, and scroll-based animations
3. **Responsive Layout** - Fully mobile-first design with adaptive breakpoints
4. **24 Sample Events** - 3 events per category across 8 categories
5. **Advanced Filtering** - Search by name, filter by category/date/price
6. **Event Registration** - Multi-step form with validation and ticket selection
7. **Digital Tickets** - Printable ticket generation with unique IDs
8. **Dashboard Analytics** - Real-time statistics and event management
9. **Local Data Persistence** - All data stored in browser localStorage
10. **Accessibility** - ARIA labels, focus states, and keyboard navigation

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Styling | CSS Grid, Flexbox, CSS Variables, Media Queries |
| Typography | Inter (Google Fonts) |
| Icons | Font Awesome 6.4.0 |
| Data Storage | Browser LocalStorage API |
| Currency | Indian Rupee (₹) with Indian Number Formatting |
| Design | Mobile-first, Glass-morphism, Gradient accents |

---

## Project Structure

```
eventhub/
├── index.html                  # Homepage with hero and featured events
├── events.html                 # Browse all events with filters
├── event-details.html          # Single event view with registration
├── register.html               # Event registration form
├── registration-success.html   # Confirmation and ticket page
├── create-event.html           # Create new event form
├── dashboard.html              # Manage events and statistics
├── css/
│   └── style.css               # Professional styling system
├── js/
│   └── app.js                  # All JavaScript logic
└── README.md                   # This file
```

---

## Setup Instructions

### 1. Download Files

Download all files from the output folder and organize them as shown above.

### 2. No Build Required

This is a static website that runs entirely in the browser. No build tools, no server, no dependencies.

### 3. Open in Browser

Simply open `index.html` in any modern web browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or double-click `index.html` in your file explorer.

### 4. Clear Data (if needed)

To reset all sample data, open browser console (F12) and run:

```javascript
localStorage.clear()
```

Then refresh the page.

---

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | Full |
| Edge | Full |
| Firefox | Full |
| Safari | Full |
| Mobile Chrome | Full |
| Mobile Safari | Full |

---

## Features by Page

### Home (index.html)
- Hero section with animated badge and stats
- 6 featured events with hover animations
- Feature highlights with icon animations
- Call-to-action section with gradient background
- Professional footer with social links

### Events (events.html)
- Search by name, description, or location
- Filter by category, date, or price
- 24 events in responsive grid layout
- Event cards with image hover effects
- Price tags and availability badges
- Empty state with reset button

### Event Details (event-details.html)
- Full event information display
- Interactive info cards with hover effects
- Registration button with sold-out detection
- Social sharing functionality
- Back navigation

### Registration (register.html)
- Sticky event summary sidebar
- Personal information form with validation
- Ticket quantity selection with dynamic pricing
- Dietary requirements and referral tracking
- Terms and conditions checkbox

### Registration Success (registration-success.html)
- Animated success icon
- Digital ticket with tear-off design
- Event details and attendee information
- Print functionality
- Navigation back to events

### Create Event (create-event.html)
- Multi-section form with icons
- Category selection with validation
- Date and time pickers
- Location with event type (in-person/online/hybrid)
- Price in Indian Rupees
- Color theme picker with checkmarks
- Capacity settings

### Dashboard (dashboard.html)
- 4 stat cards with hover effects
- Events table with sorting
- Status badges (Upcoming/Ongoing/Past)
- Action buttons (View/Edit/Delete)
- Empty state for new users

---

## Design System

### Colors
- Primary: #6366f1 (Indigo)
- Secondary: #ec4899 (Pink)
- Success: #10b981 (Emerald)
- Warning: #f59e0b (Amber)
- Danger: #ef4444 (Red)
- Dark: #0f172a (Slate 900)

### Typography
- Font: Inter (Google Fonts)
- Headings: 800 weight, tight letter-spacing
- Body: 400 weight, 1.6 line-height
- Scale: 0.75rem to 4rem (responsive)

### Spacing
- Based on 0.25rem (4px) scale
- Sections: 5rem padding
- Cards: 1.5rem padding
- Grid gap: 2rem

### Shadows
- sm: 0 1px 2px
- md: 0 4px 6px
- lg: 0 10px 15px
- xl: 0 20px 25px

### Border Radius
- sm: 0.375rem
- md: 0.75rem
- lg: 1rem
- xl: 1.5rem
- 2xl: 2rem
- full: 9999px

---

## Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

### GitHub Pages

1. Push code to GitHub
2. Go to repository **Settings** → **Pages**
3. Source: Deploy from a branch
4. Branch: `main` / `root`
5. Click "Save"

---

## Customization

### Change Colors
Edit CSS variables in `style.css`:

```css
:root {
    --primary: #6366f1;        /* Change this */
    --secondary: #ec4899;      /* Change this */
    --success: #10b981;        /* Change this */
    /* ... etc */
}
```

### Add More Events
Edit `sampleEvents` array in `app.js`:

```javascript
const sampleEvents = [
    // Add your events here
];
```

### Change Currency
Replace all `₹` symbols with your currency in `app.js` and `style.css`.

---

## Performance

- **No external dependencies** - Everything runs in the browser
- **Lazy loading** - Images load as needed
- **Optimized CSS** - Single file with no unused styles
- **Minimal JavaScript** - No frameworks, pure vanilla JS
- **LocalStorage** - Fast data access, no network requests

---

## Accessibility

- ARIA labels on all interactive elements
- Focus visible states for keyboard navigation
- Semantic HTML structure
- Color contrast ratios meet WCAG 2.1 AA
- Responsive text sizing
- Touch-friendly tap targets (min 44px)

---

## License

MIT License - Free for personal and commercial use.

---

## Author

**Your Name** - Web Developer

GitHub: [yourusername](https://github.com/yourusername)
Email: your.email@example.com

---

## Changelog

### v2.0 Professional (2026-06-18)
- Complete design overhaul with professional UI system
- Added Inter font from Google Fonts
- Implemented glass-morphism effects
- Added smooth animations and transitions
- Improved responsive design with better breakpoints
- Added toast notifications
- Enhanced event cards with hover effects
- Professional ticket design with tear-off effect
- Improved dashboard with stat cards
- Added footer with social links
- Better accessibility with ARIA labels
- Print styles for tickets
- Custom scrollbar styling
- Loading skeleton animations (prepared)

### v1.0 Basic (2026-06-16)
- Initial release with basic functionality
- 5 sample events
- Basic CRUD operations
- Simple responsive design

---

## Support

For issues or questions:
- Open an issue on GitHub
- Email: your.email@example.com

---

**Happy Event Planning! 🎉**
