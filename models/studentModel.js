var db = require('../connection/dbconnection');

var studentModel = {
    getAllStudent: function (callback) {
        return db.query("select * from student", callback);
    },
    getStudentByMssv: function (mssv, callback) {
        return db.query("select * from student where mssv=?", [mssv], callback);
    },
    addStudent: function (student, callback) {
        return db.query("insert into student values(?,?,?)", [student.mssv, student.hoten, student.diemtichluy], callback);
    },
    deleteStudent: function (mssv, callback) {
        return db.query("delete from student where mssv=?", [mssv], callback);
    },
    updateStudent: function (mssv, student, callback) {
        return db.query("update student set hoten=?,diemtichluy=? where mssv=?", [student.hoten, student.diemtichluy, mssv], callback);
    }
};
module.exports = studentModel;