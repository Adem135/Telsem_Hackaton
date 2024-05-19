document.addEventListener("DOMContentLoaded", function () {
    const countdown = () => {
        const endDate = new Date("July 12, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "The hackathon has started!";
        }
    };

    countdown();
    const timerInterval = setInterval(countdown, 1000);
});
