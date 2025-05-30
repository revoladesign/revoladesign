<script>
  function openMenu() {
    document.getElementById("menuOverlay").classList.add("active");
  }

  function closeMenu() {
    document.getElementById("menuOverlay").classList.remove("active");
  }

  document.querySelector('.menu-icon').addEventListener('click', openMenu);
</script> 