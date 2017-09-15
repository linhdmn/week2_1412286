var express = require('express');
var router = express.Router();
var studentModel = require('../../models/studentModel');

/* GET users listing. */
router.get('/:id?', function (req, res, next) {
    if(req.params.id){
        studentModel.getStudentByMssv(req.params.id, function (err, rows) {
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        studentModel.getAllStudent(function (err, rows) {
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

module.exports = router;