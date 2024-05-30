function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let seconds = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(showTime, 1000)