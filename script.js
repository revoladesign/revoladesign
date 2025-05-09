document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById("signup-popup").style.display = "flex";
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById("signup-popup").style.display = "none";
});