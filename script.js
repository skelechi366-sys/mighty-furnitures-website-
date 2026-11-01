// Toast welcome - professional
window.addEventListener("load", () => {
  const toast = document.getElementById("toast");
  setTimeout(() => toast.classList.add("show"), 800);
  setTimeout(() => toast.classList.remove("show"), 4000);
  console.log("Mighty Furniture loaded - Abuja");
});

// Mobile menu
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => nav.classList.toggle("active"));

// Close menu when link clicked
document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("active"));
});

// Button press animation
document.querySelectorAll(".btn, .btn2, .whatsapp").forEach(b => {
  b.addEventListener("click", () => {
    b.style.transform = "scale(0.96)";
    setTimeout(() => b.style.transform = "scale(1)", 150);
  });
});

// Scroll reveal for products
const cards = document.querySelectorAll(".product-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.style.opacity = "1";
  });
}, {threshold:0.2});

cards.forEach(c => {
  c.style.opacity = "0";
  c.style.transition = "0.6s";
  observer.observe(c);
});