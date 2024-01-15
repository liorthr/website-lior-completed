document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.qa-card').forEach(card => {
        const toggle = card.querySelector('.qa-toggle');

        toggle.addEventListener('click', function() {
            const answer = card.querySelector('.qa-answer');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                toggle.textContent = '+';
            } else {
                answer.style.display = 'block';
                toggle.textContent = '-';
            }
        });
    });
});
