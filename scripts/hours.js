const Schedules = document.querySelector(".schedule");

let needReplace = false;

const Hours = [
    { start: "13:00", end: "13:50" },
    { start: "13:50", end: "14:40" },
    { start: "14:40", end: "15:30" },
    { start: "15:30", end: "15:50" },
    { start: "16:00", end: "16:40" },
    { start: "16:40", end: "17:30" },
]

function styleDiv(element) {
    if (!needReplace) needReplace = true;
    if (!element) return;
    element.classList.add("currentClassSelect");
}

function getDiv(index) {
    const key = idToday + index;
    const currentClass = document.getElementById(key);
    currentClassDiv = currentClass;

    styleDiv(currentClass);
}

function verifyHour() {

    console.log("Chamado verifyHour");
    
    if (idToday === "domingo" || idToday === "sabado") return;

    Hours.forEach((slot, index) => {
        const [startH, startM] = slot.start.split(":").map(Number);
        const [endH, endM] = slot.end.split(":").map(Number);

        const start = startH * 60 + startM;
        const end = endH * 60 + endM;

        if (currentMinutes >= start && currentMinutes < end) {
            if (needReplace) replaceDaysDivs();
            getDiv(index);
            return;
        };
    });
}

verifyHour();