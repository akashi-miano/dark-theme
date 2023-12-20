const body = document.querySelector("body");
const toggleIcon = document.querySelector(".fa-moon");
const btn = document.querySelector(".btn");
const links = document.querySelectorAll(".link");

toggleIcon.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    btn.classList.add("light");
    toggleIcon.classList.replace("fa-moon", "fa-sun");
    links.forEach((link) => {
      link.classList.add("light-links");
    });
  } else {
    toggleIcon.classList.replace("fa-sun", "fa-moon");
    btn.classList.remove("light");
    links.forEach((link) => {
      link.classList.remove("light-links");
    });
  }
});
