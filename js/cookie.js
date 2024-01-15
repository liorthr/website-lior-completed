document.addEventListener('DOMContentLoaded', function() {
    var cookieBanner = document.querySelector('.cookie-consent-banner');
    var storedData = localStorage.getItem('cookieConsentData');
    var consentData = storedData ? JSON.parse(storedData) : null;

    // Function to check if the consent is still valid
    function isConsentExpired(consentData) {
        var now = new Date().getTime();
        var consentTime = consentData ? new Date(consentData.time).getTime() : 0;
        var fiveHours = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
        return now - consentTime > fiveHours;
    }

    // If consent not given or expired, display the banner
    if (!consentData || consentData.status === 'declined' || isConsentExpired(consentData)) {
        cookieBanner.style.display = 'block';
    }

    // Function to hide the banner and save the user's choice with the current time
    function handleConsent(consent) {
        var consentData = {
            status: consent,
            time: new Date().toISOString()
        };
        localStorage.setItem('cookieConsentData', JSON.stringify(consentData));
        cookieBanner.style.display = 'none';
    }

    // Event listener for "OK" button
    var acceptBtn = document.querySelector('.cookie-consent-banner__cta');
    acceptBtn.addEventListener('click', function() {
        handleConsent('accepted');
    });

    // Event listener for "Decline" button
    var declineBtn = document.querySelector('.cookie-consent-banner__cta--secondary');
    declineBtn.addEventListener('click', function() {
        handleConsent('declined');
    });
});
