document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');

    // Add an event listener for the 'submit' event on the form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission action

        // Gather the form data
        var formData = new FormData(form);
        console.log(formData);

        // Perform the fetch request to the Google Apps Script Web App URL
        fetch('https://script.google.com/macros/s/AKfycbzLrr2wzXeuQQyYH1VOXw4st2jlOHxUEFVTfiwIAnUrD23gwBmn86lcg7Cf1XdObKc/exec', {
            method: 'POST',
            body: formData,
    })
    .then(() => {
        form.reset();        
    }).catch(error => {
        console.error('Error:', error);
        // Handle any errors that occur during fetch
    });
});
});