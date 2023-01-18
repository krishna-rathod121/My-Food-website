// Add interactivity to the navigation menu
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const sectionId = event.
