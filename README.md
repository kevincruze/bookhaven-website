# Book Haven Bookstore Website

A responsive, accessible, and dynamic single-page website for **Book Haven Bookstore**, built as my final project for Introduction to Web Development.  
This site demonstrates best practices in UI/UX, semantic HTML, CSS layouts, JavaScript interactivity, and Web Storage APIs.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
- [File Structure](#file-structure)  
- [Technologies Used](#technologies-used)  
- [Figma Wireframes](#figma-wireframes)  
- [Accessibility & Responsiveness](#accessibility--responsiveness)   
- [Author](#author)  

---

## Demo

Live site: https://kevincruze.github.io/bookhaven-website/  

---

## Features

- **Homepage** with full-width hero banner, category cards, and perks list  
- **Gallery** page with 3×3 CSS Grid of items, “Add to Cart” buttons, and a modal cart  
- **About Us** page with business info, community events panels, and a contact form  
- **Staff Picks** page showcasing employee recommendations  
- **JavaScript Interactivity**  
  - Footer newsletter “Subscribe” alert  
  - Gallery “Add to Cart,” “View Cart,” “Clear Cart,” and “Process Order” alerts  
  - About Us form alert and localStorage persistence  
- **Web Storage**  
  - `sessionStorage` for shopping cart persistence across page reloads  
  - `localStorage` for storing contact-form submissions across browser sessions  
- **Responsive Design** via CSS Grid, Flexbox, and media queries  
- **Accessibility**  
  - Semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`)  
  - Alt text, ARIA labels, focus outlines, high contrast ratios  

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Optional: [VS Code](https://code.visualstudio.com/) + Live Server extension for local development  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/kevincruze/bookhaven-website.git
   cd bookhaven-website
2. **(Optional) Install Live Server**
   in VS code for auto-reload

### Running Locally
- **Without a server:** Open `index.html` in your browser.
- **With Live Server:**
  - Right-click `index.html` -> **Open with Live Server**
  - Or click **Go Live** in the VS Code status bar.

---

## File Structure
 ```bash
bookhaven-website/
├─ css/
│  └─ styles.css         # External stylesheet
├─ images/               # Logos, hero banner, product & staff photos
├─ js/
│  └─ script.js          # All dynamic functionality & storage logic
├─ index.html            # Home page
├─ gallery.html          # Gallery & shopping cart modal
├─ about.html            # About Us, events, contact form
├─ staff-picks.html      # Staff Picks & Recommendations
└─ README.md             # This documentation
 ```
---

## Technologies Used
- **HTML5** for semantic markup
- **CSS3** (Grid, Flexbox, pseudo-elements)
- **JavScript (ES6+)** for event handling & DOM manipulation
- **Web Storage API** (`sessionStorage` & `localStorage`)
- **Google Fonts** (Playfair Dispaly, Open Sans)

---

## Figma Wireframes
- [Mobile Wireframe](https://www.figma.com/design/WKtjY1WR60Je8OWOA9F3LM/Touchstone-Task-1--Mobile-Wireframe?t=vyTVEdtS0X78RnWS-0)
- [Desktop Wireframe](https://www.figma.com/design/VSagY4Zd5D8fqP3lqCc9UE/Untitled?node-id=0-1&p=f&t=N5nT4uzr7YZKg3Sl-0)

---

## Accessibility & Responsiveness
- Designed with **WCAG AA** contrast ratios (>4.5:1)
- **Keyboard-navigable** with clear focus styles
- All images include descriptive `alt` attributes
- Responsive breakpoints at **600px** and **768px** for optimal mobile/tablet/desktop layouts

## Author
GitHub: [@kevincruze](https://github.com/kevincruze)
