// MEAN Portfolio
// File Name: todo.js
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let todoController = require('../controllers/todo');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET todo List page - READ Operation */
router.get('/', passport.authenticate('jwt', {session:false}), todoController.displayToDoList);

/* GET request - Display Add page */
router.get('/add', passport.authenticate('jwt', {session:false}), todoController.displayAddPage);

/* POST request - Add new todo in database */
router.post('/add', passport.authenticate('jwt', {session:false}), todoController.processAddPage);

/* GET request - Display Edit page */
router.get('/edit/:id', passport.authenticate('jwt', {session:false}), todoController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', passport.authenticate('jwt', {session:false}), todoController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session:false}), todoController.performDelete);

module.exports = router;