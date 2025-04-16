// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Show first slide initially
    showSlide(0);

    // Interactive Demo Functionality
    // 1. Dynamic Text Change
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const styleBox = document.getElementById('style-box');
    const toggleStyleBtn = document.getElementById('toggle-style-btn');
    const elementContainer = document.getElementById('element-container');
    const toggleElementBtn = document.getElementById('toggle-element-btn');

    // Array of different texts to cycle through
    const textOptions = [
        "Welcome to Pathfinder AI!",
        "Advanced Security Solutions",
        "Real-time Tracking System",
        "AI-Powered Protection"
    ];
    let currentTextIndex = 0;

    // Function to change text content
    function changeText() {
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        dynamicText.textContent = textOptions[currentTextIndex];
        
        // Add animation class
        dynamicText.classList.add('text-change-animation');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            dynamicText.classList.remove('text-change-animation');
        }, 1000);
    }

    // Function to toggle style
    function toggleStyle() {
        styleBox.classList.toggle('active');
    }

    // Function to toggle element
    function toggleElement() {
        const existingElement = elementContainer.querySelector('.dynamic-element');
        
        if (existingElement) {
            existingElement.remove();
        } else {
            const newElement = document.createElement('div');
            newElement.className = 'dynamic-element';
            newElement.textContent = 'New Element Added!';
            elementContainer.appendChild(newElement);
        }
    }

    // Add event listeners
    changeTextBtn.addEventListener('click', changeText);
    toggleStyleBtn.addEventListener('click', toggleStyle);
    toggleElementBtn.addEventListener('click', toggleElement);

    // Add hover effect for style box
    styleBox.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#4CAF50';
    });

    styleBox.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#2196F3';
    });
}); 