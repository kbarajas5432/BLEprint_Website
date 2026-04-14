# BLEprint Website

Official website for BLEprint - Innovative Product Solutions for the Modern World.

## About

BLEprint is a startup product company dedicated to transforming how businesses approach product development. Our innovative solutions combine advanced technology with sustainable practices to create products that make a difference.

## Tech Stack

- **HTML5** - Structure and semantic markup
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JavaScript** - Interactive functionality and smooth user experience

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Animated feature cards
- Contact form with validation
- Modern gradient design inspired by clean aesthetics

## Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/BLEprint_Website.git
   cd BLEprint_Website
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## GitHub Pages Setup

This website is designed to be hosted on GitHub Pages. Follow these steps to deploy:

### Option 1: Deploy from main branch

1. Push your code to the repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to your repository on GitHub

3. Click on **Settings** tab

4. Click on **Pages** in the left sidebar

5. Under **Source**, select **Deploy from a branch**

6. Select **main** branch and **/ (root)** folder

7. Click **Save**

8. Your site will be available at `https://your-username.github.io/BLEprint_Website/`

### Option 2: Using GitHub Actions (Advanced)

1. Create a `.github/workflows/pages.yml` file
2. Configure the workflow to build and deploy your site
3. Push to trigger automatic deployment

## Custom Domain (Optional)

To use a custom domain with GitHub Pages:

1. Purchase a domain from a registrar
2. Go to repository Settings > Pages
3. Add your custom domain
4. Configure DNS records with your registrar:
   - Add a CNAME record pointing to `your-username.github.io`
5. Wait for DNS propagation (can take up to 48 hours)

## Project Structure

```
BLEprint_Website/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive JavaScript functionality
├── README.md       # This file
└── .git/           # Git repository
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --gradient-start: #2563eb;
    --gradient-end: #7c3aed;
}
```

### Updating Content

- **Hero section**: Edit the `<h1>` and `<p>` in the hero section of `index.html`
- **Features**: Modify the feature cards in the features section
- **Contact info**: Update the email and location in the contact section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 BLEprint. All rights reserved.
