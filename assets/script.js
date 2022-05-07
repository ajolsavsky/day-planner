
//Append current date to the top of the page
var currentDate = moment().format("MMM Do, YYYY");
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
        var timeSpan = $('<span>').addClass('input-group-text').attr('id', 'timeSpan' + [i]);
        var plannerInput = $('<input type="text">').addClass('form-control').attr('id', 'planner' + [i]).attr('value', '');
        var saveButton = $('<button type="button">').addClass('btn btn-outline-secondary').text('Save').attr('id', 'button' + [i]);

        var currentScheduleIndex = time[i];
        //Convert array string to a moment
        var scheduleMoment = moment(currentScheduleIndex, 'h a')
        //Calculate difference in hours between current time and the schedule Index time
        var timeDifference = moment(currentScheduleIndex, 'h a').diff(moment(), 'hours', true);

        //Changes input background based on if the time has passed, is in the future, or is the current time
        if (timeDifference < -1) {
            plannerInput.addClass('bg-secondary text-light');
        } else if (timeDifference > 0) {
            plannerInput.addClass('bg-success text-light');
        } else {
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

// This function will pull stored values from local storage when the page loads and set the input values to fill based on the stored data
function init() {
    var storedPlanner0 = JSON.parse(localStorage.getItem("planner0"));
    var storedPlanner1 = JSON.parse(localStorage.getItem("planner1"));
    var storedPlanner2 = JSON.parse(localStorage.getItem("planner2"));
    var storedPlanner3 = JSON.parse(localStorage.getItem("planner3"));
    var storedPlanner4 = JSON.parse(localStorage.getItem("planner4"));
    var storedPlanner5 = JSON.parse(localStorage.getItem("planner5"));
    var storedPlanner6 = JSON.parse(localStorage.getItem("planner6"));
    var storedPlanner7 = JSON.parse(localStorage.getItem("planner7"));
    var storedPlanner8 = JSON.parse(localStorage.getItem("planner8"));

    if (storedPlanner0 !== null) {
        document.getElementById("planner0").setAttribute("value", storedPlanner0);
    }
    if (storedPlanner1 !== null) {
        document.getElementById("planner1").setAttribute("value", storedPlanner1);
    }
    if (storedPlanner2 !== null) {
        document.getElementById("planner2").setAttribute("value", storedPlanner2);
    }
    if (storedPlanner3 !== null) {
        document.getElementById("planner3").setAttribute("value", storedPlanner3);
    }
    if (storedPlanner4 !== null) {
        document.getElementById("planner4").setAttribute("value", storedPlanner4);
    }
    if (storedPlanner5 !== null) {
        document.getElementById("planner5").setAttribute("value", storedPlanner5);
    }
    if (storedPlanner6 !== null) {
        document.getElementById("planner6").setAttribute("value", storedPlanner6);
    }
    if (storedPlanner7 !== null) {
        document.getElementById("planner7").setAttribute("value", storedPlanner7);
    }
    if (storedPlanner8 !== null) {
        document.getElementById("planner8").setAttribute("value", storedPlanner8);
    }
}


//Events that occur upon click
function handleInputData(event) {
    event.preventDefault();

    //Identifies exact button clicked
    var btnClicked = $(event.target);

    //Traverses the DOM to find input value relative to the clicked button
    var currentInput = btnClicked.parent().children().eq(1)[0].value;

    //Traverses the DOM to find input id
    var currentInputId = btnClicked.parent().children().eq(1)[0].id;

    //Stores key value pair in local storage
    localStorage.setItem(currentInputId, JSON.stringify(currentInput))

}

//Render the agenda
renderTimes();

//Initialize stored data
init();

//Click event listener
timeblocksEl.on('click', '.btn', handleInputData)