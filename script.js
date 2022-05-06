var currentDate = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDate);

var timeblocksEl = $(".timeblocks");




function renderTimes() {
    var containerDiv = $('div').addClass('input-group mb-3');

    var timeSpan = $('<span>').addClass('input-group-text');

    var plannerInput = $('<input type="text">').addClass('form-control');

    var saveButton = $('<button type="button">').addClass('btn btn-outline-secondary').text('Save');
    
    containerDiv.append(
        timeSpan,
        plannerInput,
        saveButton
    );

    timeblocksEl.append(containerDiv);

    // var time = [
    //     '9AM',
    //     '10AM',
    //     '11AM',
    //     '12PM',
    //     '1PM',
    //     '2PM',
    //     '3PM',
    //     '4PM',
    //     '5PM',
    // ];

    // for (var i = 0; i < time.length; i++) {
    //     var containerDiv = $('<div>');
    //     containerDiv.addClass('input-group mb-3');

    // }
}

renderTimes();