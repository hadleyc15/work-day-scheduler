function simpleCalendar() {
    $(document).ready(function () {
        var dateVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
        var workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
            "5 p.m."]

        //Displays current date and time at top of page
        function currentDay() {
            var currentDay = $("#currentDay").text(dateVar);
            return currentDay;
        }

        currentDay();

        //Displays the rows for the hours of the day
        for (i = 0; i < workHours.length; i++) {
            var row = $("<div>").addClass("row");
            var timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
            var inputCol = $("<input>").attr("placeholder", "Enter your task here").addClass("toDo-input time-block");
            saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
            $(row).append(timeCol).append(inputCol).append(saveBtn);
            $("#calendar").append(row);
        }
    });

}
simpleCalendar();