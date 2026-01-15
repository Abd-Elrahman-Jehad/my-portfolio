 // ==========Typewriter Effect ==========
const jobTitles = [
  "Front-End Developer",
  "programmer",
  "Problem Solver"
];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const current = jobTitles[i];
  const output = document.getElementById("job-title-output");

  output.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % jobTitles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

  // ==========Scroll Progress ==========
function handleScrollProgress() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
}
  // ========== Dark mode==========
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
   document.body.classList.toggle("dark-mode");
   themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
  });
  
  // ========== تفعيل الرابط حسب القسم ==========
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".nav-link");
  
//   window.addEventListener("scroll", () => { 
//  let current = "";
  
//    sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
  
//     if (window.pageYOffset >= sectionTop - 150 && window.pageYOffset < sectionTop + sectionHeight - 150) {
//    current = section.getAttribute("id");
//    }
//   });
  
//    navLinks.forEach(link => {
//      link.classList.remove("active");
//      if (link.getAttribute("href").includes(current)) {
//      link.classList.add("active");
//    }
//    });
//   });
  
  // ========== scrollToTopBtn ==========
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
   window.addEventListener("scroll", () => {
   if (window.scrollY > 300) {
  scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
   });
  
  scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
   });
  }
  
  // ////////
  document.addEventListener("DOMContentLoaded", () => {
    
      typeEffect();
      const aboutMeSection = document.getElementById("about"); 
      if (aboutMeSection) {
          aboutMeSection.classList.add('hidden-for-animation');
      }
  
      // Update the current year in the footer
      document.getElementById("currentYear").textContent = new Date().getFullYear();
  });


  // Reveal elements on scroll (fade-in / slide-in)
const revealElements = document.querySelectorAll(".fade-in, .slide-in");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Measurement bars when the page loads

document.addEventListener("DOMContentLoaded", () => {
  
  const fills = document.querySelectorAll(".fill");
  
  fills.forEach(fill => {
    const width = fill.getAttribute("data-width");
    fill.style.width = width;
  });
});



//====== Contact Us ======

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const charCount = document.getElementById("char-count");
const confirmation = document.getElementById("confirmation-message");

// Regex check
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Real-time validation functions
function validateName() {
  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required.";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validateMessage() {
  if (!messageInput.value.trim()) {
    messageError.textContent = "Message cannot be empty.";
    return false;
  } else {
    messageError.textContent = "";
    return true;
  }
}

// Live Character Counter
messageInput.addEventListener("input", () => {
  charCount.textContent = `${messageInput.value.length}/500`;
  saveDraft();
});

// Local Storage
function saveDraft() {
  const draft = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem("contactDraft", JSON.stringify(draft));
}

function loadDraft() {
  const saved = localStorage.getItem("contactDraft");
  if (saved) {
    const draft = JSON.parse(saved);
    nameInput.value = draft.name || "";
    emailInput.value = draft.email || "";
    messageInput.value = draft.message || "";
    charCount.textContent = `${messageInput.value.length}/500`;
  }
}

// Load draft on page load
document.addEventListener("DOMContentLoaded", () => {
  loadDraft();
});

// Real-time Validation on input
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

// Submit handler
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const validName = validateName();
  const validEmail = validateEmail();
  const validMessage = validateMessage();

  if (validName && validEmail && validMessage) {
    confirmation.textContent = "✅ Message sent successfully!";
    localStorage.removeItem("contactDraft");
    document.getElementById("contact-form").reset();
    charCount.textContent = "0/500";
  } else {
    confirmation.textContent = "";
  }
});
  
// ===== footer ======
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});





