function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let seconds = today.getSeconds();
    let totalSeconds = today.getHours() * 3600 + today.getMinutes() * 60 + seconds;
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('time1').style.transform = `rotate(${totalSeconds * 6}deg)`;
}
setInterval(showTime, 1000);