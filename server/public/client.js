$(document).ready(onReady);

function onReady() {
    // call function to get values on click of 'add task' button
    $('#add-btn').on('click', handleAddTask);
    // on click of delete button, call function to remove that task
    $('#viewTasks').on('click', '.remove-btn', removeTask);
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
    getTasks();
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
        renderTasks(response);
        // console.log('in getTasks', response);
    }).catch((error) => {
        console.log('error in GET', error);
    });
} // end getTasks

// create function to append tasks to DOM
function renderTasks(tasks) {
    // console.log('in renderTasks');
    $('#viewTasks').empty();
    for (task of tasks) {
        $('#viewTasks').append(`
        <tr id="${task.id}">
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.completeByDate}</td>
        <td><input type="checkbox" class="checkbox" data-id="${task.id}"></input></td>
        <td><button class="remove-btn" data-id="${task.id}">Remove</button></td>
        </tr>
        `)
    } // end for of loop
} // end renderTasks

// create function to remove task
function removeTask() {
    // console.log('remove me');
    const taskIdRemove = $(this).data('id');
    // console.log(taskIdRemove);
    $(`#${taskIdRemove}`).remove();
} // end removeTask