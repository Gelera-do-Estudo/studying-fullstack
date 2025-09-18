const time = document.querySelector('#clockTime');
const todaysDate = document.querySelector('#todaysDate');

function changeTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const formatTime = `${hours}:${minutes}`;
    time.textContent = formatTime;
} 

function showDate() {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };
    const theDate = new Date();
    const formatDate = theDate.toLocaleDateString('pt-BR', options);

    todaysDate.textContent = formatDate;
}

showDate();
setInterval(changeTime, 1000);