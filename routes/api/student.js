var express = require('express');
var pg      = require('pg');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM sinh_vien', function (err, result) {
            done();
            if(err){
                console.error(err);
                response.send("Error " + err);
            }
            else{
                response.render('pages/db', {result: result.rows});
            }
        });
    });
});

module.exports = router;