document.addEventListener('DOMContentLoaded', function() {
    // Show birthday popup message when website loads
    const today = new Date();
    const birthdayMonth = 2; // March (0-indexed, so 2 = March)
    const birthdayDay = 31;
    
    // Create popup element
    const createBirthdayPopup = () => {
        const popup = document.createElement('div');
        popup.className = 'birthday-popup';
        popup.innerHTML = `
            <div class="birthday-popup-content">
                <span class="close-popup">&times;</span>
                <h2>Happy Birthday Moti! ❤️</h2>
                <p>My dearest Nupur,</p>
                <p>May God bless you with health, happiness, and all the joy your heart can hold.</p>
                <p>Today is all about you! I'm so grateful to celebrate another year of your amazing life.</p>
                <div class="birthday-emoji">🎂 🎁 🎉 🎈</div>
            </div>
        `;
        document.body.appendChild(popup);
        
        // Show popup with animation
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);
        
        // Close popup when X is clicked
        const closeBtn = popup.querySelector('.close-popup');
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.remove();
            }, 500);
        });
    };
    
    // Show popup immediately for birthday
    if (today.getMonth() === birthdayMonth && today.getDate() === birthdayDay) {
        createBirthdayPopup();
    }
    
    // For testing/preview purposes - show popup anyway after 2 seconds
    // Remove this in production if you only want it on the actual birthday
    if (!(today.getMonth() === birthdayMonth && today.getDate() === birthdayDay)) {
        setTimeout(createBirthdayPopup, 2000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Account for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Countdown Timer
    const countdownTimer = () => {
        // Set Nupur's birthday date - format: year, month (0-11), day
        const birthdayDate = new Date(2024, 2, 31); // March 31, 2024
        const currentDate = new Date();
        
        // Reset the time part to ensure accurate day calculation
        birthdayDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);
        
        // If birthday has passed this year, set for next year
        if (currentDate > birthdayDate) {
            birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
        }
        
        const totalSeconds = (birthdayDate - new Date()) / 1000;
        
        if (totalSeconds <= 0) {
            document.getElementById('countdown').innerHTML = "<h3>Happy Birthday! 🎉</h3>";
            return;
        }
        
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
        
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    };
    
    // Update the countdown every second
    countdownTimer();
    setInterval(countdownTimer, 1000);
    
    // Configure Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "Photo %1 of %2",
        'fadeDuration': 300,
        'imageFadeDuration': 300
    });
    
    // Photo Categories Modal Functionality
    const modal = document.getElementById('category-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    const closeModalBtn = document.querySelector('.close-modal');
    
    // Category photos data
    const categoryPhotos = {
        'first-date': {
            title: 'Our First Date',
            path: 'images/first date/',
            files: ['photo1.jpg'] // Add actual filenames here
        },
        'valentine-day': {
            title: 'Valentine\'s Day',
            path: 'images/valentine day gift photo\'/',
            files: ['photo1.jpg'] // Add actual filenames here
        },
        'college-days': {
            title: 'College Days',
            path: 'images/college bunk photo/',
            files: ['photo1.jpg'] // Add actual filenames here
        },
        'birthday': {
            title: 'Birthday Celebrations',
            path: 'images/first time birthday/',
            files: ['photo1.jpg'] // Add actual filenames here
        }
    };
    
    // Open modal when view button is clicked
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const category = this.getAttribute('data-category');
            const categoryData = categoryPhotos[category];
            
            if (categoryData) {
                modalTitle.textContent = categoryData.title;
                
                // Clear previous gallery
                modalGallery.innerHTML = '';
                
                // Add photos to modal gallery
                categoryData.files.forEach(file => {
                    const photoPath = categoryData.path + file;
                    
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'modal-gallery-item';
                    
                    const link = document.createElement('a');
                    link.href = photoPath;
                    link.setAttribute('data-lightbox', category);
                    link.setAttribute('data-title', file.replace('.jpg', '').replace(/-/g, ' '));
                    
                    const img = document.createElement('img');
                    img.src = photoPath;
                    img.alt = file.replace('.jpg', '').replace(/-/g, ' ');
                    img.onerror = function() {
                        this.src = 'https://placehold.co/300x200?text=Photo+Not+Found';
                    };
                    
                    link.appendChild(img);
                    galleryItem.appendChild(link);
                    modalGallery.appendChild(galleryItem);
                });
                
                // Open modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });
    
    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
    
    // Close modal when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
    
    // Video setup for better handling on mobile
    const setupVideos = () => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            // Ensure controls are enabled
            video.controls = true;
            
            // Enable preload for better experience
            video.preload = 'metadata';
            
            // Play videos when they come into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Pause all other videos first
                        videos.forEach(v => {
                            if (v !== video) v.pause();
                        });
                        
                        // Only play if user has interacted with the page
                        if (document.documentElement.classList.contains('user-interacted')) {
                            video.play().catch(e => {
                                console.log('Auto-play prevented:', e);
                            });
                        }
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.7 });
            
            observer.observe(video);
        });
    };
    
    // Track user interaction to enable autoplay
    const enableAutoplay = () => {
        document.documentElement.classList.add('user-interacted');
        document.removeEventListener('click', enableAutoplay);
        document.removeEventListener('touchstart', enableAutoplay);
    };
    
    document.addEventListener('click', enableAutoplay);
    document.addEventListener('touchstart', enableAutoplay);
    
    // Animation for elements when they come into view
    const animateOnScroll = () => {
        // Get all elements that need to be animated
        const elements = document.querySelectorAll('.gallery-item, .video-item, .timeline-item, .category-card');
        
        elements.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize animations on page load
    animateOnScroll();
    
    // Preload gallery images for smoother experience
    const preloadImages = () => {
        const galleryImages = document.querySelectorAll('.gallery-item img, .category-cover img');
        
        galleryImages.forEach(img => {
            // For gallery items
            if (img.parentElement.tagName === 'A') {
                const highResSrc = img.parentElement.getAttribute('href');
                if (highResSrc) {
                    const preloadImage = new Image();
                    preloadImage.src = highResSrc;
                }
            }
            // For category covers
            else {
                const src = img.getAttribute('src');
                if (src && !src.includes('placehold.co')) {
                    const preloadImage = new Image();
                    preloadImage.src = src;
                }
            }
        });
    };
    
    // Start preloading images after page loads
    window.addEventListener('load', () => {
        preloadImages();
        setupVideos();
    });
}); 