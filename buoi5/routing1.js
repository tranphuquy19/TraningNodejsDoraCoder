let express = require('express');
let app = express();
const PORT = 3000;

// Các phương thức hỗ trợ: ngoài GET, PUT, PATCH, DELETE thì expressjs hỗ trợ hầu hết các phương thức khác

/**
 * Route ALL
 */
app.all('/', (req, res, next) => {
    console.log('route.all() first');
    next();//
});

app.get('/', (req, res, next) => {
    res.send('ROUTE: /');
    // next();
});

app.all('/', (req, res, next) => { // thứ tự route (route order)
    console.log('route.all() last');
});

/**
 * Duplicate routing
 */
// app.get('/', (req, res, next) => {
//     res.send('/: route 2');
// })

/**
 * Route params
 */
app.get('/users/:userId/books/:bookId', function (req, res) {
    let { userId, bookId } = req.params;
    res.send(`User id: ${userId}; Book id: ${bookId}`);
});

/**
 * Route handler (middleware route)
 */
app.get('/example1', (req, res, next) => { // basic route
    console.log('middleware first run');
    next();
}, (req, res, next) => {
    res.send('ROUTE: /example1');
});

app.get('/example2', (req, res, next) => { // middleware pass values
    let authenIsValid = true;
    req.authenIsValid = authenIsValid;
    next();
}, (req, res, next) => {
    res.send(`authenIsValid: ${req.authenIsValid}`);
});

// =====================================VER.1=========================================
app.get('/login/:username/:password', (req, res, next) => { //simplest authentication
    let { username, password } = req.params;
    req.user = { username, password };
    console.log('User', req.user);
    next();
}, (req, res, next) => {
    let { username, password } = req.user;
    if (username === 'doracoder') {
        if (password === 'dora') {
            res.send(`Login successful. Hello ${username}`);
        } else res.send(`Password incorrect`);
    } else res.send(`username: ${username} not found`);
});

// =====================================VER.2===========================================
let getUserMiddleware = (req, res, next) => { //simplest authentication
    let { username, password } = req.params;
    req.user = { username, password };
    console.log('User', req.user);
    next();
};

let resAuthen = (req, res, next) => {
    let { username, password } = req.user;
    if (username === 'doracoder') {
        if (password === 'dora') {
            res.send(`Login successful. Hello ${username}`);
        } else res.send(`Password incorrect`);
    } else res.send(`username: ${username} not found`);
};

app.get('/login2/:username/:password', getUserMiddleware, resAuthen);

// =================================END VER.2===========================================

/**
 * App.route() | basic CRUD (Create, Read, Update, Delete)
 */

app.route('/books')
    .get((req, res, next) => {
        res.send('Get all books');
    })
    .post((req, res, next) => {
        res.send('Create a book');
    });

app.route('/books/:bookId')
    .get((req, res, next) => {
        res.send(`Get book with bookId: ${req.params.bookId}`)
    })
    .put((req, res, next) => {
        res.send(`Updated book with id: ${req.params.bookId}`)
    })
    .delete((req, res, next) => {
        res.send(`Deleted book with bookId: ${req.params.bookId}`)
    });

/**
 * Route module
 */
let routes = require('./routes');
app.use(routes);

let userRoutes = require('./userRoutes');
app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));