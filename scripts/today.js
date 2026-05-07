function setDayDivStyle(element) {
    if (!element) return;
    if (element.id === "domingo" || element.id === "sabado") return;
    element.classList.add("todaySelect");
}

function changeDay() {
    const todayDiv = document.getElementById(idToday);
    setDayDivStyle(todayDiv);
}

function verifyDay() {
    console.log("Chamado verifyDay");

    replaceDaysDivs();

    changeDay();
}

verifyDay();