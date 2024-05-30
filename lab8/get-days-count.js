function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type="date"]');
    let birthday = new Date(inputDate.value);
    
    if (isNaN(birthday.getTime())) {
        document.getElementById('days-count').innerText = "Пожалуйста, введите корректную дату.";
        return;
    }
    
    let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
    daysCount = Math.floor(daysCount);

    let output = `Количество дней с даты рождения: ${daysCount}`;
    document.getElementById('days-count').innerText = output;
}

function clearFields() {
    document.getElementById('birthdate').value = '';
    document.getElementById('days-count').innerText = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.querySelector('button[onclick="showDaysCount()"]');
    showButton.addEventListener('click', showDaysCount);

    const clearButton = document.querySelector('button[onclick="clearFields()"]');
    clearButton.addEventListener('click', clearFields);
});