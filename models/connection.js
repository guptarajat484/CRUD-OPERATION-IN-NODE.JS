const mysql=require('mysql')

const my = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"student"

})

module.exports=my