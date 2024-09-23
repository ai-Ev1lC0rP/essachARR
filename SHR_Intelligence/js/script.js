// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Carousel code
    const carouselInner = document.getElementById('carousel-inner');
    let currentSlide = 0;
    const slides = [
        'images/angelica.png',
        'images/arnold.png',
        'images/daria.png',
        'images/dexter.png'
    ];

    function showSlide(index) {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.innerHTML = `<img src="${slides[index % slides.length]}" alt="Agent Image">`;
        carouselInner.innerHTML = '';
        carouselInner.appendChild(slide);
        carouselInner.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event Listeners
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    // Animate On Scroll using Intersection Observer
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Mouseover effect for images (if applicable)
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseover', function() {
            const originalSrc = img.src;
            const newSrc = originalSrc.replace('non-colored', 'colored');
            img.src = newSrc;

            img.addEventListener('mouseout', function() {
                img.src = originalSrc;
            });
        });
    });

    // Placeholder for form submission logic
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted successfully!');
        });
    });
});