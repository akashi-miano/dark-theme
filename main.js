const body = document.querySelector("body");
const toggleIcon = document.querySelector(".fa-moon");

toggleIcon.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme"))
    toggleIcon.classList.replace("fa-moon", "fa-sun");
  else toggleIcon.classList.replace("fa-sun", "fa-moon");
});
