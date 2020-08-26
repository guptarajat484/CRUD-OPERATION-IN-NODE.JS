const express=require('express')
const path= require('path')
const ejs =require('ejs')
const appRoute=require('./router/index')

const app =express()


app.set('view engine',"ejs")
app.set('views',path.join(__dirname,"views"))
app.use(express.urlencoded({extended:false}))
app.use("",appRoute)



app.listen(8989,function(){
    console.log("Server is running on port 8989")
})