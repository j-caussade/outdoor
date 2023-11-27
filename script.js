document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile_menu');
    const navList = document.querySelector('.nav_list');
    mobileMenuButton.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  });