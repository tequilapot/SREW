
// Product and project data
const productsData = {
  'jaw-crusher': {
    name: 'Jaw Crusher',
    description: 'Our 5 TPH Jaw Crusher is designed for efficient glass and lump crushing operations. Built with high-grade materials for durability and long service life.',
    features: [
      'Powerful 10 HP motor for consistent performance',
      'Adjustable discharge opening for variable output sizes',
      'Heavy-duty construction with wear-resistant parts',
      'Low maintenance design with easy access to wear components',
      'Integrated safety features including emergency stop',
      'Optional dust suppression system'
    ],
    specifications: [
      { name: 'Capacity', value: '5 Tons Per Hour' },
      { name: 'Motor Power', value: '10 HP' },
      { name: 'Feed Size', value: 'Up to 150mm' },
      { name: 'Output Size', value: '10-50mm (adjustable)' },
      { name: 'Weight', value: '1200 kg' },
      { name: 'Dimensions', value: '1800 x 1200 x 1400 mm' }
    ],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop',
    rating: 4.5,
    reviews: 24
  },
  'chili-grinder': {
    name: 'Chili Grinding Machine',
    description: 'High-performance chili grinding machine designed for consistent fine powder production. Ideal for spice processing businesses requiring high output quality.',
    features: [
      'Full stainless steel construction for food-grade safety',
      'Advanced grinding mechanism for uniform particle size',
      'Temperature-controlled operation to preserve spice qualities',
      'Easy to clean and maintain design',
      'Low noise operation',
      'Optional collection system for reduced dust'
    ],
    specifications: [
      { name: 'Capacity', value: '175-200 Kg/hr' },
      { name: 'Material', value: 'Food-grade Stainless Steel' },
      { name: 'Output', value: 'Fine Powder (80-100 mesh)' },
      { name: 'Power', value: '7.5 HP' },
      { name: 'Weight', value: '450 kg' },
      { name: 'Dimensions', value: '1200 x 800 x 1600 mm' }
    ],
    image: 'https://images.unsplash.com/photo-1616263291831-dedfb09c5739?q=80&w=1470&auto=format&fit=crop',
    rating: 4.0,
    reviews: 18
  },
  'sand-dryer': {
    name: 'Sand Dryer',
    description: 'Our 30 TPH gas-based sand dryer is engineered for optimal moisture control and efficiency. Features advanced temperature monitoring and control systems.',
    features: [
      'Efficient gas-based heating system',
      'Digital temperature control panel',
      'Automated moisture sensing and regulation',
      'Heavy-duty rotary drum with heat-resistant lining',
      'Energy-efficient design with heat recovery',
      'Low emissions operation'
    ],
    specifications: [
      { name: 'Capacity', value: '30 Tons Per Hour' },
      { name: 'Heating Method', value: 'Gas-based' },
      { name: 'Temperature Range', value: 'Up to 100°C' },
      { name: 'Control', value: 'Digital Panel Board Display' },
      { name: 'Weight', value: '8500 kg' },
      { name: 'Dimensions', value: '12000 x 2200 x 2800 mm' }
    ],
    image: 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?q=80&w=1470&auto=format&fit=crop',
    rating: 5.0,
    reviews: 32
  },
  'belt-conveyor': {
    name: 'Belt Conveyor Systems',
    description: 'Custom-designed belt conveyor systems for efficient material transport. Engineered to match your specific layout and operational requirements.',
    features: [
      'Customizable length, width, and inclination',
      'Variable speed control for optimized material flow',
      'High-quality belting options for different materials',
      'Robust frame construction for industrial environments',
      'Optional covers and spillage control features',
      'Integration with existing systems'
    ],
    specifications: [
      { name: 'Capacity', value: 'Up to 60+ TPH' },
      { name: 'Belt Width', value: '500-1200 mm' },
      { name: 'Belt Speed', value: 'Adjustable (0.5-2.5 m/s)' },
      { name: 'Drive', value: 'Electric motor with gearbox' },
      { name: 'Construction', value: 'Mild Steel/Stainless Steel' },
      { name: 'Controls', value: 'Manual/Semi-automatic/Fully automatic' }
    ],
    image: 'https://images.unsplash.com/photo-1602476750391-7d54a8560b7b?q=80&w=1471&auto=format&fit=crop',
    rating: 4.5,
    reviews: 41
  }
};

