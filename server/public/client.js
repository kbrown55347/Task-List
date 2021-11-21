$(document).ready(onReady);

function onReady() {
    getTasks();
    // call function to add task on click of #add-btn
    $('#add-btn').on('click', handleAddTask);
    // on click of remove button, call function to remove task from DOM
    $('#viewTasks').on('click', '.remove-btn', removeTask);
    $('#viewTasks').on('click', '.checkbox-in', handleCompleted);
};

// create function to collect values from input fields
function handleAddTask() {
    let taskToAdd = {
        name: $('#task-name-in').val(),
        description: $('#descript-in').val(),
        date: $('#date-in').val(),
        isComplete: false,
    };
    sendNewTask(taskToAdd);
    clearInputs();
    // console.log('In handleAddTask', taskToAdd);
}; // end handleAddTask

// create function to clear input values
function clearInputs() {
    $('#task-name-in').val('');
    $('#descript-in').val('');
    $('#date-in').val('');
}; //end clearInputs

// create function to send new task to server via POST route
function sendNewTask(newTask) {
    // console.log('in sendNewTask');
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
}; // end sendNewTask

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
}; // end getTasks

// create function to append tasks to DOM
function renderTasks(tasks) {
    // console.log('in renderTasks');
    $('#viewTasks').empty();
    for (task of tasks) {
        if (task.isComplete) {
            $('#viewTasks').append(`
            <tr id="${task.id}">
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.completeByDate}</td>
            <td><input type="checkbox" class="checkbox-in" data-id="${task.id}" data-complete="${task.isComplete}" checked></input></td>
            <td><button class="remove-btn" data-id="${task.id}">Remove</button></td>
            </tr>
            `);
        } else {
            $('#viewTasks').append(`
            <tr id="${task.id}">
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.completeByDate}</td>
            <td><input type="checkbox" class="checkbox-in" data-id="${task.id}" data-complete="${task.isComplete}"></input></td>
            <td><button class="remove-btn" data-id="${task.id}">Remove</button></td>
            </tr>
        `)};
    };
    addStyling(tasks);
}; // end renderTasks

// create function to remove task
function removeTask() {
    const taskIdRemove = $(this).data('id');
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
}; // end removeTask

// create function to change completed status
function handleCompleted() {
    const taskIdToMark = $(this).data('id');
    let currentCompletedStatus = $(this).data('complete');
    if (currentCompletedStatus) {
        currentCompletedStatus = false;
    } else if (!currentCompletedStatus) {
        currentCompletedStatus = true;
    };
    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskIdToMark}`,
        data: {completedStatus: currentCompletedStatus}
    }).then((res) => {
        getTasks();
    }).catch((error) => {
        console.error(error);
    })
}; // end handleCompleted

// create function to add or remove CSS features based on if task is complete or not
function addStyling(tasks) {
    for (let task of tasks) {
        let taskId = $(`#${task.id}`);
        if (task.isComplete) {
            taskId.addClass('elementComplete');
        } else if (taskId.hasClass('elementComplete') && !task.isComplete) {
            taskId.removeClass('elementComplete');
        }
    }
}; // end addStyling