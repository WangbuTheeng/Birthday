# Birthday Website for Nupur Khadgi

A beautiful, responsive birthday website created with love for Nupur Khadgi. This website includes a countdown timer, enhanced photo gallery with lightbox, video memories, and a relationship timeline.

## Features

- **Heartfelt Message**: A personal birthday message displayed prominently on the homepage
- **Countdown Timer**: Shows the time remaining until the birthday
- **Enhanced Photo Gallery**: A beautiful grid layout with lightbox effect for an immersive photo viewing experience
- **Video Memories**: A section to display videos of special moments
- **Memory Timeline**: A timeline highlighting key moments in your relationship

## How to Customize

### 1. Update Personal Information

Edit the `index.html` file to:
- Change the page title and greeting to match your preferences
- Modify the heartfelt message content
- Update the footer information

### 2. Add Your Photos

In the `index.html` file, replace the placeholder images in the Photo Gallery section:

```html
<div class="gallery-item">
    <a href="path-to-large-image.jpg" data-lightbox="memories" data-title="Description of this photo">
        <img src="path-to-thumbnail.jpg" alt="Description of the photo">
    </a>
</div>
```

For best results:
- Use high resolution images (at least 800x600 pixels) for the lightbox view (href attribute)
- Use square images (1:1 aspect ratio) of at least 300x300 pixels for thumbnails (img src)
- Add meaningful descriptions in the data-title attribute

### 3. Add Your Videos

In the `index.html` file, replace the placeholder YouTube videos in the Video Memories section:

```html
<div class="video-item">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Video Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Video Title</h3>
</div>
```

Replace `YOUR_VIDEO_ID` with the actual YouTube video ID from the URL of your video.

### 4. Update the Timeline

Edit the timeline entries in the `index.html` file to reflect your relationship milestones:

```html
<div class="timeline-item">
    <div class="timeline-date">Your Date or Event Name</div>
    <div class="timeline-content">
        <h3>Event Title</h3>
        <p>Description of the event or memory</p>
    </div>
</div>
```

### 5. Set the Birthday Date

In the `script.js` file, update the birthday date:

```javascript
const birthdayDate = new Date(2023, 11, 31); // Format: year, month (0-11), day
```

Note: In JavaScript, months are 0-indexed (0 = January, 11 = December)

### 6. Customize Colors

In the `styles.css` file, modify the root color variables to match your preferred color scheme:

```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #6c5ce7;
    --accent-color: #ffeaa7;
    --text-color: #2d3436;
    --light-color: #ffffff;
    --dark-color: #2d3436;
}
```

## How to Deploy

1. **Local Testing**: Open the `index.html` file in your web browser to preview the website

2. **Website Hosting Options**:
   - GitHub Pages (free)
   - Netlify (free)
   - Vercel (free)
   - Any web hosting service of your choice

3. **Custom Domain** (optional):
   - Purchase a domain name (e.g., happybirthdaynupur.com)
   - Set up DNS records to point to your hosting service

## Privacy Considerations

The website uses localStorage to save guestbook entries on the visitor's browser. No data is sent to any server. If you plan to add sensitive content, consider password-protecting the site or using a private hosting option.

## License

This project is created with love and is free to use for personal purposes.

---

Created with ❤️ for Nupur Khadgi
