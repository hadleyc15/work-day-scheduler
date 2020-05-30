var momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');

  

function currentDay() {
    var currentDay = $("#currentDay").text(momentVar);
    return currentDay;
}

currentDay()
