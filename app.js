// Initialize Element
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".close-btn");
const mainSection = document.querySelector(".main-section");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  mainSection.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  console.log(sidebar.classList);
  sidebar.classList.toggle("active");
  mainSection.classList.toggle("active");
});
