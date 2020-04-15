var express = require('express');
var router = express.Router();

let todos = [];

router.route('/')
    .get((req, res) => {
        res.render('todos', { title: 'Home' });
    })
    .post((req, res) => {
        res.render('todos', { title: 'Home' });
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