const projectsData = {
  'sand-dryer-system': {
    name: 'Sand Dryer System (30 TPH)',
    client: 'Construction Materials Ltd.',
    year: '2024',
    location: 'Gujarat, India',
    description: 'Design, fabrication, and installation of a 30 TPH sand dryer system for a leading construction materials supplier. The system included custom conveyor systems, temperature control panels, and automated moisture regulation.',
    challenge: 'The client needed a system that could handle variable moisture content in raw materials while maintaining consistent output quality. Additionally, the system needed to integrate with their existing production line with minimal disruption.',
    solution: 'We designed a custom gas-based dryer with advanced moisture sensing capability and integrated control systems. The installation was carefully planned and executed in phases to minimize production downtime.',
    results: 'The new system increased production capacity by 40% while reducing energy consumption by 25% compared to their previous setup. The improved moisture control resulted in higher quality end products and reduced waste.',
    images: [
      'https://images.unsplash.com/photo-1624628639856-100bf817fd35?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602476750391-7d54a8560b7b?q=80&w=1471&auto=format&fit=crop'
    ]
  },
  'jaw-crusher-project': {
    name: '5 TPH Jaw Crusher',
    client: 'Mining Resources Inc.',
    year: '2024',
    location: 'Rajasthan, India',
    description: 'Complete turnkey solution for a 5 TPH jaw crushing operation, including design, manufacturing, installation, and commissioning for a mining operation.',
    challenge: 'The client required a robust crushing solution that could handle hard rock materials in a remote location with limited infrastructure. The system needed to be easy to maintain with locally available resources.',
    solution: 'We engineered a custom 5 TPH jaw crusher with reinforced components to withstand the harsh operating conditions. The design emphasized simplicity in maintenance while maximizing efficiency.',
    results: 'The crusher has been operating reliably since installation, with minimal downtime for maintenance. The client reports excellent performance even with varying material hardness, and the output quality has consistently met their requirements.',
    images: [
      'https://images.unsplash.com/photo-1595246140575-2795238aecbf?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  'chili-grinding-plant': {
    name: 'Chili Grinding Plant',
    client: 'Spice World Exports',
    year: '2023',
    location: 'Andhra Pradesh, India',
    description: 'Complete installation of a chili grinding plant with electrical systems and safety features for a spice processing facility specialized in export-quality products.',
    challenge: 'The client needed a system that could produce extremely fine powder while preserving the essential oils and flavor compounds of the chili. Temperature control during grinding was critical to maintaining product quality.',
    solution: 'We implemented a specialized grinding system with precise temperature control mechanisms and sealed processing to prevent flavor loss. The system was built entirely from food-grade stainless steel with easy-clean features.',
    results: 'The plant has achieved consistent production of high-quality chili powder with excellent color retention and flavor profile. The improved efficiency has allowed the client to expand their export markets and increase production volume.',
    images: [
      'https://images.unsplash.com/photo-1616263291831-dedfb09c5739?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  'conveyor-automation': {
    name: 'Conveyor Roller Automation',
    client: 'Internal Project',
    year: '2025 (ongoing)',
    location: 'R&D Facility, India',
    description: 'In-house research and development project focused on creating advanced automation systems for industrial conveyor applications.',
    challenge: 'Our goal is to develop a next-generation conveyor system with intelligent material handling capabilities, reduced energy consumption, and enhanced reliability for industrial applications.',
    solution: 'The project involves designing smart rollers with embedded sensors, developing new control algorithms, and creating an IoT-enabled monitoring system for predictive maintenance.',
    results: 'The prototype system has shown promising results with a 30% reduction in energy usage compared to conventional systems. We anticipate completing the research phase and moving to commercial implementation by late 2025.',
    images: [
      'https://images.unsplash.com/photo-1602476750391-7d54a8560b7b?q=80&w=1471&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1470&auto=format&fit=crop'
    ]
  }
};

// Store form data in localStorage
const localStoragePrefix = 'srengworks_';
const formSubmissions = {
  contact: JSON.parse(localStorage.getItem(`${localStoragePrefix}contact`) || '[]'),
  appointment: JSON.parse(localStorage.getItem(`${localStoragePrefix}appointment`) || '[]'),
  brochure: JSON.parse(localStorage.getItem(`${localStoragePrefix}brochure`) || '[]')
};

// Helper functions
function handleInViewAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementPosition < windowHeight - elementVisible) {
      element.classList.add('in-view');
    }
  });
}

function openAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  if (modal) {
    modal.classList.add('open');
  }
}

function openBrochureModal() {
  const modal = document.getElementById('brochure-modal');
  if (modal) {
    modal.classList.add('open');
  }
}

function getStarsHTML(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  let starsHTML = '';
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="star full" data-lucide="star"></i>';
  }
  
  // Add half star if needed
  if (halfStar) {
    starsHTML += '<i class="star half" data-lucide="star-half"></i>';
  }
  
  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="star empty" data-lucide="star"></i>';
  }
  
  return starsHTML;
}

function showToast(title, message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  const toastTitle = document.getElementById('toast-title');
  const toastDescription = document.getElementById('toast-description');
  const toastIcon = toast.querySelector('.toast-icon i');
  
  toastTitle.textContent = title;
  toastDescription.textContent = message;
  
  // Set icon based on type
  if (type === 'success') {
    toastIcon.setAttribute('data-lucide', 'check-circle');
  } else if (type === 'error') {
    toastIcon.setAttribute('data-lucide', 'alert-circle');
  } else if (type === 'info') {
    toastIcon.setAttribute('data-lucide', 'info');
  }
  
  // Re-initialize lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Show toast
  toast.classList.add('show');
  
  // Hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
  
  // Close toast when clicking the close button
  const toastClose = document.getElementById('toast-close');
  if (toastClose) {
    toastClose.addEventListener('click', () => {
      toast.classList.remove('show');
    });
  }
}

function validateForm(form, rules) {
  let isValid = true;
  const errors = {};
  
  // Reset previous error messages
  form.querySelectorAll('.error-message').forEach(element => {
    element.textContent = '';
    element.classList.remove('show');
  });
  
  // Validate each field
  Object.entries(rules).forEach(([fieldName, rule]) => {
    const field = form.elements[fieldName];
    
    if (!field) return;
    
    const value = field.value.trim();
    
    // Check required fields
    if (rule.required && value === '') {
      errors[fieldName] = `${rule.label} is required`;
      isValid = false;
    }
    
    // Check email format
    if (rule.type === 'email' && value !== '' && !validateEmail(value)) {
      errors[fieldName] = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Check minimum length
    if (rule.minLength && value.length < rule.minLength) {
      errors[fieldName] = `${rule.label} must be at least ${rule.minLength} characters`;
      isValid = false;
    }
    
    // Check phone format (simple validation)
    if (rule.type === 'phone' && value !== '' && !validatePhone(value)) {
      errors[fieldName] = 'Please enter a valid phone number';
      isValid = false;
    }
  });
  
  // Display error messages
  Object.entries(errors).forEach(([fieldName, message]) => {
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
  });
  
  return isValid;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  // Simple validation - at least 10 digits
  const re = /^\+?[0-9\s\-()]{10,}$/;
  return re.test(String(phone));
}

// Form submission handlers
function handleContactForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  
  const rules = {
    name: { required: true, label: 'Full Name', minLength: 3 },
    email: { required: true, label: 'Email Address', type: 'email' },
    phone: { required: true, label: 'Phone Number', type: 'phone' },
    subject: { required: true, label: 'Subject' },
    message: { required: true, label: 'Message', minLength: 10 }
  };
  
  if (validateForm(form, rules)) {
    // Add timestamp
    formValues.submitted_at = new Date().toISOString();
    
    // Store in local storage
    formSubmissions.contact.push(formValues);
    localStorage.setItem(`${localStoragePrefix}contact`, JSON.stringify(formSubmissions.contact));
    
    // Show success message
    showToast('Message Sent', 'Your message has been sent successfully! We will get back to you soon.', 'success');
    
    // Reset form
    form.reset();
  }
}

function handleAppointmentForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  
  const rules = {
    name: { required: true, label: 'Full Name', minLength: 3 },
    email: { required: true, label: 'Email Address', type: 'email' },
    phone: { required: true, label: 'Phone Number', type: 'phone' },
    date: { required: true, label: 'Preferred Date' },
    time: { required: true, label: 'Preferred Time' },
    purpose: { required: true, label: 'Purpose of Meeting' }
  };
  
  if (validateForm(form, rules)) {
    // Add timestamp and default status
    formValues.requested_at = new Date().toISOString();
    formValues.status = 'pending';
    
    // Store in local storage
    formSubmissions.appointment.push(formValues);
    localStorage.setItem(`${localStoragePrefix}appointment`, JSON.stringify(formSubmissions.appointment));
    
    // Show success message
    showToast('Appointment Scheduled', 'Your appointment request has been received. We will confirm the details soon!', 'success');
    
    // Close modal and reset form
    const modal = document.getElementById('appointment-modal');
    if (modal) {
      modal.classList.remove('open');
    }
    form.reset();
  }
}

function handleBrochureForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  
  // Convert checkbox value to boolean
  formValues.subscribe = formValues.subscribe === 'on';
  
  const rules = {
    name: { required: true, label: 'Full Name', minLength: 3 },
    email: { required: true, label: 'Email Address', type: 'email' }
  };
  
  if (validateForm(form, rules)) {
    // Add timestamp
    formValues.requested_at = new Date().toISOString();
    
    // Store in local storage
    formSubmissions.brochure.push(formValues);
    localStorage.setItem(`${localStoragePrefix}brochure`, JSON.stringify(formSubmissions.brochure));
    
    // Show success message
    showToast('Thank You!', 'The brochure download will begin shortly.', 'success');
    
    // Simulate download start
    setTimeout(() => {
      // In a real app, this would be a real download link or file
      alert('In a real implementation, the brochure would download here. Since this is a demo, we are simulating the download.');
    }, 1000);
    
    // Close modal and reset form
    const modal = document.getElementById('brochure-modal');
    if (modal) {
      modal.classList.remove('open');
    }
    form.reset();
  }
}

function initializeProductModals() {
  const productButtons = document.querySelectorAll('.view-product-btn');
  const productModal = document.getElementById('product-modal');
  
  if (!productModal) return;
  
  productButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      if (!productCard) return;
      
      const productId = productCard.dataset.product;
      const product = productsData[productId];
      
      if (product) {
        const productModalTitle = document.getElementById('product-modal-title');
        const productModalContent = document.getElementById('product-modal-content');
        
        if (!productModalTitle || !productModalContent) return;
        
        productModalTitle.textContent = product.name;
        
        // Create product details content
        const productContent = `
          <div class="modal-product-details">
            <div class="modal-product-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
              <p class="modal-product-description">${product.description}</p>
              
              <div class="modal-product-rating">
                <div class="rating">
                  <span class="stars">${getStarsHTML(product.rating)}</span>
                  <span>(${product.reviews} reviews)</span>
                </div>
              </div>
              
              <div class="modal-product-specs">
                <h4>Key Specifications</h4>
                <ul class="specs-list">
                  ${product.specifications.map(spec => `
                    <li>
                      <strong>${spec.name}:</strong> ${spec.value}
                    </li>
                  `).join('')}
                </ul>
              </div>
              
              <div class="modal-product-features">
                <h4>Features</h4>
                <ul class="features-list">
                  ${product.features.map(feature => `
                    <li>${feature}</li>
                  `).join('')}
                </ul>
              </div>
              
              <div class="modal-product-actions">
                <button id="request-quote-btn" class="btn btn-primary">Request Quote</button>
                <button id="product-appointment-btn" class="btn btn-secondary">Schedule Consultation</button>
              </div>
            </div>
          </div>
        `;
        
        productModalContent.innerHTML = productContent;
        
        // Add event listeners to buttons inside the modal
        const requestQuoteBtn = productModalContent.querySelector('#request-quote-btn');
        const productAppointmentBtn = productModalContent.querySelector('#product-appointment-btn');
        
        if (requestQuoteBtn) {
          requestQuoteBtn.addEventListener('click', () => {
            productModal.classList.remove('open');
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
              contactForm.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
        
        if (productAppointmentBtn) {
          productAppointmentBtn.addEventListener('click', () => {
            productModal.classList.remove('open');
            openAppointmentModal();
          });
        }
        
        productModal.classList.add('open');
        
        // Re-initialize Lucide icons if available
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });
  });
}

