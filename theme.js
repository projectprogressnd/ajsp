function checkTimeAndApplyTheme() {
    const currentHour = new Date().getHours();
    // Ночное время с 18:00 до 06:00
    if (currentHour >= 18 || currentHour < 6) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}
window.onload = checkTimeAndApplyTheme;