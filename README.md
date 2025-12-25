# Customer Management Dashboard

A responsive customer management dashboard built with HTML, SCSS, and JavaScript.
🔗https://nilantoashik.github.io/UI-Customer-Management/
## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, dark theme with smooth animations
- **Interactive Elements**: Animated counter, hover effects, and transitions
- **Dashboard Components**:
  - User activities and requests
  - Discount offers with progress visualization
  - Calendar view
  - Transaction history
  - Account information

## Getting Started

### Prerequisites

- Node.js (for building SCSS)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

To start development with automatic SCSS compilation:

```bash
npm run dev
```

This will watch for changes in `src/style.scss` and automatically compile to `dist/style.css`.

If you change `src/index.html` or `src/script.js`, run:

```bash
npm run build
```

to copy updated files into `dist/`.

### Build

To build the project for production:

```bash
npm run build
```

This compiles the SCSS with compression.

### View the Project

Open `dist/index.html` in your web browser to view the dashboard, or run:

```bash
npm run serve
```

This will start a local development server on port 3000.

## Project Structure

```
customer-management/
├── src/
│   ├── index.html      # Main HTML file
│   ├── script.js       # JavaScript functionality
│   └── style.scss      # SCSS styles
├── dist/
│   ├── index.html      # Built HTML file
│   ├── script.js       # JavaScript file
│   └── style.css       # Compiled CSS
├── package.json        # Project configuration
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **SCSS**: CSS preprocessor for maintainable styles
- **JavaScript**: Interactive functionality
- **Google Fonts**: Inter font family
- **Responsive Design**: Media queries for mobile-first approach

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

### Colors

The main colors are defined as SCSS variables in `src/style.scss`:

```scss
$bg-color: #252954;
$body-color: #9b9ca7;
$main-bg: #0e0e23;
```

### Animations

Animations use CSS custom properties for delays:

```scss
--delay: 0s;
```

## License


MIT License
