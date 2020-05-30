var todayDate = moment().format("dddd, MMMM Do");
var timeNow = moment().format("H A");
var planDay = [
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" }
];

//show current day in header
$("#currentDay").text(todayDate, timeNow);

//check local storage for previous saved data from the schedule
var checkPrevious = JSON.parse(localStorage.getItem("dayPlanner"));

//get previously saved data from local storage if any is found
if (checkPrevious !== null) {
    planDay = checkPrevious;
}

