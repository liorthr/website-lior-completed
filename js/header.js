document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const logo = document.querySelector('.navbar-brand');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(lnk => lnk.classList.remove('active-nav-link'));
            this.classList.add('active-nav-link');
        });
    });

    logo.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active-nav-link'));
    });
});
