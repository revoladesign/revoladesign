<script>
  function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
  }

  // ربط الضغط على الأيقونة بفتح القائمة
  document.querySelector('.menu-icon').addEventListener('click', openSidebar);
</script>