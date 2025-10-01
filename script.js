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

// // Form Validation (for Contact and Giving pages)
// function validateForm(formId) {
//     const form = document.getElementById(formId);
//     if (!form) return;

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
//         let isValid = true;

//         inputs.forEach(input => {
//             if (!input.value.trim()) {
//                 isValid = false;
//                 input.style.borderColor = 'var(--secondary-red)';
                
//                 // Create error message if it doesn't exist
//                 if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
//                     const errorMsg = document.createElement('span');
//                     errorMsg.classList.add('error-message');
//                     errorMsg.style.color = 'var(--secondary-red)';
//                     errorMsg.style.fontSize = '0.9rem';
//                     errorMsg.style.marginTop = '5px';
//                     errorMsg.style.display = 'block';
//                     errorMsg.textContent = 'This field is required';
//                     input.parentNode.insertBefore(errorMsg, input.nextSibling);
//                 }
//             } else {
//                 input.style.borderColor = '';
//                 const errorMsg = input.nextElementSibling;
//                 if (errorMsg && errorMsg.classList.contains('error-message')) {
//                     errorMsg.remove();
//                 }
//             }
//         });

//         if (isValid) {
//             // Show success message
//             const successMsg = document.createElement('div');
//             successMsg.style.backgroundColor = 'var(--primary-color)';
//             successMsg.style.color = 'var(--secondary-white)';
//             successMsg.style.padding = '15px';
//             successMsg.style.borderRadius = '5px';
//             successMsg.style.marginTop = '20px';
//             successMsg.style.textAlign = 'center';
//             successMsg.textContent = 'Thank you! Your submission has been received.';
            
//             form.appendChild(successMsg);
//             form.reset();
            
//             setTimeout(() => {
//                 successMsg.remove();
//             }, 5000);