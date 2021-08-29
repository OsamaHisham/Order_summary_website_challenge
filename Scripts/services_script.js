const navToggle = () => {
  const navToggle = document.querySelector('.mobile-tablet-nav-bar');
  const navContent = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  

  
  navToggle.addEventListener('click', () => {

    // Toggling the list of links to appear when clicked
    navContent.classList.toggle('nav-toggle-active');

    // Animating the links
    navLinks.forEach( (link, index) => {
      if(link.style.animation) {
        link.style.animation = ''
      }
      else {
        link.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });

    // Changing the Toggle shape
    navToggle.classList.toggle('toggle');

  });

}

navToggle();

// Removing the navigation when link is clicked


const removeMobileNav = () => {
  const navToggle = document.querySelector('.mobile-tablet-nav-bar');
  const navContent = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const clickedNavLinks = document.querySelectorAll('.nav-links li a')

  // Adding an event listener on each individual link
  clickedNavLinks.forEach(item => {
    item.addEventListener('click', () => {

      if (navToggle && item) {
        // Toggling the whole list
        navContent.classList.toggle('nav-toggle-active');
        // Toggling the icon of the list
        navToggle.classList.toggle('toggle');
        // Toggling the animation style of each link
        navLinks.forEach(x => {
          x.style.animation = ''
        });

      }

      
      
    });

  });


}

removeMobileNav();
