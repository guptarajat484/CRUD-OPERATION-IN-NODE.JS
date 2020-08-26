const express = require('express')
const router = express.Router()
const studentModel = require('../models/studentModel')

router.get("/", (req, res) => {
    res.render('index')
})

router.post("/add", (req, res) => {
    studentModel.add(req.body, function (err, result) {
        if (err) {
            console.log(err)
        }

        console.log(result)
        res.render('index')
    })

})

router.get("/show", (req, res) => {
    studentModel.getall((result) => {
       
        res.render('show', { stud: result })
    })
})

router.get("/update", (req, res) => {
    Id = req.query.id
   
    studentModel.update(Id, (result) => {
        
        res.render('update', { record: result[0] })
    })
})

router.post("/updatestudent", (req, res) => {
   
   
    studentModel.updateStudent(req.body, (err, status) => {
        if (err) {
            console.log(err)
        }
      
       res.redirect("/show")
    })



})
router.get("/delete", (req, res) => {
    data=req.query.id

    studentModel.delete(data, (result) => {
        console.log(result)
    })
    res.redirect("/show")
})





module.exports = router