const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool.js');

taskRouter.post('/', (req, res) => {
    // console.log('adding new task', req.body);
    let newTask = req.body;
    let queryText = `INSERT INTO "taskList" 
    ("name", "description", "completeByDate")
    VALUES ($1, $2, $3);`;
    let queryValues = [
        newTask.name,
        newTask.description,
        newTask.date
    ];
    pool.query(queryText, queryValues)
        .then(dbRes => {
            res.sendStatus(200);
        })
        .catch(dbErr => {
            res.sendStatus(500);
        });
});


module.exports = taskRouter;