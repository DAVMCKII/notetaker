const router = require('express').Router();
const apiRoutes = require('./apiRoutes')
router.use(apiRoutes)
const path = require('path')

router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports =router