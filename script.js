document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const toggleButton = document.getElementById('nav-toggle');

  if (toggleButton) {
      toggleButton.addEventListener('click', () => {
          const navLinks = navbar.querySelector('nav ul');
          navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      });

      function adjustNavbar() {
          const navLinks = navbar.querySelector('nav ul');
          if (window.innerWidth <= 768) {
              navLinks.style.display = 'none';
              toggleButton.style.display = 'block';
          } else {
              navLinks.style.display = 'flex';
              toggleButton.style.display = 'none';
          }
      }

      adjustNavbar();
      window.addEventListener('resize', adjustNavbar);
  }
});
const words = ["aspiring-data scientist", "problem-solver", "passionate-coder", "enthusiast", "fast-learner"];
let currentIndex = 0;
let letterIndex = 0;

function revealWord() {
  const changingWordElement = document.getElementById('changing-word');
  changingWordElement.textContent = words[currentIndex].substring(0, letterIndex);
  letterIndex++;

  if (letterIndex > words[currentIndex].length) {
    // Move to the next word after the current word is fully displayed
    currentIndex = (currentIndex + 1) % words.length;
    letterIndex = 0;

    // Pause before starting to display the next word
    setTimeout(revealWord, 1000); // Adjust the pause duration if needed
  } else {
    // Continue revealing the current word letter by letter
    setTimeout(revealWord, 100); // Adjust the speed of revealing letters if needed
  }
}

// Initial call to start revealing words
revealWord();

window.addEventListener('resize', adjustNavbar);
document.addEventListener('DOMContentLoaded', adjustNavbar);

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
  });
}

// Add event listener to the "Read More" button
document.getElementById('read-more-btn').addEventListener('click', function() {
  scrollToSection('about');
});

// Add event listener to the "Contact Me" button
document.getElementById('contact-me-btn').addEventListener('click', function() {
  scrollToSection('contact');
});

//about-section animation
document.addEventListener('DOMContentLoaded', function() {
  var h2 = document.querySelector('.about-me');
  var p = document.querySelector('.intro-me');

  h2.style.animationDelay = '0s'; // Delay for h2 animation
  p.style.animationDelay = '0.5s'; // Delay for p animation
});

//landing page animation
document.addEventListener('DOMContentLoaded', function() {
  var h1 = document.querySelector('.intro h1');
  var dynamicText = document.querySelector('.dynamic-text');
  var linkedinLogo = document.querySelector('.linkedin-logo');
  var readMoreBtn = document.getElementById('read-more-btn');
  var contactMeBtn = document.getElementById('contact-me-btn');

  h1.style.animationDelay = '0.5s';
  dynamicText.style.animationDelay = '1s';
  linkedinLogo.style.animationDelay = '1.5s';
  readMoreBtn.style.animationDelay = '2s';
  contactMeBtn.style.animationDelay = '2.5s';

  h1.style.opacity = '1'; // Trigger the animation
  dynamicText.style.opacity = '1'; // Trigger the animation
  linkedinLogo.style.opacity = '1'; // Trigger the animation
  readMoreBtn.style.opacity = '1'; // Trigger the animation
  contactMeBtn.style.opacity = '1'; // Trigger the animation
});



