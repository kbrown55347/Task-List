$(document).ready(onReady);

function onReady() {
    // call function to get values on click of 'add task' button
    $('#add-btn').on('click', handleAddTask);
    getTasks();
};

// create function to pull values from input fields
function handleAddTask() {
    let taskToAdd = {
        name: $('#task-name-in').val(),
        description: $('#descript-in').val(),
        date: $('#date-in').val()
    };
    saveTask(taskToAdd);
    clearInputs();
    // console.log('In handleAddTask', taskToAdd);
} // end handleAddTask

// create function to clear input values
function clearInputs() {
    $('#task-name-in').val('');
    $('#descript-in').val('');
    $('#date-in').val('');
    // console.log('Inputs clear');
} //end clearInputs

function saveTask(newTask) {
    console.log('in saveTask');
    // ajax POST call to server to get tasks
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask    
    }).then((response) => {
        console.log(response);
        // will call function with GET route here 
        // to render tasks onto DOM
    }).catch((error) => {
        console.error(error);
    });
} // end saveTask

// create function to wire GET '/tasks' route from server
function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then((response) => {
        // renderTasks function will go here
        console.log('in getTasks', response);
    }).catch((error) => {
        console.log('error in GET', error);
    });
} // end getTasks