// Custom JavaScript for interactivity and animations

document.addEventListener('DOMContentLoaded', function() {

    // 1. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Scroll-Triggered Class for Sections
    // We'll use the Intersection Observer API for a more efficient approach

    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.2 // Percentage of the target element which must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once visible if animation should only run once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class when element is no longer visible (for re-triggering or exit animations)
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 3. Basic Custom Cursor Idea
    // Requires a div with class 'custom-cursor' in your HTML body and styling in CSS.
    // More advanced effects often need canvas or libraries.

    const customCursor = document.querySelector('.custom-cursor');

    if (customCursor) {
        document.addEventListener('mousemove', (e) => {
            // Use GSAP for smoother movement if integrated
            // gsap.to(customCursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
             customCursor.style.left = e.clientX + 'px';
             customCursor.style.top = e.clientY + 'px';
        });

        // Add classes to cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-item'); // Add more selectors as needed

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                customCursor.classList.add('interactive');
            });
            element.addEventListener('mouseleave', () => {
                customCursor.classList.remove('interactive');
            });
        });
    }

    // Add other interactive elements or animations here:
    // - Playful elements (e.g., clickable blob animation)
    // - More complex hover effects using JS/libraries
    // - Integration of animation libraries like GSAP or Framer Motion
    // - Integration of smooth scrolling libraries like Locomotive Scroll or Lenis

});
