const express = require('express');
const { appendFile } = require('fs');
const mongoose = require('mongoose')

const routes = require('./routes/userRoutes')

//------- db connection -------
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://ravimude:ajay7777@cluster0.thi8yzl.mongodb.net/studentdata?retryWrites=true&w=majority')
.then(()=>{ console.log( ' connected with db')})
.catch( ()=>{ console.log(' not connected with db')})

const port = process.env.port || 3000
const app = express()

app.use('/',routes)
app.listen(port, ()=>{ console.log(' server is runing on port ')})
