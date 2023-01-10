const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const user_routes = express()

user_routes.set('view engine','ejs')
user_routes.set('views','./views/users')
user_routes.use(bodyParser.urlencoded({extended:false}))
user_routes.use(bodyParser.json())

const storage = multer.diskStorage({ 
     destination: function(req,file,cb){
          cb(null,path.join(__dirname,'../public/userImage'))

     },
     filename:function(req,file,cb){
          const name  = Date.now()+'-'+file.originalname
          cb(null , name)
        
     }
})

const upload = multer({ storage:storage})



const userController = require('../controllers/userController')


user_routes.get('/register', userController.loadRegister)
user_routes.post('/register', upload.single('image'),userController.insertUser)

module.exports =user_routes 
 