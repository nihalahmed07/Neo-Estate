// Property Page JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // ===== Animated Counter for Hero Stats =====
    function animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Trigger counter animation for stat numbers
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    // ===== View Toggle Functionality =====
    const viewToggles = document.querySelectorAll('.view-toggle');
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            viewToggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const view = this.dataset.view;
            console.log(`Switching to ${view} view`);

            if (view === 'map') {
                alert('Map view coming soon! This would show an interactive map with property markers.');
            }
        });
    });

    // ===== Save Search Functionality =====
    const saveSearchBtn = document.querySelector('.save-search-btn');
    if (saveSearchBtn) {
        saveSearchBtn.addEventListener('click', function () {
            const filters = collectCurrentFilters();
            console.log('Saving search with filters:', filters);

            const originalHTML = this.innerHTML;
            this.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Saved!
            `;
            this.style.background = 'var(--primary-color)';
            this.style.color = 'white';
            this.style.borderColor = 'var(--primary-color)';

            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.style.background = '';
                this.style.color = '';
                this.style.borderColor = '';
            }, 2000);
        });
    }

    // ===== Clear Filters Functionality =====
    const clearFiltersBtn = document.querySelector('.clear-filters-btn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function () {
            document.querySelectorAll('.filter-select').forEach(select => {
                select.value = '';
            });

            const activeFilters = document.querySelector('.active-filters');
            if (activeFilters) {
                activeFilters.style.display = 'none';
            }

            // Add visual feedback
            const originalHTML = this.innerHTML;
            this.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Cleared!
            `;

            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 1500);

            console.log('Filters cleared');
        });
    }

    // ===== Collect Current Filter Values =====
    function collectCurrentFilters() {
        const filters = {};
        document.querySelectorAll('.filter-select').forEach(select => {
            if (select.value) {
                const label = select.previousElementSibling.textContent.trim().split('\n')[0];
                filters[label] = select.options[select.selectedIndex].text;
            }
        });
        return filters;
    }

    // Favorite Button Functionality
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');

            // Add animation effect
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            // You can add API call here to save favorite status
            console.log('Favorite toggled');
        });
    });

    // Property Card Click - Open Modal
    const propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Don't open modal if clicking on action buttons
            if (e.target.closest('.action-btn') || e.target.closest('.compare-btn')) {
                return;
            }

            openPropertyModal(card);
        });
    });

    // Filter Functionality
    const filterBtn = document.querySelector('.filter-btn');
    const filterSelects = document.querySelectorAll('.filter-select');

    if (filterBtn) {
        filterBtn.addEventListener('click', function () {
            const filters = {};

            filterSelects.forEach(select => {
                const label = select.previousElementSibling.textContent;
                filters[label] = select.value;
            });

            console.log('Applied filters:', filters);

            // Add loading state
            this.textContent = 'Applying...';
            this.disabled = true;

            // Simulate API call
            setTimeout(() => {
                this.textContent = 'Apply Filters';
                this.disabled = false;

                // Here you would typically filter the properties
                // For now, we'll just show a message
                alert('Filters applied! (This is a demo)');
            }, 1000);
        });
    }

    // Load More Functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
            this.textContent = 'Loading...';
            this.disabled = true;

            // Simulate loading more properties
            setTimeout(() => {
                this.textContent = 'Load More Properties';
                this.disabled = false;

                // Here you would typically load more properties from an API
                alert('More properties loaded! (This is a demo)');
            }, 1500);
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Property card hover effects
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Add intersection observer for property cards animation
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

    // Observe all property cards
    propertyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add search functionality (if search input exists)
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.property-card');

            cards.forEach(card => {
                const title = card.querySelector('.property-title').textContent.toLowerCase();
                const location = card.querySelector('.property-location').textContent.toLowerCase();

                if (title.includes(searchTerm) || location.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Add price range slider functionality (if needed)
    const priceRangeInputs = document.querySelectorAll('input[type="range"]');
    priceRangeInputs.forEach(input => {
        input.addEventListener('input', function () {
            const value = this.value;
            const output = this.nextElementSibling;
            if (output) {
                output.textContent = `€${value}`;
            }
        });
    });

    // Add property type filter chips
    const propertyTypeChips = document.querySelectorAll('.property-type-chip');
    propertyTypeChips.forEach(chip => {
        chip.addEventListener('click', function () {
            // Remove active class from all chips
            propertyTypeChips.forEach(c => c.classList.remove('active'));
            // Add active class to clicked chip
            this.classList.add('active');

            const propertyType = this.dataset.type;
            console.log(`Filtering by property type: ${propertyType}`);
        });
    });

    // Add sorting functionality
    const sortSelect = document.querySelector('.filter-select[data-sort]');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            const sortBy = this.value;
            console.log(`Sorting by: ${sortBy}`);

            // Here you would implement the actual sorting logic
            // For now, we'll just show a message
            alert(`Properties sorted by: ${sortBy}`);
        });
    }

    // Add map view toggle (if map functionality is needed)
    const mapToggle = document.querySelector('.map-toggle');
    if (mapToggle) {
        mapToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            const isMapView = this.classList.contains('active');

            if (isMapView) {
                console.log('Switching to map view');
                // Show map, hide grid
            } else {
                console.log('Switching to grid view');
                // Show grid, hide map
            }
        });
    }

    // Add property comparison functionality
    const compareButtons = document.querySelectorAll('.compare-btn');
    let selectedProperties = [];

    compareButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const propertyCard = this.closest('.property-card');
            const propertyId = propertyCard.dataset.propertyId;

            if (this.classList.contains('selected')) {
                // Remove from comparison
                this.classList.remove('selected');
                selectedProperties = selectedProperties.filter(id => id !== propertyId);
                this.textContent = 'Compare';
            } else {
                // Add to comparison (max 3 properties)
                if (selectedProperties.length < 3) {
                    this.classList.add('selected');
                    selectedProperties.push(propertyId);
                    this.textContent = 'Selected';
                } else {
                    alert('You can compare up to 3 properties at once');
                }
            }

            console.log('Selected properties for comparison:', selectedProperties);
        });
    });

    // Add property sharing functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const propertyCard = this.closest('.property-card');
            const propertyTitle = propertyCard.querySelector('.property-title').textContent;
            const propertyPrice = propertyCard.querySelector('.property-price').textContent;

            if (navigator.share) {
                navigator.share({
                    title: propertyTitle,
                    text: `Check out this property: ${propertyTitle} - ${propertyPrice}`,
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const shareText = `Check out this property: ${propertyTitle} - ${propertyPrice}`;
                navigator.clipboard.writeText(shareText).then(() => {
                    alert('Property link copied to clipboard!');
                });
            }
        });
    });

    // Add property image gallery functionality
    const propertyImages = document.querySelectorAll('.property-image');
    propertyImages.forEach(imageContainer => {
        imageContainer.addEventListener('click', function () {
            const img = this.querySelector('img');
            const src = img.src;

            // Create modal for image viewing
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <img src="${src}" alt="Property Image">
                </div>
            `;

            // Add modal styles
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: pointer;
            `;

            const modalContent = modal.querySelector('.modal-content');
            modalContent.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
                cursor: default;
            `;

            const modalImg = modal.querySelector('img');
            modalImg.style.cssText = `
                width: 100%;
                height: 100%;
                object-fit: contain;
            `;

            const closeBtn = modal.querySelector('.modal-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                color: white;
                font-size: 30px;
                cursor: pointer;
                z-index: 10001;
            `;

            document.body.appendChild(modal);

            // Close modal functionality
            const closeModal = () => {
                document.body.removeChild(modal);
            };

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Close on escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        });
    });

    console.log('Property page JavaScript loaded successfully');
});

