$(document).ready(onReady);

function onReady() {
    // call function to get values on click of 'add task' button
    getTasks();
    $('#add-btn').on('click', handleAddTask);
    // on click of delete button, call function to remove that task
    $('#viewTasks').on('click', '.remove-btn', removeTask);
    $('#viewTasks').on('click', '.complete-btn', handleCompleted);
};

// create function to pull values from input fields
function handleAddTask() {
    let taskToAdd = {
        name: $('#task-name-in').val(),
        description: $('#descript-in').val(),
        date: $('#date-in').val(),
        isComplete: false,
    };
    saveTask(taskToAdd);
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

function saveTask(newTask) {
    console.log('in saveTask');
    // ajax call for POST route to send
    // new task to server
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).then((response) => {
        console.log(response);
        getTasks();
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
        // addStyling after calling renderTasks because
        // we need the tr of task to have specific task id
        // addStyling(response);
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
        <td><button class="complete-btn" data-id="${task.id}" data-complete="${task.isComplete}">Completed</button></td>
        <td><button class="remove-btn" data-id="${task.id}">Remove</button></td>
        </tr>
        `)
    } // end for of loop
    addStyling(tasks);
} // end renderTasks

// create function to remove task
function removeTask() {
    // console.log('remove me');
    const taskIdRemove = $(this).data('id');
    // console.log(taskIdRemove);
    $(`#${taskIdRemove}`).remove();
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${taskIdRemove}`,
    }).then((response) => {
        console.log('in DELETE route', response);
        getTasks();
    }).catch((error) => {
        console.log('error in DELETE', error);
    });
} // end removeTask

// create function to change completed status and add CSS
// features
function handleCompleted() {
    // console.log('handleCompleted wired');
    const taskIdToMark = $(this).data('id');
    let currentCompletedStatus = $(this).data('complete');
    console.log(currentCompletedStatus);
    if (currentCompletedStatus === true) {
        currentCompletedStatus = false;
    } else if (currentCompletedStatus === false) {
        currentCompletedStatus = true;
    };
    console.log(currentCompletedStatus);
    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskIdToMark}`,
        data: { completedStatus: currentCompletedStatus }
    }).then((res) => {
        getTasks();
    }).catch((error) => {
        console.error(error);
    })
} // end handleCompleted


// create function to add CSS features for completed tasks
function addStyling(tasks) {
    for (let task of tasks) {
        if (task.isComplete) {
            $(`#${task.id}`).addClass('elementComplete');
        } else if ($(`#${task.id}`).hasClass('elementComplete') && task.isComplete === false) {
            $(`#${task.id}`).removeClass('elementComplete');
        }
    }
}