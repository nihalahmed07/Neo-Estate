// Page Load Animation
window.addEventListener('load', () => {
    // Minimum display time for preloader (1.5 seconds)
    setTimeout(() => {
        document.body.classList.add('loaded');

        // Remove preloader from DOM after fade out
        setTimeout(() => {
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                preloader.remove();
            }
        }, 500);
    }, 1500);
});

// Alternative: If you want to hide preloader as soon as page loads
// Uncomment this and comment out the code above
/*
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.remove();
    }, 500);
});
*/

// Hero Search Tabs Functionality
const searchTabs = document.querySelectorAll('.search-tab');
searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        searchTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
    });
});

// Hero Search Form Functionality
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const selectLocalityBtn = document.querySelector('.select-locality-btn');
const propertyEstimateWidget = document.querySelector('.property-estimate-widget');

if (searchForm && selectLocalityBtn) {
    selectLocalityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTab = document.querySelector('.search-tab.active');
        const searchType = activeTab ? activeTab.dataset.tab : 'buy';
        const location = searchInput ? searchInput.value : '';

        // Simulate search (you can replace this with actual search logic)
        console.log('Search Parameters:', {
            type: searchType,
            location: location
        });

        // Add loading state
        selectLocalityBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="M4.93 4.93l2.83 2.83"></path>
                    <path d="M16.24 16.24l2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="M4.93 19.07l2.83-2.83"></path>
                    <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
                Searching...
            `;

        // Reset button after 2 seconds
        setTimeout(() => {
            selectLocalityBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Select a locality
                `;
        }, 2000);
    });
}

// Property Estimate Widget
if (propertyEstimateWidget) {
    propertyEstimateWidget.addEventListener('click', () => {
        console.log('Property estimate clicked');
        // Add your property estimate logic here
        alert('Property estimation feature coming soon!');
    });
}

// Cities Grid Functionality
const cityCards = document.querySelectorAll('.city-card');
const seeAllCard = document.querySelector('.see-all-card');

cityCards.forEach(card => {
    card.addEventListener('click', () => {
        const city = card.dataset.city;
        const cityName = card.querySelector('.city-name').textContent;
        console.log(`City clicked: ${city} (${cityName})`);

        // Navigate to properties page with city parameter
        // For now, we'll navigate to the properties page
        // In a real application, you might pass the city as a URL parameter
        window.location.href = 'properties.html';
    });

    // Add hover effect with slight delay
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// See All Locations
if (seeAllCard) {
    seeAllCard.addEventListener('click', () => {
        console.log('See all locations clicked');
        // Navigate to properties page to show all locations
        window.location.href = 'properties.html';
    });
}

// Hero Video Control and Visibility
const heroVideo = document.querySelector('.hero-video');
const videoControlBtn = document.querySelector('.video-control');
const heroVideoContainer = document.querySelector('.hero-video-container');
const heroVideoOverlay = document.querySelector('.hero-video-overlay');
const heroOverlay = document.querySelector('.hero-overlay');
const heroCarousel = document.querySelector('.hero-carousel');

if (heroVideo && videoControlBtn) {
    // Play/Pause control
    videoControlBtn.addEventListener('click', () => {
        if (heroVideo.paused) {
            heroVideo.play();
            videoControlBtn.classList.remove('paused');
            videoControlBtn.setAttribute('aria-label', 'Pause video');
        } else {
            heroVideo.pause();
            videoControlBtn.classList.add('paused');
            videoControlBtn.setAttribute('aria-label', 'Play video');
        }
    });

    // Hide video background when scrolling past hero section
    window.addEventListener('scroll', () => {
        if (heroCarousel) {
            const heroBottom = heroCarousel.offsetTop + heroCarousel.offsetHeight;
            const scrollPosition = window.pageYOffset + window.innerHeight;

            if (window.pageYOffset > window.innerHeight * 0.9) {
                // Hide video elements when scrolled past hero
                if (heroVideoContainer) heroVideoContainer.style.display = 'none';
                if (heroVideoOverlay) heroVideoOverlay.style.display = 'none';
                if (heroOverlay) heroOverlay.style.display = 'none';
                if (videoControlBtn) videoControlBtn.style.display = 'none';
            } else {
                // Show video elements when in hero section
                if (heroVideoContainer) heroVideoContainer.style.display = 'block';
                if (heroVideoOverlay) heroVideoOverlay.style.display = 'block';
                if (heroOverlay) heroOverlay.style.display = 'block';
                if (videoControlBtn) videoControlBtn.style.display = 'flex';
            }
        }
    });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

// Enhanced scroll effect with performance optimization
let ticking = false;

function updateHeaderOnScroll() {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for enhanced styling
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Add subtle parallax effect to logo
    const logo = document.querySelector('.logo h1');
    if (logo) {
        const parallaxOffset = currentScroll * 0.05;
        logo.style.transform = `translateY(${parallaxOffset}px)`;
    }

    // Hide/show header on scroll direction (optional)
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateHeaderOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick, { passive: true });

// Map Tabs
const mapTabs = document.querySelectorAll('.map-tab');
mapTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        mapTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Here you would switch the map image/content
    });
});

