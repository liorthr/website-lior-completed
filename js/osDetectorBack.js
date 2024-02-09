document.addEventListener('DOMContentLoaded', function () {
    function setOSDependentBackgroundColor() {
        var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

        // Select the specific div by its class
        var targetDiv = document.querySelector('.container-fluid.steps-working');

        if (isMac && targetDiv) {
            // If the OS is MacOS and the target div is found, add the class to change the background color
            targetDiv.classList.add("macos-background");
        }
    }

    // Call the function to set the background color based on the OS
    setOSDependentBackgroundColor();
});
