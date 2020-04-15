let express = require('express');
let router = express.Router();

router.get('/route-modular', (req, res, next) => {
    console.log(req.body);
    res.send('Route module');
});

module.exports = router;