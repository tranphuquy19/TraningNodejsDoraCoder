let express = require('express');
let router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.send('Get all users 123');
    })
    .post((req, res, next) => {
        res.send('Create a user');
    });

router.route('/:userId')
    .get((req, res, next) => {
        res.send(`Get user with userId: ${req.params.userId}`);
    })
    .put((req, res, next) => {
        res.send(`Updated user with id: ${req.params.userId}`);
    })
    .delete((req, res, next) => {
        res.send(`Deleted user with userId: ${req.params.userId}`);
    });

module.exports = router;