let dateObject = new Date();

let TodayClassesFinish = false; 

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
var idToday = days[today];
var currentMinutes = dateObject.getHours() * 60 + dateObject.getMinutes();

let oldsValues = [
    today,
    currentMinutes,
]

var j = 0;

function check() {
    
    dateObject = new Date();
    today = dateObject.getDay();
    currentMinutes = dateObject.getHours() * 60 + dateObject.getMinutes();
    
    if (today !== oldsValues[0]) {
        oldsValues[0] = today;  
        idToday = days[today];
        verifyDay();
        j++;
        TodayClassesFinish = false;
    };

    if (TodayClassesFinish) {
        console.log("a");
        
        return;
    };

    if (currentMinutes !== oldsValues[2]) {
        oldsValues[2] = currentMinutes;
        verifyHour();
        j++;
    }

    if (j >= 50) window.location.reload();
}

const intervalToUpdate = 1 * 100;

var interval = setInterval(check, intervalToUpdate);
