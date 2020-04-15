var express = require('express');
var router = express.Router();
var uuid = require('uuid').v4;

let tasks = [];

router.route('/')
    .get((req, res) => {
        res.render('todos', { title: 'Home', tasks });
    })
    .post((req, res) => {
        const { name, description, deadline } = req.body;
        tasks.push({
            id: uuid(),
            name, description, deadline
        });
        res.render('todos', { title: 'Home', tasks });
    });

router.get('/:todoId/:action', (req, res) => {
    const { todoId, action } = req.params;
    switch (String(action).toUpperCase()) {
        case 'EDIT':
            break;
        case 'DELETE':
            break;
        default:
            break;
    }
});

router.post('/:todoId/:action', (req, res) => {
    const { action } = req.params;
    switch (String(action).toUpperCase()) {
        case 'UPDATE':
            break;
        default:
            break;
    }
})

module.exports = router;