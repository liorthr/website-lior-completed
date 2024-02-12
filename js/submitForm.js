document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var selectElement = document.querySelector('#contactForm select[name="status"]');
    var submitButton = form.querySelector('button[type="submit"]'); // Select the submit button

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission action

        submitButton.disabled = true; // Disable the submit button

        // Gather the form data
        var formData = new FormData(form);

        fetch('https://script.google.com/macros/s/AKfycbzLrr2wzXeuQQyYH1VOXw4st2jlOHxUEFVTfiwIAnUrD23gwBmn86lcg7Cf1XdObKc/exec', {
            method: 'POST',
            body: formData,
        })
        .then(() => {
            form.reset();        
            selectElement.style.color = '#757575'; // Reset select color to default
            submitButton.disabled = false; // Re-enable the submit button
        }).catch(error => {
            console.error('Error:', error);
            alert('Something went wrong, please try again later!');
            submitButton.disabled = false; // Re-enable the submit button even if there's an error
        });
    });

    // Change the color of the select element when a non-disabled option is selected
    selectElement.addEventListener('change', function() {
        if(this.value) { // Checks if a value is selected
            this.style.color = 'black'; // Change color to black if an option is selected
        } else {
            this.style.color = '#757575'; // Revert to the default color if the placeholder is selected again
        }
    });
});
