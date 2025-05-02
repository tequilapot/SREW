// Products Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('.dropdown-content a, .mobile-dropdown-content a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust offset as needed
                    behavior: 'smooth'
                });
                
                // Close dropdown on mobile after clicking
                if (window.innerWidth < 768) {
                    if (document.querySelector('.dropdown-content').style.display === 'block') {
                        document.querySelector('.dropdown-content').style.display = 'none';
                    }
                    
                    // Close mobile nav if open
                    if (document.getElementById('mobile-nav').classList.contains('open')) {
                        document.getElementById('mobile-nav').classList.remove('open');
                        document.body.style.overflow = '';
                    }
                }
            }
        });
    });
    
    // Mobile dropdown toggle
    if (window.innerWidth < 768) {
        const dropbtn = document.querySelector('.dropbtn');
        const dropdownContent = document.querySelector('.dropdown-content');
        
        if (dropbtn && dropdownContent) {
            dropbtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.matches('.dropbtn') && !dropdownContent.contains(e.target)) {
                    dropdownContent.style.display = '';
                }
            });
        }
    }
    
    // Active section highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.product-section');
        const navLinks = document.querySelectorAll('.dropdown-content a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    
    // Set animation delays for menu items
    const menuItems = document.querySelectorAll('.mobile-nav-menu li');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Set animation delays for buttons
    const navButtons = document.querySelectorAll('.mobile-nav-buttons .btn');
    navButtons.forEach((btn, index) => {
        btn.style.animationDelay = `${(menuItems.length + index) * 0.1}s`;
    });
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.add('open');
            document.body.style.overflow = 'hidden';
            
            // Animate menu items
            menuItems.forEach(item => {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 50);
            });
            
            // Animate buttons
            navButtons.forEach(button => {
                button.style.opacity = '0';
                setTimeout(() => {
                    button.style.opacity = '1';
                }, 50);
            });
        });
    }
    
    if (mobileCloseBtn && mobileNav) {
        mobileCloseBtn.addEventListener('click', function() {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile menu when clicking outside
    if (mobileNav && mobileNavContainer) {
        document.addEventListener('click', function(event) {
            if (mobileNav.classList.contains('open') && 
                !mobileNavContainer.contains(event.target) && 
                event.target !== mobileMenuBtn &&
                !mobileMenuBtn.contains(event.target)) {
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Mobile dropdown toggle
    mobileDropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a');
        const dropdownContent = dropdown.querySelector('.mobile-dropdown-content');
        
        if (dropdownToggle && dropdownContent) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                mobileDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            });
        }
    });
    
    // Add WhatsApp animation to floating button
    const whatsappFloating = document.querySelector('.whatsapp-floating');
    if (whatsappFloating) {
        // Already styled with CSS
        
        // Add pulse animation
        function addPulseAnimation() {
            whatsappFloating.classList.add('pulse');
            setTimeout(() => {
                whatsappFloating.classList.remove('pulse');
                setTimeout(addPulseAnimation, 4000);
            }, 2000);
        }
        
        // Start animation after 2 seconds
        setTimeout(addPulseAnimation, 2000);
    }
    
    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add WhatsApp animations to all WhatsApp buttons
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .whatsapp-icon, .cta-button.whatsapp');
    whatsappButtons.forEach(button => {
        // Animation is handled by CSS
    });
});
