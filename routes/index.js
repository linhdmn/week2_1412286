var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


app.get('/db', function(request, response){
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
