// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});


// Gallery View More Functionality
const viewMoreBtn = document.getElementById('viewMoreBtn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (viewMoreBtn) {
    let showingAll = false;

    viewMoreBtn.addEventListener('click', () => {
        galleryItems.forEach(item => {
            if (item.classList.contains('hidden')) {
                item.classList.remove('hidden');
            }
        });
        
        if (!showingAll) {
            viewMoreBtn.textContent = 'Show Less';
            showingAll = true;
        } else {
            // Hide extra items again
            galleryItems.forEach((item, index) => {
                if (index >= 4) {
                    item.classList.add('hidden');
                }
            });
            viewMoreBtn.textContent = 'View More';
            showingAll = false;
            
            // Scroll back to gallery title
            document.querySelector('.gallery h2').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link Highlighting
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call on page load
setActiveNavLink();

// Scroll Animation for Elements
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

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.sermon-card, .service-card, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Setup video functionality for index page sermons
document.addEventListener('DOMContentLoaded', () => {
    setupIndexSermons();
});

function setupIndexSermons() {
    const sermonCards = document.querySelectorAll('.sermons-preview .sermon-card');
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeModal');
    const videoPlayer = document.getElementById('videoPlayer');

    if (!modal) return; // Exit if modal doesn't exist

    // Add click handlers to sermon cards
    sermonCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent link clicks from triggering
            if (e.target.tagName === 'A') return;
            
            const videoId = this.getAttribute('data-video-id');
            if (videoId) {
                openVideo(videoId);
            }
        });
    });

    // Close modal button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeVideo);
    }

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideo();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeVideo();
        }
    });

    function openVideo(videoId) {
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeVideo() {
        videoPlayer.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

