document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the class from all nav links
            navLinks.forEach(lnk => lnk.classList.remove('active-nav-link'));

            // Add the class to the clicked nav link
            this.classList.add('active-nav-link');
        });
    });
});
