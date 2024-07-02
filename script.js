function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Sticky Nav Bar
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// Highlight active section link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }

  // Highlight active section
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let currentSection = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = rect.height;
    const scrollPos = window.scrollY + window.innerHeight / 2;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
  

function copyToClipboard(text) {
  if (!isMobileDevice()) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied to clipboard: " + text);
  }
}

/* VIDEO PLAYER */

function openModal() {
  var modal = document.getElementById('videoModal');
  modal.style.display = 'block';
  var video = document.getElementById('demoVideo');
  video.play();  // Start playing the video when modal opens

  // Disable background scroll
  document.body.classList.add('modal-open');
}

function closeModal() {
  var modal = document.getElementById('videoModal');
  modal.style.display = 'none';
  var video = document.getElementById('demoVideo');
  video.pause();  // Pause the video when modal closes
  video.currentTime = 0;  // Reset video to start

  // Enable background scroll
  document.body.classList.remove('modal-open');
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  var modal = document.getElementById('videoModal');
  if (event.target == modal) {
      modal.style.display = 'none';
      var video = document.getElementById('demoVideo');
      video.pause();
      video.currentTime = 0;

      // Enable background scroll
      document.body.classList.remove('modal-open');
  }
}
