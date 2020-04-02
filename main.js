const express = require('express')
const app = express()
const ejs = require('ejs')
const fs = require('fs')
const xml2js = require('xml2js')

var temp
const port = 3000
app.set('view engine','ejs')
app.use(express.static('views'))

const parser = new xml2js.Parser()

fs.readFile(__dirname + '/msg.xml',(err,data)=>{
    if(err){
        console.log("err2")
    }

    parser.parseStringPromise(data)
        .then((result)=>{
         console.log(result)
           temp = result
        })
        .catch((err)=>{
            console.log("err")
        })
})


    app.get('/xml',(err,res,req)=>{
        if(err)
        console.log("")
        res.render(temp)
})



app.get('/',(req,res,err)=>{
    if(err)
    console.log(err)

    res.render('index.ejs')
})





app.listen(port)
