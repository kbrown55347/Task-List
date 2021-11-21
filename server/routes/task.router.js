const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool.js');


// GET Route
taskRouter.get('/', (req, res) => {
    // console.log('GET /tasks');
    const text = `SELECT * FROM "taskList"`;
    pool.query(text)
        .then((dbRes) => {
            res.send(dbRes.rows);
            // console.log(dbRes.rows);
        })
        .catch((dbErr) => {
            console.error(dbErr);
            res.sendStatus(500);
        })
});

// POST Route
taskRouter.post('/', (req, res) => {
    // console.log('adding new task', req.body);
    let newTask = req.body;
    let queryText = `INSERT INTO "taskList" 
    ("name", "description", "completeByDate", "isComplete")
    VALUES ($1, $2, $3, $4);`;
    let queryValues = [
        newTask.name,
        newTask.description,
        newTask.date,
        newTask.isComplete
    ];
    pool.query(queryText, queryValues)
        .then(dbRes => {
            res.sendStatus(200);
        })
        .catch(dbErr => {
            res.sendStatus(500);
        });
});

// DELETE Route
taskRouter.delete('/:id', (req, res) => {
    // console.log(req.params);
    const taskIdToDelete = req.params.id;
    const sqlText = `
        DELETE FROM "taskList"
            WHERE "id"=$1;
    `;
    const sqlValues = [taskIdToDelete];

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.error(dbErr);
            res.sendStatus(500);
        })
});

// PUT Route
taskRouter.put('/:id', (req, res) => {
    // console.log('req.params', req.params);
    // console.log('req.body', req.body);
    const taskToUpdate = req.params.id;
    const completedStatus = req.body.completedStatus;
    const sqlText = `
        UPDATE "taskList"
        SET "isComplete" = $1 
        WHERE "id" = $2;
    `;
    const sqlValues = [
        completedStatus,
        taskToUpdate
    ];

    pool.query(sqlText, sqlValues)
        .then(dbResult => {
            res.sendStatus(200);
        })
        .catch(dbErr => {
            console.error(dbErr);
            res.sendStatus(500);
        });
});

module.exports = taskRouter;