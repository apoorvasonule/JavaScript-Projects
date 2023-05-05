let isDOBOpen = false;
let dateOfBirth;
const settingsCogEl = document.getElementById("settingsIcon");
const settingsContentEl = document.getElementById("settingsContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const iconEl = document.getElementById("icon");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
};

const toggleDateofBirthSelector = () => {
    if(isDOBOpen){
        settingsContentEl.classList.add("hide");
    }
    else{
        settingsContentEl.classList.remove("hide");
    }
    
    isDOBOpen = !isDOBOpen; 
    // console.log("Toggle", isDOBOpen);
};

const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff / 31556952000);
    const month = Math.floor((dateDiff % 31556952000)/2629746000);
    const day = Math.floor(((dateDiff % 31556952000)%2629746000)/86400000);
    const hour = Math.floor((((dateDiff % 31556952000)%2629746000)%86400000)/3600000);
    const minute = Math.floor(((((dateDiff % 31556952000)%2629746000)%86400000)%3600000)/60000);
    const second = Math.floor((((((dateDiff% 31556952000) % 2629746000) % 86400000) % 3600000) % 60000) / 1000);

    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minuteEl.innerHTML = makeTwoDigitNumber(minute);
    secondEl.innerHTML = makeTwoDigitNumber(second);

    console.log("time", year, month, day, hour, minute, second);
};

const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    dateOfBirth = dateString ? new Date(dateString) : null;

    if (dateOfBirth){
        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");
        setInterval(()=> updateAge(),1000);
    }
    else{
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
};
setDOBHandler();

iconEl.addEventListener("click", toggleDateofBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);
