const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let feedback = req.body;
    console.log('getting feedback results', feedback);
    let queryText = `SELECT * FROM "feedback";`
        pool.query(queryText).then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log('error in GET feedback', err);
            res.sendStatus(500);
        });
})

router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('posting new feedback results', newFeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`
    pool.query(queryText, [newFeedback.feeling, newFeedback.comprehension, newFeedback.support, newFeedback.comments]).then(result => {
        res.sendStatus(201);
    }).catch(err => {
        console.log('error in add new feedback results', err);
        res.sendStatus(500);
    })
})



module.exports = router;