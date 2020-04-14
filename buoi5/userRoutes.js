let express = require('express');
let router = express.Router();

router.route('/') // CRUD localhost:3000/user/123
    .get((req, res, next) => {
        res.send('Get all users');
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