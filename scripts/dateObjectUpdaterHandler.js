let dateObject = new Date();

const days = [
    "domingo",
    "segunda_feira",
    "terca_feira",
    "quarta_feira",
    "quinta_feira",
    "sexta_feira",
    "sabado",
]

let today = dateObject.getDay();
// let today = 1;
var idToday = days[today];
var currentMinutes = dateObject.getHours() * 60 + dateObject.getMinutes();

let oldsValues = [
    today,
    // idToday,
    currentMinutes,
]

function check() {
    dateObject = new Date();
    today = dateObject.getDay();
    idToday = days[today];
    currentMinutes = dateObject.getHours() * 60 + dateObject.getMinutes();
    
    if (today !== oldsValues[0]) {
        oldsValues[0] = today;  
        verifyDay();
    };

    // if (idToday !== oldsValues[1]) {
    //     oldsValues[1] = idToday;
    //     update();
    // };

    if (currentMinutes !== oldsValues[2]) {
        oldsValues[2] = currentMinutes;
        verifyHour();
    }
}

const intervalToUpdate = 1 * 100;

setInterval(check, intervalToUpdate);