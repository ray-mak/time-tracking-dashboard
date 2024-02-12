const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const workCurrent = document.getElementById("work-current");
const workPrevious = document.getElementById("work-previous");
const playCurrent = document.getElementById("play-current");
const playPrevious = document.getElementById("play-previous");
const studyCurrent = document.getElementById("study-current");
const studyPrevious = document.getElementById("study-previous");
const exerciseCurrent = document.getElementById("exercise-current");
const exercisePrevious = document.getElementById("exercise-previous");
const socialCurrent = document.getElementById("social-current");
const socialPrevious = document.getElementById("social-previous");
const selfCareCurrent = document.getElementById("self-care-current");
const selfCarePrevious = document.getElementById("self-care-previous");



const getDaily = async () => {
    try {
        const res = await fetch("https://ray-mak.github.io/time-date-json/data.json");
        const data = await res.json();

        weekly.classList.remove("selected");
        monthly.classList.remove("selected");
        daily.classList.add("selected");

        workCurrent.textContent = `${data[0].timeframes.daily.current}hrs`;
        workPrevious.textContent = `Last week - ${data[0].timeframes.daily.previous}hrs`;
        playCurrent.textContent = `${data[1].timeframes.daily.current}hrs`;
        playPrevious.textContent = `Last week - ${data[1].timeframes.daily.previous}hrs`;
        studyCurrent.textContent = `${data[2].timeframes.daily.current}hrs`;
        studyPrevious.textContent = `Last week - ${data[2].timeframes.daily.previous}hrs`;
        exerciseCurrent.textContent = `${data[3].timeframes.daily.current}hrs`;
        exercisePrevious.textContent = `Last week - ${data[3].timeframes.daily.previous}hrs`;
        socialCurrent.textContent = `${data[4].timeframes.daily.current}hrs`;
        socialPrevious.textContent = `Last week - ${data[4].timeframes.daily.previous}hrs`;
        selfCareCurrent.textContent = `${data[5].timeframes.daily.current}hrs`;
        selfCarePrevious.textContent = `Last week - ${data[5].timeframes.daily.previous}hrs`;
    } catch (err) {
        alert("Data not found");
        console.log(err);
    }
}

const getWeekly = async () => {
    try {
        const res = await fetch("https://ray-mak.github.io/time-date-json/data.json");
        const data = await res.json();

        weekly.classList.add("selected");
        monthly.classList.remove("selected");
        daily.classList.remove("selected");

        workCurrent.textContent = `${data[0].timeframes.weekly.current}hrs`;
        workPrevious.textContent = `Last week - ${data[0].timeframes.weekly.previous}hrs`;
        playCurrent.textContent = `${data[1].timeframes.weekly.current}hrs`;
        playPrevious.textContent = `Last week - ${data[1].timeframes.weekly.previous}hrs`;
        studyCurrent.textContent = `${data[2].timeframes.weekly.current}hrs`;
        studyPrevious.textContent = `Last week - ${data[2].timeframes.weekly.previous}hrs`;
        exerciseCurrent.textContent = `${data[3].timeframes.weekly.current}hrs`;
        exercisePrevious.textContent = `Last week - ${data[3].timeframes.weekly.previous}hrs`;
        socialCurrent.textContent = `${data[4].timeframes.weekly.current}hrs`;
        socialPrevious.textContent = `Last week - ${data[4].timeframes.weekly.previous}hrs`;
        selfCareCurrent.textContent = `${data[5].timeframes.weekly.current}hrs`;
        selfCarePrevious.textContent = `Last week - ${data[5].timeframes.weekly.previous}hrs`;
    } catch (err) {
        alert("Data not found");
        console.log(err);
    }
}

const getMonthly = async () => {
    try {
        const res = await fetch("https://ray-mak.github.io/time-date-json/data.json");
        const data = await res.json();

        weekly.classList.remove("selected");
        monthly.classList.add("selected");
        daily.classList.remove("selected");

        workCurrent.textContent = `${data[0].timeframes.monthly.current}hrs`;
        workPrevious.textContent = `Last week - ${data[0].timeframes.monthly.previous}hrs`;
        playCurrent.textContent = `${data[1].timeframes.monthly.current}hrs`;
        playPrevious.textContent = `Last week - ${data[1].timeframes.monthly.previous}hrs`;
        studyCurrent.textContent = `${data[2].timeframes.monthly.current}hrs`;
        studyPrevious.textContent = `Last week - ${data[2].timeframes.monthly.previous}hrs`;
        exerciseCurrent.textContent = `${data[3].timeframes.monthly.current}hrs`;
        exercisePrevious.textContent = `Last week - ${data[3].timeframes.monthly.previous}hrs`;
        socialCurrent.textContent = `${data[4].timeframes.monthly.current}hrs`;
        socialPrevious.textContent = `Last week - ${data[4].timeframes.monthly.previous}hrs`;
        selfCareCurrent.textContent = `${data[5].timeframes.monthly.current}hrs`;
        selfCarePrevious.textContent = `Last week - ${data[5].timeframes.monthly.previous}hrs`;
    } catch (err) {
        alert("Data not found");
        console.log(err);
    }
}

daily.addEventListener("click", getDaily);
weekly.addEventListener("click", getWeekly);
monthly.addEventListener("click", getMonthly);

window.onload = getWeekly();