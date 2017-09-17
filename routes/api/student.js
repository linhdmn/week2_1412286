var express = require('express');
var router = express.Router();
var studentModel = require('../../models/studentModel');

/* GET student listing. */
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

router.post('/', function (req, res, next) {
    studentModel.addStudent(req.body, function (err, count) {
        if(err){
            res.json(err);
        }
        else
        {
            res.json(req.body); //or return count 0 or 1
        }
    });
});

router.delete('/delete', function (req, res, next) {
    studentModel.deleteStudent(req.param.id, function (err, count) {
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {
    studentModel.updateStudent(req.params.id, req.body, function (err, rows) {
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports = router;