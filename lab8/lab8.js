function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-RU');
    

    let locales = [
        { locale: 'en-US', name: 'США', timeZone: 'America/New_York' },
        { locale: 'en-GB', name: 'Финляндия', timeZone: 'Europe/Helsinki' },
        { locale: 'fr-FR', name: 'Франция', timeZone: 'Europe/Paris' },
        { locale: 'de-DE', name: 'Италия', timeZone: 'Europe/Rome' },
        { locale: 'ja-JP', name: 'Тайланд', timeZone: 'Asia/Bangkok' }
    ];

    let localDates = document.getElementById('local-dates');
    localDates.innerHTML = '';

    locales.forEach(({ locale, name, timeZone }) => {
        let options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: 'long', day: 'numeric' };
        let localeDate = document.createElement('div');
        localeDate.innerHTML = `${name}: ${new Intl.DateTimeFormat(locale, options).format(today)}`;
        localDates.appendChild(localeDate);
    });
     // Вывод текущего года
     let year = document.getElementById('year');
     year.innerHTML = `Текущий год: ${today.getFullYear()}`;
 
     // Вывод текущего месяца
     let monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
     let month = document.getElementById('month');
     month.innerHTML = `Текущий месяц: ${monthNames[today.getMonth()]}`;
 
     // Вывод текущей даты
     let date = document.getElementById('date');
     date.innerHTML = `Текущая дата: ${today.getDate()}`;
 
     // Вывод дня недели
     let dayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
     let day = document.getElementById('day');
     day.innerHTML = `День недели: ${dayNames[today.getDay()]}`;
}
function calculateDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1; // Месяцы в JavaScript начинаются с 0
    let year = document.getElementById('input-year').value;

    if (day && month >= 0 && year) {
        let date = new Date(year, month, day);
        let dayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        let result = document.getElementById('result-day-of-week');
        result.innerHTML = `День недели: ${dayNames[date.getDay()]}`;
    } else {
        alert('Пожалуйста, введите корректную дату.');
    }
}
document.addEventListener('DOMContentLoaded', showDate);