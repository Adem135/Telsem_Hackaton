document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const countdownElement = document.getElementById("countdown-timer");
    const eventDate = new Date("June 7, 2024 10:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Event Started!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
