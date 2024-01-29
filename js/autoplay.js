document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('video-mock-up');

    var observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
                // When at least half of the video is visible
                if (!video.hasAttribute('autoplay')) {
                    video.setAttribute('autoplay', 'true'); // Set autoplay attribute
                    video.play(); // Start playback
                }
            } else {
                // When less than half of the video is visible
                if (video.hasAttribute('autoplay')) {
                    video.removeAttribute('autoplay'); // Remove autoplay attribute
                    video.pause(); // Pause playback
                }
            }
        });
    }, { threshold: 0.5 }); // This will trigger when 50% of the video is visible

    observer.observe(video);
});
``
