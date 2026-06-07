document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    document.documentElement.style.scrollBehavior = "smooth";
  });
});
