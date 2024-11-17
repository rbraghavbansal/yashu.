const targetDate = new Date("26 Nov 2024 00:00:00").getTime();
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        timerElement.textContent = "It's Yashika's Day!";
        timerElement.style.color = '#32cd32'; // Set to green when time is up
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Change the color dynamically based on time left
    const colorOptions = ['#ff6347', '#ffa500', '#00ff7f', '#1e90ff', '#9370db'];
    const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    timerElement.style.color = color;

    setTimeout(updateTimer, 1000);
}

updateTimer();
