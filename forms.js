// HubSpot Integration for SREW
(function(d,s,i,r) {
  if (d.getElementById(i)){return;}
  var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
  n.id=i;n.src='//js.hs-scripts.com/242585946.js';
  e.parentNode.insertBefore(n, e);
})(document,"script","hs-script");

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const appointmentForm = document.getElementById('appointment-form');
  const brochureForm = document.getElementById('brochure-form');
  const herobrochureBtn = document.getElementById('hero-brochure-btn');

  // Show brochure modal when brochure download button is clicked
  if (herobrochureBtn) {
    herobrochureBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('brochure-modal').style.display = 'flex';
    });
  }

  // Close modals when clicking on close button or outside the modal content
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.modal');
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
    });
  });

  window.addEventListener('click', function(event) {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Open appointment modal when appointment buttons are clicked
  const appointmentButtons = [
    document.getElementById('appointment-btn'),
    document.getElementById('mobile-appointment-btn'),
    document.getElementById('hero-appointment-btn'),
    document.getElementById('appointment-sticky'),
    document.getElementById('cta-appointment')
  ];

  appointmentButtons.forEach(button => {
    if (button) {
      button.addEventListener('click', function() {
        document.getElementById('appointment-modal').style.display = 'flex';
      });
    }
  });

  // Setup forms
  if (contactForm) {
    setupForm(contactForm, 'contact');
  }
  if (appointmentForm) {
    setupForm(appointmentForm, 'appointment');
  }
  if (brochureForm) {
    setupForm(brochureForm, 'brochure');
  }

  function setupForm(formElement, formType) {
    // Create a thank you message container
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'thank-you-message';
    thankYouMessage.style.display = 'none';
    thankYouMessage.style.marginTop = '10px';
    thankYouMessage.style.color = 'green';
    formElement.appendChild(thankYouMessage);

    formElement.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(formElement);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // HubSpot requires firstname and lastname fields
      // Split the name field if it exists
      if (data.name && !data.firstname && !data.lastname) {
        const nameParts = data.name.split(' ');
        data.firstname = nameParts[0] || '';
        data.lastname = (nameParts.length > 1) ? nameParts.slice(1).join(' ') : '';
      }

      // Store in local storage for backup
      const localStorageKey = `srengworks_${formType}`;
      const existingData = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
      existingData.push({
        ...data,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem(localStorageKey, JSON.stringify(existingData));

      // HubSpot API endpoint
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/242585946/84451156-105b-410d-b7a1-eb83161b866e`;

      // Create fields array for HubSpot with required firstname and lastname
      const hubspotFields = [];
      
      // Add all form fields to HubSpot data
      Object.keys(data).forEach(key => {
        if (key !== 'name' || (key === 'name' && !data.firstname)) {
          hubspotFields.push({
            name: key,
            value: data[key]
          });
        }
      });
      
      // Ensure firstname and lastname are included
      if (data.firstname) {
        hubspotFields.push({
          name: 'firstname',
          value: data.firstname
        });
      }
      
      if (data.lastname) {
        hubspotFields.push({
          name: 'lastname',
          value: data.lastname
        });
      }

      const hubspotData = {
        fields: hubspotFields,
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hubspotData)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        formElement.reset();
        thankYouMessage.style.display = 'block';
        
        if (formType === 'brochure') {
          thankYouMessage.innerText = 'Thank you! The brochure will open in a new tab shortly. ✅';
          
          // Delay the opening by a few seconds (e.g., 2 seconds)
          setTimeout(() => {
            // Open the brochure in a new tab
            window.open('brochure.pdf', '_blank');
            
            // Hide the modal after opening the brochure in new tab
            setTimeout(() => {
              document.getElementById('brochure-modal').style.display = 'none';
            }, 1000);
          }, 1000); // 2000ms delay before opening in new tab
        } else {
          thankYouMessage.innerText = 'Thank you! We have received your submission. ✅';
          
          // Hide the message after a delay for non-brochure forms
          setTimeout(() => {
            thankYouMessage.style.display = 'none';
            
            // Hide the modal if it's an appointment form
            if (formType === 'appointment') {
              document.getElementById('appointment-modal').style.display = 'none';
            }
          }, 3000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        thankYouMessage.style.display = 'block';
        thankYouMessage.style.color = 'red';
        thankYouMessage.innerText = 'There was an error submitting your form. Please try again later.';

        // Hide error message after a delay
        setTimeout(() => {
          thankYouMessage.style.display = 'none';
        }, 3000);
      });
    });
  }
});
