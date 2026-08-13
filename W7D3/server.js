const express=require("express")
const fs=require("fs")
const path=require("path")
const app=express()
app.use(express.static(__dirname))
function logger(req,res,next){
    let timestamp=new Date()
    let log=`${req.method} ${req.url} ${timestamp}\n`
    fs.appendFile("log.txt",log,err=>{
        if(err) throw err
    })
    next()
}
app.use(logger)
app.route("/").get((req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"))
})
app.route("/about").get((req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"))
})
app.route("/contact").get((req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"))
})
app.listen(8000,()=>{
    console.log("server running!")
})