// Simple JS for smooth scrolling and form handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert (for demo)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Matur nuwun! Pesenan panjenengan sampun dipunkintun.');
});