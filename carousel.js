document.addEventListener('DOMContentLoaded', function() {
  // Client logo carousel functionality
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.client-logo-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  
  if (!track || !items.length || !prevBtn || !nextBtn) return;
  
  // Clone items for infinite scrolling effect
  const itemsToClone = 3;
  for (let i = 0; i < itemsToClone; i++) {
    const clone = items[i].cloneNode(true);
    track.appendChild(clone);
  }
  
  let position = 0;
  const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginLeft) + 
                   parseInt(getComputedStyle(items[0]).marginRight);
  const visibleItems = Math.floor(track.parentElement.offsetWidth / itemWidth);
  const maxPosition = (items.length - visibleItems) * itemWidth;
  
  // Auto scroll functionality
  let autoScrollInterval;
  
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (position >= maxPosition) {
        // Reset to start with no animation
        position = 0;
        track.style.transition = 'none';
        updatePosition();
        // Force reflow
        track.offsetHeight;
        // Restore animation
        track.style.transition = 'transform 0.5s ease';
      } else {
        position += itemWidth;
        updatePosition();
      }
    }, 3000);
  }
  
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  
  function updatePosition() {
    track.style.transform = `translateX(-${position}px)`;
  }
  
  // Event listeners for controls
  prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    position = Math.max(0, position - itemWidth);
    updatePosition();
    startAutoScroll();
  });
  
  nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    if (position >= maxPosition) {
      position = 0;
    } else {
      position += itemWidth;
    }
    updatePosition();
    startAutoScroll();
  });
  
  // Start auto-scrolling
  startAutoScroll();
  
  // Pause auto-scroll on hover
  track.parentElement.addEventListener('mouseenter', stopAutoScroll);
  track.parentElement.addEventListener('mouseleave', startAutoScroll);
  
  // Handle window resize
  window.addEventListener('resize', () => {
    const newItemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginLeft) + 
                        parseInt(getComputedStyle(items[0]).marginRight);
    const newVisibleItems = Math.floor(track.parentElement.offsetWidth / newItemWidth);
    const newMaxPosition = (items.length - newVisibleItems) * newItemWidth;
    
    // Adjust position if needed
    if (position > newMaxPosition) {
      position = newMaxPosition;
      updatePosition();
    }
  });
});