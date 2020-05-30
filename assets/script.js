var todayDate = moment().format("LLLL");
var timeNow = moment().format("H A");
var workDay = [
    {time: "9AM", event: ""},
    {time: "10AM", event: ""},
    {time: "11AM", event: ""},
    {time: "12PM", event: ""},
    {time: "1PM", event: ""},
    {time: "2PM", event: ""},
    {time: "3PM", event: ""},
    {time: "4PM", event: ""},
    {time: "5PM", event: ""}
];

//show current day in header
$("#currentDay").text(todayDate, timeNow);

//check local storage for previous saved data from the schedule
var checkPrevious = JSON.parse(localStorage.getItem("dayPlanner"));

//get previously saved data from local storage if any is found
if (checkPrevious !== null) {
    workDay = checkPrevious;
}

workDay.forEach(function (timeBlock, index) {
    // variable for the time block label
    var timeLabel = timeBlock.time;

    // variable for the color of the text area
    var blockColor = colorCoding(timeLabel);

    //variable for the user entry row including label, user event, and save button
    var block =
        '<div class="time-block" id="' +
        index +
        '"><div class="row no-gutters input-group"><div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        timeLabel +
        '</div><textarea class="form-control ' +
        blockColor +
        ' description">' +
        timeBlock.event +
        '</textarea><div class="col-sm-2 col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';

    // show timeblock rows
    $(".container").append(block);
});

// function for color coding
function colorCoding(time) {
    //compares time fir that box current time
    var currentTime = moment(timeNow, "H A");
    var currentArea = moment(time, "H A");

    //Determines what color the box is going to be based off of what the current time is
    if (currentTime.isBefore(currentArea) === true) {
        return "future";
    } else if (currentTime.isAfter(currentArea) === true) {
        return "past";
    } else {
        return "present";
    }
}

//Determines what happens when the save button is clicked
$(".saveBtn").on("click", function (event) {
    //Detects which time slot the event is in
    var blockId = parseInt(
        $(this)
            .closest(".time-block")
            .attr("id")
    );
    var userEntry = $.trim(
        $(this)
            .parent()
            .siblings("textarea")
            .val()
    );

    //Saves tasks added individually based on which time slot they are in
    workDay[blockId].event = userEntry;
    localStorage.setItem("dayPlanner", JSON.stringify(workDay));

});
