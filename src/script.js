// Mobile menu toggle
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  
  // Toggle icons
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});





// Typing effect for dynamic title

const text = "Hi, I am Saikat Ghosh";
const typingSpeed = 80;
const eraseSpeed = 40;
const repeatTimes = 25;

let index = 0;
let count = 0;
let isDeleting = false;

const title = document.getElementById("dynamicTitle");

function typeLoop() {
  if (count >= repeatTimes) return;

  if (!isDeleting) {
    title.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000);
      return;
    }
  } else {
    title.textContent = text.slice(0, index);
    index--;

    if (index < 0) {
      isDeleting = false;
      count++;
    }
  }

  const speed = isDeleting ? eraseSpeed : typingSpeed;
  setTimeout(typeLoop, speed);
}

window.onload = typeLoop;




  // scroll to top button script start
 
  const scrollBtn = document.getElementById("scrollTopBtn");

  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

 
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  

  // scroll to top button script end  

  