// Category Tabs (What We Do)
const categoryTabs = document.querySelectorAll('.category-tab');
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Switch tab content
        const tabName = tab.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        const activeContent = document.getElementById(`${tabName}-tab`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.project-card, .insight-card, .news-card, .stat-block');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter Animation for Stats
const animateCounter = (element, target, suffix = '') => {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

// Observe stat numbers for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number, .stat-number-large');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    const text = stat.textContent.trim();

                    // Extract number and suffix
                    const match = text.match(/^([$#]?)(\d+(?:\.\d+)?)(B\+?|%|\+)?$/);
                    if (match) {
                        const prefix = match[1];
                        const number = parseFloat(match[2]);
                        const suffix = match[3] || '';

                        stat.textContent = prefix + '0' + suffix;

                        setTimeout(() => {
                            animateCounter(stat, number, suffix);
                            if (prefix) {
                                const currentText = stat.textContent;
                                stat.textContent = prefix + currentText.replace(prefix, '');
                            }
                        }, 200);
                    }
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statSections = document.querySelectorAll('.who-we-are, .map-section');
statSections.forEach(section => {
    if (section) {
        statsObserver.observe(section);
    }
});

// Video Play Button
const videoPlayButton = document.querySelector('.video-play-button');
if (videoPlayButton) {
    videoPlayButton.addEventListener('click', () => {
        alert('Lorem ipsum video would play here');
    });
}

// Subscription Form
const subscriptionForm = document.querySelector('.subscription-form');
if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscriptionForm.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Thank you! You've been subscribed with: ${email}`);
            subscriptionForm.reset();
        }
    });
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 1024px) {
        .nav {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
        }
        
        .nav.active {
            max-height: 600px;
            display: block;
        }
        
        .nav ul {
            flex-direction: column;
            padding: 1rem 0;
            gap: 0.25rem;
        }
        
        .nav ul li {
            width: 100%;
            padding: 0 1rem;
        }
        
        .nav a {
            display: block;
            padding: 1rem 1.5rem !important;
            border-radius: 8px;
            margin: 0.25rem 0;
            transition: all 0.3s ease;
        }
        
        .nav a::before {
            display: none;
        }
        
        .nav a:hover {
            transform: translateX(5px);
            background: rgba(232, 119, 34, 0.1) !important;
        }
        
        .nav .btn-contact {
            border-radius: 50px !important;
            margin: 1rem 0.5rem 0.5rem;
        }
        
        .dropdown {
            position: static;
            transform: none !important;
            box-shadow: none;
            padding: 1rem;
            min-width: auto;
            margin-top: 0.5rem;
            background: rgba(16, 71, 53, 0.05);
            border-radius: 8px;
            display: none !important;
        }
        
        .has-dropdown.active .dropdown {
            display: flex !important;
            opacity: 1 !important;
        }
        
        .dropdown::before {
            display: none;
        }
        
        .dropdown-col {
            padding: 0.5rem;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
            transform: translateX(20px);
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -8px);
        }
    }
    
    .nav a.active {
        color: var(--secondary-color);
        background: rgba(232, 119, 34, 0.1);
    }
`;
document.head.appendChild(style);

// Add hover effect to cards
const cards = document.querySelectorAll('.project-card, .insight-card, .news-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize
console.log('PCL Website Clone - Lorem Ipsum Version Initialized');
console.log('All content has been replaced with placeholder text');
