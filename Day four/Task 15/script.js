const mobileMenuToggle = document.getElementById('mobile-menu');
    const navigation = document.querySelector('.navigation');
    
    mobileMenuToggle.addEventListener('click', function () {
      navigation.classList.toggle('show');
    });