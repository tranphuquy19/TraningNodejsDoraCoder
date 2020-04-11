let express = require('express');
let router = express.Router();

router.get('/route-modular', (req, res, next) => {
    res.send('Route module');
});

module.exports = router;