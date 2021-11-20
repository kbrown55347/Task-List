# Project Map

## Initialization

- [x] make new git branch for initializing
- [x] add files/folders to project directory: .gitignore, pool.js (for database connection), database.sql, client.js, server.js, jquery, html & css files
- [x] map out db table structure

### Front-End

- [x] source CSS, jQuery & JS files
- [x] create basic HTMl layout with:
    * input fields for new task
    * submit button
    * table to append tasks to


### Back-End

- [x] run npm init --yes
- [x] npm install items we need (pg, express)
- [x] add 'start' script in package.json
- [x] create SQL database named `weekend-to-do-app` through Postico, add CREATE TABLE queries to database.sql
- [x] implement minimum code for working Express server in server.js (require in express)
- [x] wire up db connection in pool.js file

---

## Features

### Create and Display Tasks

- [x] create function to take values from input fields 
- [x] wire POST route (on client side) to send input info to server
- [x] wire POST route on server side to have task stored in database
- [x] wire GET routes to send task list from db to server to client
- [x] create function on client side to append each task to table on DOM with 'complete' and 'delete' buttons

### Delete a Task

- [x] delete task in db
- [x] re-render DOM

### Complete a Task

- [x] update task in db - PUT route
- [x] should be 'checked off'
- [x] CSS to differentiate
- [x] re-render DOM

### Styling

- [x] style with CSS
    * background color
    * font family & size
    * text color and/or background color of tasks (to show complete or not)