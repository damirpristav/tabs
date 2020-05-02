// Get tabs wrappers
const tabWrappers = document.querySelectorAll('[data-tabs]');

// Check if wrappers exist on page
if(tabWrappers.length > 0) {
  // Loop through wrappers
  tabWrappers.forEach(wrapper => {
    // Get nav elements and tabs
    const navElements = wrapper.querySelectorAll('[data-tabs-nav] [data-target]');
    const tabsContent = wrapper.querySelector('[data-tabs-content]');
    const tabs = tabsContent.querySelectorAll('[data-tab]');

    // Loop through nav elements
    navElements.forEach(navEl => {
      // Add click event type to navEl
      navEl.addEventListener('click', openTab.bind(navEl, tabs, tabsContent, navElements));
    });
  });
}

// Open tab
function openTab(tabs, tabsContent, navElements, e) {
  e.preventDefault();
  
  // Check if non active nav element is clicked
  if(!this.classList.contains('active')) {
    // Remove active class from other elements
    // Add active class to clicked element
    // Get target tab from data-target attribute
    // Get target tab element from target variable
    // Set display property on target tab element to block
    removeActiveClass(navElements);
    this.classList.add('active');
    closeActiveTab(tabs);
    const target = this.dataset.target;
    const tabToOpen = tabsContent.querySelector(`[data-tab="${target}"]`);
    tabToOpen.style.display = 'block'; 
  }
}

// Remove active class
function removeActiveClass(elements) {
  // Loop through each nav element and find the one with active class and remove active class from this element
  // Break from the loop if this element is found because only one element can have active class so we don't need to loop through other elements
  for(let i = 0; i < elements.length; i++) {
    if(elements[i].classList.contains('active')) {
      elements[i].classList.remove('active');
      break;
    }
  }
}

// Close active tab
function closeActiveTab(tabs) {
  // Loop through tabs and find the one that is not hidden(that has display property set to block) and hide it
  for(let i = 0; i < tabs.length; i++) {
    if(tabs[i].offsetParent !== null) {
      tabs[i].style.display = 'none';
      break;
    }
  }
}