// Property Modal Functions
function openPropertyModal(card) {
    const modal = document.getElementById('propertyModal');

    // Extract property data from card
    const title = card.querySelector('.property-title').textContent;
    const priceText = card.querySelector('.property-meta span:nth-child(1)').textContent.trim();
    const price = priceText.replace('Price:', '').trim();
    const bedroomsText = card.querySelector('.property-meta span:nth-child(2)').textContent.trim();
    const bedrooms = bedroomsText.replace('Bedrooms:', '').trim();
    const bathroomsText = card.querySelector('.property-meta span:nth-child(3)').textContent.trim();
    const bathrooms = bathroomsText.replace('Bathrooms:', '').trim();
    const sizeText = card.querySelector('.property-meta span:nth-child(4)').textContent.trim();
    const size = sizeText.replace('Size:', '').trim();
    const location = card.querySelector('.property-category').textContent.trim().replace('📍', '').trim();
    const type = card.querySelector('.property-eyebrow').textContent;
    const description = card.querySelector('.property-description').textContent;
    const imageSrc = card.querySelector('.property-image img').src;

    // Calculate price per sqm
    const priceNum = parseFloat(price.replace(/[^0-9]/g, ''));
    const sizeNum = parseFloat(size.replace(/[^0-9]/g, ''));
    const pricePerSqm = sizeNum > 0 ? Math.round(priceNum / sizeNum).toLocaleString() : '0';

    // Populate modal header
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalPricePerSqm').textContent = `€${pricePerSqm} per m²`;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalLocationText').textContent = location;
    document.getElementById('modalBadge').textContent = type;

    // Populate quick stats
    document.getElementById('modalBedroomsQuick').textContent = bedrooms;
    document.getElementById('modalBathroomsQuick').textContent = bathrooms;
    document.getElementById('modalSizeQuick').textContent = size;

    // Populate description and details
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalPropertyType').textContent = type;

    // Set image
    document.getElementById('modalMainImage').src = imageSrc;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    console.log('Property modal opened:', title);
}

function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside the content
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closePropertyModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePropertyModal();
        }
    });
});
