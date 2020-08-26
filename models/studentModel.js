const conn = require('./connection')
const format = require('string-format')

var student = function () {
    this.add = function (data, callback) {

        var qu = format("insert into student(fname,lname) value ('{0}','{1}')", data.fname, data.lname)

        conn.query(qu, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                callback(true)
            }

        })

    }

    this.getall = function (callback) {
        var qu = format("select * from student ")
        conn.query(qu, (err, data) => {
            if (err) {
                console.log(err)
                callback(false)
            }
            callback(data)
        })




    }
    this.update = function (Id, callback) {
        var qu = format("select * from student where Id=" + Id)
        conn.query(qu, (err, data) => {
            if (err) {
                console.log(err)
            }
            callback(data)
        })

    }
    this.updateStudent = function (data, callback) {
      
        var qu = format("update student set fname='{0}', lname='{1}' where Id=" + data.Id,data.fname,data.lname);
        
        conn.query(qu, (err, result) => {
            if (err) {
                console.log(err + "model")
                callback(false)
            }
            callback(result)
            
        })

    }
    this.delete = function (data, callback) {
        var qu = "delete from student where Id=" + data;
        conn.query(qu, (err) => {
            if (err) {
               
                callback(false)
            }
            callback(true + "model")


        })
    }
}
module.exports = new student()