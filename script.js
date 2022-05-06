var currentDate = moment().format("MMM Do, YYYY");
var currentHour = moment().format("h a");
$("#currentDay").text(currentDate);

var timeblocksEl = $(".timeblocks");



//Dynamically render scheduler
function renderTimes() {
    // Array of times
    var time = [
        moment("09:00", "hh.mm").format("hh a"),
        moment("10:00", "hh:mm").format("hh a"),
        moment("11:00", "hh:mm").format("hh a"),
        moment("12:00", "hh:mm").format("hh a"),
        moment("13:00", "hh:mm").format("hh a"),
        moment("14:00", "hh:mm").format("hh a"),
        moment("15:00", "hh:mm").format("hh a"),
        moment("16:00", "hh:mm").format("hh a"),
        moment("17:00", "hh:mm").format("hh a"),
    ];
    // Loop that dyamically renders times to the page
    for (var i = 0; i < time.length; i++) {
        var containerDiv = $('<div>').addClass('input-group pr-4 pl-4');
        var timeSpan = $('<span>').addClass('input-group-text');
        var plannerInput = $('<input type="text">').addClass('form-control');
        var saveButton = $('<button type="button">').addClass('btn btn-outline-secondary').text('Save');

        var currentScheduleIndex = time[i];
        //Convert array string to a moment
        var scheduleMoment = moment(currentScheduleIndex, 'h a')
        //Calculate difference in hours between current time and the schedule Index time
        var timeDifference = moment(currentScheduleIndex, 'h a').diff(moment(), 'hours', true);
        console.log(timeDifference);

        //Changes input background based on if the time has passed, is in the future, or is the current time
        if (timeDifference < -1) {
            console.log ("This hour has already happened");
            plannerInput.addClass('bg-secondary text-light');
        } else if (timeDifference > 0) {
            console.log ("This hour is in the future");
            plannerInput.addClass('bg-success text-light');
        } else {
            console.log ("This is the current time");
            plannerInput.addClass('bg-danger text-light');

        }
        
        //Append the container div to the timeblocks div
        timeblocksEl.append(containerDiv);

        //Define the text for the timespan element
        timeSpan.text(time[i]);

        //Append individual time, input field, save button to the page
        containerDiv.append(
            timeSpan,
            plannerInput,
            saveButton)

    }
}

renderTimes();


//TODO: Event propogation to the timeblocks div for buttons/text input
