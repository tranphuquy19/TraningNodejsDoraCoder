var express = require('express');
var router = express.Router();
var uuid = require('uuid').v4;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('todos', { title: 'Task Manager' });
// });
let temp = {
    id: 'asdas',
    name: 'asda',
    description: '',
    deadline: 'ad'
};

let tasks = [
    // {
    //     id: 123,
    //     name: 'asda',
    //     description: '',
    //     deadline: 'ad'
    // }
];
//CRUD -> R= read, C=Create, U=Update, Delete

router.route('/')
    .get((req, res, next) => {
        res.render('todos', { title: 'Task manager', tasks });
    })
    .post((req, res, next) => {
        tasks.push({
            id: uuid(),
            ...req.body
        });
        res.render('todos', { title: 'Task manager', tasks });
    });

router.route('/:taskId/:action')
    .get((req, res, next) => {
        const { taskId, action } = req.params;
        switch (String(action).toUpperCase()) {
            case 'EDIT':
                res.render('todos', { title: 'Task manager', tasks });
                break;
            case 'DELETE':
                let tasks2 = tasks;
                tasks2.map((task, index) => {
                    if(task.id === taskId) tasks.splice(index, 1);
                });
                res.render('todos', { title: 'Task manager', tasks });
                break;
            default:
                break;
        }
    });

module.exports = router;
