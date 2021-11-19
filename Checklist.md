# Project Map

## Initialization

- [ ] map out db table structure
- [x] make new git branch for initializing
- [ ] add files/folders to project directory: .gitignore, pool.js (for database connection), database.sql, client.js, server.js, jquery, html & css files

### Front-End

- [ ] create basic HTMl layout with:
    * input fields for new task
    * submit button
    * table to append tasks to
- [ ] source CSS, jQuery & JS files


### Back-End

- [x] run npm init --yes
- [ ] add 'start' script in package.json
- [x] npm install items we need (pg, express)
- [ ] create SQL database named `weekend-to-do-app` through Postico, add CREATE TABLE queries to database.sql
- [ ] implement minimum code for working Express server in server.js (require in express)
- [ ] wire up db connection in pool.js file

---

## Features

### Create and Display Tasks

- [ ] create function to take values from input fields 
- [ ] wire PUT route (on client side) to send input info to server
- [ ] wire PUT route on server side to have task stored in database
- [ ] create function in client side to append each task to table on DOM with 'complete' and 'delete' buttons
- [ ] wire GET routes to send task list from db to server to client

### Delete a Task

- [ ] delete task in db
- [ ] re-render DOM

### Complete a Task

- [ ] update task in db
- [ ] should be 'checked off'
- [ ] CSS to differentiate
- [ ] re-render DOM

### Styling

- [ ] style with CSS
    * background color
    * font family & size
    * text color and/or background color of tasks (to show complete or not)