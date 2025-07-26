// Carousel functionality
class ExperienceCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.cards = document.querySelectorAll('.experience-card');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentIndex = 0;
        
        // Touch handling properties
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.isDragging = false;

        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Add touch events for mobile swipe
        if (window.innerWidth <= 768) {
            this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
            this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
            this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        }

        // Set initial carousel state (hides prev button)
        this.updateCarousel();
    }

    updateCarousel() {
        const translateX = -this.currentIndex * (100 / this.cards.length);
        this.track.style.transform = `translateX(${translateX}%)`;

        this.cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentIndex);
        });

        // Prevent layout shift by using visibility instead of display
        this.prevBtn.style.visibility = this.currentIndex === 0 ? 'hidden' : 'visible';
        this.nextBtn.style.visibility = this.currentIndex === this.cards.length - 1 ? 'hidden' : 'visible';
    }

    nextSlide() {
        if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex += 1;
            this.updateCarousel();
        }
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex -= 1;
            this.updateCarousel();
        }
    }

    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.isDragging = true;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        
        this.currentX = e.touches[0].clientX;
        this.currentY = e.touches[0].clientY;
        
        // Prevent vertical scrolling if horizontal swipe is dominant
        const deltaX = Math.abs(this.currentX - this.startX);
        const deltaY = Math.abs(this.currentY - this.startY);
        
        if (deltaX > deltaY && deltaX > 10) {
            e.preventDefault();
        }
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;
        
        const deltaX = this.currentX - this.startX;
        const deltaY = Math.abs(this.currentY - this.startY);
        
        // Only trigger swipe if horizontal movement is significant and greater than vertical
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
            if (deltaX > 0) {
                // Swipe right - go to previous slide
                this.prevSlide();
            } else {
                // Swipe left - go to next slide
                this.nextSlide();
            }
        }
        
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
    }
}


// Skills interaction
class SkillsInteraction {
    constructor() {
        this.skillTags = document.querySelectorAll('.skill-tag');
        this.skillCategories = document.querySelectorAll('.skill-category');
        this.isBlinking = false;
        this.init();
    }
    
    init() {
        this.skillTags.forEach(tag => {
            tag.addEventListener('click', (e) => this.handleSkillClick(e));
            tag.addEventListener('mouseenter', (e) => this.handleSkillHover(e));
            tag.addEventListener('mouseleave', (e) => this.handleSkillLeave(e));
        });
        
        // Start spontaneous blinking - DISABLED for performance
        // this.startSpontaneousBlinking();
    }
    
    startSpontaneousBlinking() {
        const triggerBlink = () => {
            if (!this.isBlinking && this.skillTags.length > 0) {
                this.isBlinking = true;
                
                // Select random skill tag
                const randomIndex = Math.floor(Math.random() * this.skillTags.length);
                const randomTag = this.skillTags[randomIndex];
                
                // Add blink animation
                randomTag.classList.add('spontaneous-blink');
                
                // Remove animation after it completes
                setTimeout(() => {
                    randomTag.classList.remove('spontaneous-blink');
                    this.isBlinking = false;
                }, 1000);
            }
            
            // Schedule next blink (random interval between 1.5-4 seconds)
            const nextBlinkDelay = Math.random() * 2500 + 1500;
            setTimeout(triggerBlink, nextBlinkDelay);
        };
        
        // Start first blink after initial delay
        const initialDelay = Math.random() * 1000 + 500;
        setTimeout(triggerBlink, initialDelay);
    }
    
    handleSkillClick(e) {
        const skill = e.currentTarget;
        const skillName = skill.textContent.trim();
        
        // Add click animation
        skill.style.transform = 'translateY(0) scale(0.95)';
        setTimeout(() => {
            skill.style.transform = '';
        }, 150);
        
        console.log(`Clicked on skill: ${skillName}`);
    }
    
    handleSkillHover(e) {
        const skill = e.currentTarget;
        const category = skill.classList[1]; // systems, development, cloud, tools
        
        // Highlight other skills in the same category
        const relatedSkills = document.querySelectorAll(`.skill-tag.${category}`);
        relatedSkills.forEach(relatedSkill => {
            if (relatedSkill !== skill) {
                relatedSkill.style.opacity = '0.6';
                relatedSkill.style.transform = 'translateY(-1px) scale(1.02)';
            }
        });
    }
    
    handleSkillLeave(e) {
        const skill = e.currentTarget;
        const category = skill.classList[1];
        
        // Remove highlight from related skills
        const relatedSkills = document.querySelectorAll(`.skill-tag.${category}`);
        relatedSkills.forEach(relatedSkill => {
            if (relatedSkill !== skill) {
                relatedSkill.style.opacity = '';
                relatedSkill.style.transform = '';
            }
        });
    }
}

// Smooth scrolling for navigation (if you add navigation later)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        this.init();
    }
    
    init() {
        const sections = document.querySelectorAll('.glass-section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            this.observer.observe(section);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Unobserve after animation
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Parallax effect for blobs
class ParallaxEffect {
    // constructor() {
    //     this.blobs = document.querySelectorAll('.blob');
    //     this.init();
    // }
    
    // init() {
    //     window.addEventListener('scroll', () => this.handleScroll());
    //     window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    // }
    
    // handleScroll() {
    //     const scrolled = window.pageYOffset;
    //     const rate = scrolled * -0.5;
        
    //     this.blobs.forEach((blob, index) => {
    //         const speed = (index + 1) * 0.2;
    //         blob.style.transform = `translateY(${rate * speed}px)`;
    //     });
    // }
    
    // handleMouseMove(e) {
    //     const mouseX = e.clientX / window.innerWidth;
    //     const mouseY = e.clientY / window.innerHeight;
        
    //     this.blobs.forEach((blob, index) => {
    //         const speed = (index + 1) * 20;
    //         const x = (mouseX - 0.5) * speed;
    //         const y = (mouseY - 0.5) * speed;
            
    //         blob.style.transform += ` translate(${x}px, ${y}px)`;
    //     });
    // }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    new ExperienceCarousel();
    
    // Initialize skills interaction
    new SkillsInteraction();
    
    // Initialize scroll animations - DISABLED
    // new AnimationObserver();
    
    // Initialize parallax effects
    new ParallaxEffect();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Only reset carousel on desktop, preserve state on mobile
    if (window.innerWidth > 768) {
        const carousel = document.querySelector('.carousel-track');
        if (carousel) {
            carousel.style.transform = 'translateX(0%)';
        }
    }
});

// Add some interactive effects for project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Email copy functionality
function copyEmail() {
    const email = 'wumilovsergey@gmail.com';
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        showNotification('Email copied to clipboard!');
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Email copied to clipboard!');
    });
}

// Notification popup
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification-popup');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}