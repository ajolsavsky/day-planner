var currentDate = moment().format("MMM Do, YYYY");
var currentHour = moment().format("hh a");
$("#currentDay").text(currentDate);

var timeblocksEl = $(".timeblocks");



//Dynamically render scheduler
function renderTimes() {
    var time = [
        moment("09:00:00", "hh:mm:ss").format("h a"),
        moment("10:00:00", "hh:mm:ss").format("h a"),
        moment("11:00:00", "hh:mm:ss").format("h a"),
        moment("12:00:00", "hh:mm:ss").format("h a"),
        moment("13:00:00", "hh:mm:ss").format("h a"),
        moment("14:00:00", "hh:mm:ss").format("h a"),
        moment("15:00:00", "hh:mm:ss").format("h a"),
        moment("16:00:00", "hh:mm:ss").format("h a"),
        moment("17:00:00", "hh:mm:ss").format("h a"),
    ];

    for (var i = 0; i < time.length; i++) {
        var containerDiv = $('<div>').addClass('input-group mb-3');
        var timeSpan = $('<span>').addClass('input-group-text');
        var plannerInput = $('<input type="text">').addClass('form-control');
        var saveButton = $('<button type="button">').addClass('btn btn-outline-secondary').text('Save');
        
        timeblocksEl.append(containerDiv);

        timeSpan.text(time[i]);
        containerDiv.append(
            timeSpan,
            plannerInput,
            saveButton)

    }
}

renderTimes();

if (currentHour === "11 pm") {
    console.log("It's the same")
} else if (currentHour) {
    console.log("It's before")
} else {
    console.log("It's after")
}