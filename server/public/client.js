$(document).ready(onReady);

function onReady() {
    // call function to get values on click of 'add task' button
    $('#add-btn').on('click', handleAddTask);
};



// create function to pull values from input fields
function handleAddTask() {
    let taskToAdd = {
        name: $('#task-name-in').val(),
        description: $('#descript-in').val(),
        date: $('#date-in').val()
    }
    clearInputs();
    console.log('In handleAddTask', taskToAdd);
} // end handleAddTask


// create function to clear input values
function clearInputs() {
    $('#task-name-in').val('');
    $('#descript-in').val('');
    $('#date-in').val('');
    // console.log('Inputs clear');
} //end clearInputs