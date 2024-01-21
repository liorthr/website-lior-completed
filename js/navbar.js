document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarMenu = document.querySelector('#navbarNav');

    // Function to toggle classes
    function toggleNavbar() {
        navbarToggler.classList.toggle('collapsed');
        navbarMenu.classList.toggle('show');
    }

    // Event listener for navbar toggler
    navbarToggler.addEventListener('click', toggleNavbar);

    // Function to handle window resize
    function handleResize() {
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        // Assuming 992px is the breakpoint for the navbar toggler
        if (viewportWidth >= 992) {
            // Remove 'show' class if viewport is wider than 992px
            if(navbarMenu.classList.contains('show')) {
                navbarMenu.classList.remove('show');
                navbarToggler.classList.add('collapsed');
            }
            // Add 'items' class when viewport is equal to or wider than 992px
            navbarMenu.classList.add('items-desktop');
            navbarMenu.classList.remove('items-mobile')
        } else {
            // Remove 'items' class when viewport is less than 992px
            navbarMenu.classList.remove('items-desktop');
            navbarMenu.classList.add('items-mobile')

        }
    }

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the correct state when the page loads
    handleResize();
});
