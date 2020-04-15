var express = require('express');
var router = express.Router();

let books = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  // let temp = ++counter;
  res.render('index', {title: 'Dora training', header2: 'coders'});
});

router.route('/books')
  .get((req, res, next) => {
    res.send('send all books');
  })
  .post((req, res, next) => {

  });

module.exports = router;
