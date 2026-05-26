const schedules = {
    segunda: [
        { scheduler: "math", place: 0, day: "segunda_feira" },
        { scheduler: "geography", place: 1, day: "segunda_feira" },
        { scheduler: "pe", place: 2, day: "segunda_feira" },
        { scheduler: "interval", place: 3, day: "segunda_feira" },
        { scheduler: "religion", place: 4, day: "segunda_feira" },
        { scheduler: "math", place: 5, day: "segunda_feira" },
    ],
    terca: [
        { scheduler: "sciences", place: 0, day: "terca_feira" },
        { scheduler: "geography", place: 1, day: "terca_feira" },
        { scheduler: "math", place: 2, day: "terca_feira" },
        { scheduler: "interval", place: 3, day: "terca_feira" },
        { scheduler: "sciences", place: 4, day: "terca_feira" },
        { scheduler: "pe", place: 5, day: "terca_feira" },
    ],
    quarta: [
        { scheduler: "history", place: 0, day: "quarta_feira" },
        { scheduler: "math", place: 1, day: "quarta_feira" },
        { scheduler: "portuguese", place: 2, day: "quarta_feira" },
        { scheduler: "interval", place: 3, day: "quarta_feira" },
        { scheduler: "math", place: 4, day: "quarta_feira" },
        { scheduler: "portuguese", place: 5, day: "quarta_feira" },
    ],
    quinta: [
        { scheduler: "portuguese", place: 0, day: "quinta_feira" },
        { scheduler: "english", place: 1, day: "quinta_feira" },
        { scheduler: "portuguese", place: 2, day: "quinta_feira" },
        { scheduler: "interval", place: 3, day: "quinta_feira" },
        { scheduler: "arts", place: 4, day: "quinta_feira" },
        { scheduler: "sciences", place: 5, day: "quinta_feira" },
    ],
    sexta: [
        { scheduler: "english", place: 0, day: "sexta_feira" },
        { scheduler: "portuguese", place: 1, day: "sexta_feira" },
        { scheduler: "arts", place: 2, day: "sexta_feira" },
        { scheduler: "interval", place: 3, day: "sexta_feira" },
        { scheduler: "history", place: 4, day: "sexta_feira" },
        { scheduler: "portuguese", place: 5, day: "sexta_feira" },
    ]
}

const subjectNames = {
    math: "Matemática",
    geography: "Geografia",
    sciences: "Ciências",
    portuguese: "Português",
    history: "História",
    english: "Inglês",
    pe: "Educação Física",
    interval: "Intervalo",
    arts: "Artes",
    religion: "Ensino Religioso",
}


const scheduleContainer = document.querySelector(".schedule");

function replaceDaysDivs() {
    const divs = scheduleContainer.querySelectorAll(".subject");

    for (let div of divs) {
        scheduleContainer.removeChild(div);
    }

    placeDaysDivs();
}

function placeDaysDivs() {
    Object.values(schedules).forEach(day => {
        day.forEach(subject => {

            const div = document.createElement("div");
            div.classList.add("subject", subject.scheduler);
            div.id = subject.day + subject.place

            const h3 = document.createElement("h3");
            h3.textContent = subjectNames[subject.scheduler];

            div.appendChild(h3);
            scheduleContainer.appendChild(div);

        });
    });
}

placeDaysDivs();