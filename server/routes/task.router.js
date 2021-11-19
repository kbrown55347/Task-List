const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool.js');

taskRouter.post('/', (req, res) => {
    console.log('adding new task', req.body);
    res.sendStatus(200);
});


module.exports = taskRouter;