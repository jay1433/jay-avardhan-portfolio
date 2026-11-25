# Jayavardhan - Portfolio Website

A simple, modern, dark-themed portfolio site for an RPA Lead (UiPath / Power Automate).

## Structure

- `index.html` - main page content (sections: Home, About, Skills, Experience, Projects, Certifications, Contact)
- `styles.css` - all styling
- `script.js` - typed-text effect, mobile menu, animated counters, contact form handler
- `assets/resume/` - put your resume PDF here, named `Jayavardhan_Resume.pdf` (or update the link in `index.html`)
- `assets/images/` - put a profile photo / project screenshots here if you want to add them

## How to view it

Just open `index.html` in your browser, or serve it locally:

```
cd "E:\My Portfolio Application"
python -m http.server 8000
```

Then visit http://localhost:8000

## What to customize

1. **Resume**: drop your PDF into `assets/resume/Jayavardhan_Resume.pdf`
2. **About section**: update bio, location, stats
3. **Experience**: replace company names, dates, and bullet points with real ones
4. **Projects**: replace placeholder projects with real automation projects you've built
5. **Certifications**: update with your actual UiPath/Microsoft certifications
6. **Social links**: update LinkedIn/GitHub URLs
7. **Contact form**: currently shows an alert on submit. To make it actually send emails, connect a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/) by adding an `action` attribute / API call.

## Deploying for free

- **GitHub Pages**: push this folder to a GitHub repo and enable Pages in repo settings
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo for auto-deploys
