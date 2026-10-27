# Vraj Pandya — Developer Portfolio

A modern, responsive, and performance-focused developer portfolio website built for **Vraj Pandya**, an Information Technology undergraduate student specializing in software development, Data Structures and Algorithms (DSA), and problem-solving.

Live Preview / Repository: [https://github.com/vrajpandya-07/Resume.github.io](https://github.com/vrajpandya-07/Resume.github.io)

---

## 🌟 Key Features

- **Accurate Academic Showcase:** Displays exact academic metrics (First Semester SPI: 9.76, Second Semester SPI: 9.64, Class 12: 89.69%, Class 10: 88.17%) accurately labeled with no misleading terminology.
- **Dark / Light Theme Toggle:** Seamless, persistent theme switcher using CSS Custom Properties and `localStorage` with system preference detection.
- **Projects & Hackathons:** Features the *Smart Radar-Based Parking System* (Embedded / Hardware IoT) and competitive hackathon participation (*DU Hacks* & *ODOO Hackathon*).
- **Volunteer Experience:** Dedicated highlight of involvement with the *AWS SBG* student community (Inauguration coordination & Team Management).
- **Zero Heavy Dependencies:** Crafted using vanilla semantic HTML5, modern CSS, and lightweight JavaScript. Lightning-fast load times and accessible contrast.
- **Fully Responsive & Accessible:** Optimized for mobile phones, tablets, and desktop displays with responsive hamburger navigation, skip link, and keyboard accessibility.
- **Interactive Contact:** One-click email copy-to-clipboard button and direct links to GitHub and LinkedIn.

---

## 📁 Project Structure

```text
Portfolio/
├── index.html        # Home page: Hero, About Me, Academic & Project Highlights
├── education.html    # Academic performance cards, educational timeline, validated skills
├── projects.html     # Featured projects, hackathon badges, volunteer section & future project template
├── contact.html      # Direct contact channels (Email, GitHub, LinkedIn) & internship readiness
├── style.css         # Complete design system, theme variables (Dark/Light), layout & typography
├── script.js        # Theme switcher, responsive mobile navigation, and clipboard interaction
└── README.md         # Documentation, customization guide & deployment instructions
```

---

## 🛠️ Built With

- **Semantic HTML5:** Clean document outline, ARIA labels, and accessible landmarks.
- **Modern CSS3:** CSS Custom Properties (CSS variables), CSS Grid, Flexbox, smooth transitions, and responsive media queries.
- **Vanilla JavaScript (ES6+):** Theme persistence, responsive navigation toggles, and clipboard API.
- **Typography:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Syne](https://fonts.google.com/specimen/Syne), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).

---

## 📋 How to Customize

### 1. Adding a New Project
In `projects.html`, locate the `<!-- TEMPLATE TO ADD A FUTURE PROJECT -->` comment inside `<section class="fade d5">`. Copy the provided HTML snippet and insert it into the `<div class="projects-grid">` on line 32:

```html
<article class="proj-card">
  <div class="proj-top">
    <span class="proj-num">02 // CATEGORY</span>
    <span class="proj-badge">Technology / Tag</span>
  </div>
  <h2 class="proj-title">Your Project Name</h2>
  <p class="proj-desc">A concise 2-3 sentence description of your project.</p>
  <ul class="proj-bullets">
    <li>Key technical achievement or algorithm implemented</li>
    <li>Impact or problem solved</li>
  </ul>
  <div class="tech-row">
    <span class="tech">C++</span>
    <span class="tech">DSA</span>
  </div>
</article>
```

### 2. Updating Semester Scores
When you complete upcoming semesters (e.g., 3rd Semester SPI):
- Open `education.html` and `index.html`.
- Update the `.stat-num` element with your new semester score and update the semester count in the profile card.

### 3. Adding New Skills
In `education.html`, find the `<div class="skills-container">` section. You can easily add new skill tags by adding:
```html
<span class="skill-tag"><span class="skill-dot"></span>New Skill</span>
```

---

## 🚀 Running Locally & Deploying

### Run Locally
Simply open `index.html` in any modern web browser (e.g., Chrome, Edge, Firefox, Safari). No build tools or package managers required.

### Deploy to GitHub Pages
1. Initialize git (if not already done) and commit the changes:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio with modern design, theme toggle, and accurate profile"
   ```
2. Push to your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/vrajpandya-07/Resume.github.io.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch `main` and folder `/ (root)`.
   - Click **Save**. Your website will be live in minutes!
