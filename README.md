# Love Letter Website ❤️

A beautiful, mobile-responsive static website to express love with a photo/video gallery and interactive guestbook.

## Features

✨ **Mobile-First Responsive Design** - Looks great on all devices (phones, tablets, desktops)  
💝 **Hero Section** - Heartfelt love message with animated floating hearts  
📸 **Photo Gallery** - Grid layout for displaying cherished memories  
🎥 **Video Gallery** - Section for video memories  
📝 **Guestbook** - Google Form integration for visitors to leave messages and advice  
🎨 **Beautiful Animations** - Smooth scrolling, fade-in effects, and hover animations  

## Quick Start

1. **Clone or download this repository**
2. **Open `index.html` in a web browser**
3. **Customize the content** (see instructions below)

## Customization Guide

### 1. Personalizing the Love Message

Edit `index.html` and find the `.love-message` section:

```html
<div class="love-message">
    <p>Your personal message here...</p>
</div>
```

Replace the placeholder text with your own heartfelt words.

### 2. Adding Photos to the Gallery

Replace the placeholder divs with actual images:

**Before:**
```html
<div class="gallery-item">
    <div class="gallery-placeholder">
        <span>📸</span>
        <p>Our First Date</p>
    </div>
</div>
```

**After:**
```html
<div class="gallery-item">
    <img src="path/to/your/photo.jpg" alt="Our First Date">
</div>
```

**Tips:**
- Create a `images` folder and place your photos there
- Use relative paths like `images/photo1.jpg`
- Optimize images for web (recommended: max 1920px width)
- Supported formats: JPG, PNG, WebP

### 3. Adding Videos

**Option A: Upload videos to the repository**
```html
<div class="video-item">
    <video controls>
        <source src="videos/our-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

**Option B: Embed YouTube videos**
```html
<div class="video-item">
    <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

### 4. Setting Up the Google Form Guestbook

1. **Create a Google Form:**
   - Go to [Google Forms](https://forms.google.com)
   - Click **+ Blank** to create a new form
   - Name it "Guestbook"

2. **Add these suggested fields:**
   - Name (Short answer)
   - Email (Short answer, optional)
   - Message/Well Wishes (Paragraph)
   - Advice for the Couple (Paragraph)

3. **Get the embed code:**
   - Click **Send** button
   - Click the **</>** (Embed HTML) icon
   - Copy the iframe code

4. **Add to your website:**
   - Open `index.html`
   - Find the `<!-- Google Form Embed -->` section
   - Replace the placeholder with your iframe code
   - Adjust `height` attribute as needed (e.g., `height="800"`)

**Example:**
```html
<iframe 
    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
    width="100%" 
    height="800" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
    Loading…
</iframe>
```

### 5. Changing Colors

Edit `styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #ff6b9d;      /* Main pink color */
    --secondary-color: #c44569;    /* Darker pink */
    --accent-color: #ffa502;       /* Orange accent */
    /* ... modify as desired ... */
}
```

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Under **Source**, select **main branch**
4. Your site will be live at `https://yourusername.github.io/buckarooney`

### Option 2: Netlify (Free & Fast)

1. Create an account at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Site goes live instantly with a custom URL

### Option 3: Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Option 4: Traditional Web Hosting

Upload all files to your web hosting via FTP:
- `index.html`
- `styles.css`
- `script.js`
- `images/` folder (if you add one)
- `videos/` folder (if you add one)

## File Structure

```
buckarooney/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── README.md           # This file
│
├── images/            # (Create this folder for your photos)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
│
└── videos/            # (Create this folder for your videos)
    ├── video1.mp4
    └── ...
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

1. **Image Optimization**: Use tools like [TinyPNG](https://tinypng.com) to compress images
2. **Video Hosting**: For large videos, consider YouTube or Vimeo instead of hosting directly
3. **Testing**: Test on multiple devices (phone, tablet, desktop)
4. **Personal Touch**: Add your own photos and customize the message!
5. **Privacy**: If you want the site private, use password protection through your hosting provider

## Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images are in the correct folder
- Check file names match exactly (case-sensitive)

**Google Form not loading?**
- Verify you copied the entire iframe code
- Check that your form is set to accept responses
- Make sure the form isn't restricted to your organization only

**Mobile layout issues?**
- Clear browser cache
- Ensure viewport meta tag is present in HTML
- Test with browser developer tools mobile view

## License

This project is licensed under the terms in the LICENSE file.

## Made with Love

This website was created to celebrate love and create lasting memories. Feel free to customize it to make it uniquely yours! ❤️

---

**Need help?** Check out these resources:
- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [Google Forms Help](https://support.google.com/docs/answer/6281888)