function initializeProjectModals() {
  const projectButtons = document.querySelectorAll('.view-project-btn');
  const projectModal = document.getElementById('project-modal');
  
  if (!projectModal) return;
  
  projectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectCard = button.closest('.project-card');
      if (!projectCard) return;
      
      const projectId = projectCard.dataset.project;
      const project = projectsData[projectId];
      
      if (project) {
        const projectModalTitle = document.getElementById('project-modal-title');
        const projectModalContent = document.getElementById('project-modal-content');
        
        if (!projectModalTitle || !projectModalContent) return;
        
        projectModalTitle.textContent = project.name;
        
        // Create project details content
        const projectContent = `
          <div class="modal-project-details">
            <div class="modal-project-images">
              <div class="project-image-slider">
                ${project.images.map((image, index) => `
                  <div class="project-image-slide ${index === 0 ? 'active' : ''}">
                    <img src="${image}" alt="${project.name} - Image ${index + 1}">
                  </div>
                `).join('')}
              </div>
              <div class="project-image-dots">
                ${project.images.map((_, index) => `
                  <span class="project-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                `).join('')}
              </div>
            </div>
            
            <div class="modal-project-info">
              <div class="project-meta-details">
                <span><strong>Client:</strong> ${project.client}</span>
                <span><strong>Year:</strong> ${project.year}</span>
                <span><strong>Location:</strong> ${project.location}</span>
              </div>
              
              <div class="project-section">
                <h4>Project Overview</h4>
                <p>${project.description}</p>
              </div>
              
              <div class="project-section">
                <h4>Challenge</h4>
                <p>${project.challenge}</p>
              </div>
              
              <div class="project-section">
                <h4>Solution</h4>
                <p>${project.solution}</p>
              </div>
              
              <div class="project-section">
                <h4>Results</h4>
                <p>${project.results}</p>
              </div>
              
              <div class="modal-project-actions">
                <button id="similar-projects-btn" class="btn btn-secondary">Similar Projects</button>
                <button id="project-inquiry-btn" class="btn btn-primary">Inquire About This Solution</button>
              </div>
            </div>
          </div>
        `;
        
        projectModalContent.innerHTML = projectContent;
        
        // Add event listeners to buttons inside the modal
        const similarProjectsBtn = projectModalContent.querySelector('#similar-projects-btn');
        const projectInquiryBtn = projectModalContent.querySelector('#project-inquiry-btn');
        
        if (similarProjectsBtn) {
          similarProjectsBtn.addEventListener('click', () => {
            projectModal.classList.remove('open');
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
        
        if (projectInquiryBtn) {
          projectInquiryBtn.addEventListener('click', () => {
            projectModal.classList.remove('open');
            openAppointmentModal();
          });
        }
        
        // Project image slider
        const projectDots = projectModalContent.querySelectorAll('.project-dot');
        const projectSlides = projectModalContent.querySelectorAll('.project-image-slide');
        
        projectDots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            projectDots.forEach(d => d.classList.remove('active'));
            projectSlides.forEach(s => s.classList.remove('active'));
            dot.classList.add('active');
            projectSlides[index].classList.add('active');
          });
        });
        
        projectModal.classList.add('open');
      }
    });
  });
}

function initializeModals() {
  const modals = document.querySelectorAll('.modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');

  // Close modal when clicking the close button
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modals.forEach(modal => {
        modal.classList.remove('open');
      });
    });
  });

  // Close modal when clicking outside
  modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
}

function initializeTestimonials() {
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const testimonials = document.querySelectorAll('.testimonial-card');
  
  if (dots.length === 0 || testimonials.length === 0) return;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Remove active class from all dots and testimonials
      dots.forEach(d => d.classList.remove('active'));
      testimonials.forEach(t => t.classList.remove('active'));

      // Add active class to current dot and testimonial
      dot.classList.add('active');
      testimonials[index].classList.add('active');
    });
  });

  // Auto rotate testimonials
  let currentTestimonial = 0;
  const autoRotateTestimonials = () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    dots.forEach(d => d.classList.remove('active'));
    testimonials.forEach(t => t.classList.remove('active'));
    dots[currentTestimonial].classList.add('active');
    testimonials[currentTestimonial].classList.add('active');
  };

  // Set interval for testimonial rotation (7 seconds)
  const testimonialInterval = setInterval(autoRotateTestimonials, 7000);

  // Clear interval when user interacts with dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(testimonialInterval);
    });
  });
}
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavContainer = document.querySelector('.mobile-nav-container');

  if (!mobileNav) return;

  // Open mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
  }

  // Close mobile menu
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }

  // Close menu when clicking outside of the navigation container
  if (mobileNav && mobileNavContainer) {
    mobileNav.addEventListener('click', (event) => {
      if (!mobileNavContainer.contains(event.target) || event.target.tagName === 'A') {
        mobileNav.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
  }

  // Handle mobile nav links
  const mobileNavLinks = mobileNav.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = ''; // Restore scrolling
    });
  });
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize sticky header
function initializeStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  
  const sticky = header.offsetTop;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

// Initialize the product section
function initializeProductsSection() {
  const productsContainer = document.getElementById('products-container');
  if (!productsContainer) return;
  
  let productsHTML = '';
  
  Object.entries(productsData).forEach(([id, product]) => {
    productsHTML += `
      <div class="product-card animate-on-scroll" data-product="${id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-content">
          <h3 class="product-title">${product.name}</h3>
          <div class="rating">
            <span class="stars">${getStarsHTML(product.rating)}</span>
            <span>(${product.reviews} reviews)</span>
          </div>
          <p class="product-description">${product.description.substring(0, 100)}...</p>
          <div class="product-details">
            <div class="product-spec">
              <i data-lucide="zap"></i>
              <span>${product.specifications.find(spec => spec.name === 'Capacity')?.value}</span>
            </div>
            <div class="product-spec">
              <i data-lucide="cpu"></i>
              <span>${product.specifications.find(spec => spec.name === 'Motor Power' || spec.name === 'Power')?.value}</span>
            </div>
          </div>
          <button class="btn btn-secondary view-product-btn">View Details</button>
        </div>
      </div>
    `;
  });
  
  productsContainer.innerHTML = productsHTML;
  
  // Re-initialize Lucide icons if available
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize the projects section
function initializeProjectsSection() {
  const projectsContainer = document.getElementById('projects-container');
  if (!projectsContainer) return;
  
  let projectsHTML = '';
  
  Object.entries(projectsData).forEach(([id, project]) => {
    projectsHTML += `
      <div class="project-card animate-on-scroll" data-project="${id}">
        <div class="project-image">
          <img src="${project.images[0]}" alt="${project.name}">
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.name}</h3>
          <div class="project-meta">
            <span class="client"><i data-lucide="building"></i> ${project.client}</span>
            <span class="location"><i data-lucide="map-pin"></i> ${project.location}</span>
          </div>
          <p class="project-description">${project.description.substring(0, 120)}...</p>
          <button class="btn btn-secondary view-project-btn">View Case Study</button>
        </div>
      </div>
    `;
  });
  
  projectsContainer.innerHTML = projectsHTML;
  
  // Re-initialize Lucide icons if available
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize the counter animation
function initializeCounters() {
  const counterElements = document.querySelectorAll('.counter');
  
  counterElements.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    
    let startTime = null;
    
    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentValue = Math.floor(percentage * target);
      counter.textContent = currentValue.toLocaleString();
      
      if (percentage < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }
    
    // Use Intersection Observer to start animation when counter is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initializeMobileMenu();
  initializeSmoothScrolling();
  initializeStickyHeader();
  initializeProductsSection();
  initializeProjectsSection();
  initializeProductModals();
  initializeProjectModals();
  initializeModals();
  initializeTestimonials();
  initializeCounters();
  
  // Setup animation on scroll
  window.addEventListener('scroll', handleInViewAnimation);
  // Initial check for elements in view
  handleInViewAnimation();
  
  // Setup form submission handlers
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
  
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', handleAppointmentForm);
  }
  
  const brochureForm = document.getElementById('brochure-form');
  if (brochureForm) {
    brochureForm.addEventListener('submit', handleBrochureForm);
  }
  
  // Setup buttons for modals
  const appointmentButtons = document.querySelectorAll('.appointment-btn');
  appointmentButtons.forEach(button => {
    button.addEventListener('click', openAppointmentModal);
  });
  
  const brochureButtons = document.querySelectorAll('.brochure-btn');
  brochureButtons.forEach(button => {
    button.addEventListener('click', openBrochureModal);
  });
});