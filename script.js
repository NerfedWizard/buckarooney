// Smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add active state to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Highlight navigation on scroll
    window.addEventListener('scroll', highlightNavigation);

    // Add animation to gallery items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item, .video-item');
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Add click event for gallery items (for future expansion - e.g., lightbox)
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Placeholder for future functionality (e.g., open lightbox)
            console.log('Gallery item clicked');
        });
    });

    // Mobile menu toggle (if needed for smaller screens)
    // This can be expanded if a hamburger menu is added
    const navMenu = document.querySelector('.nav-menu');
    
    // Add heart animation effect on hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        createFloatingHearts();
    }
});

// Create floating hearts animation in hero section
function createFloatingHearts() {
    const hero = document.querySelector('.hero');
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts';
    heartsContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    `;
    hero.style.position = 'relative';
    hero.appendChild(heartsContainer);

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}%;
            bottom: -50px;
            opacity: 0.7;
            animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
        `;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    // Add CSS animation for floating hearts
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Create hearts periodically
    setInterval(createHeart, 2000);
}

// Add scroll-to-top button functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ff6b9d, #c44569);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
addScrollToTop();
