function setDayDivStyle(element) {
    if (!element) return;
    if (element.id === "domingo" || element.id === "sabado") return;
    element.classList.add("todaySelect");
}

function changeDay(day) {
    const dayName = days[day];
    const todayDiv = document.getElementById(dayName);
    setDayDivStyle(todayDiv);
}

function verifyDay() {
    console.log("Chamado verifyDay");

    changeDay(today);
}

verifyDay();