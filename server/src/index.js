const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const {auth} = require('./middlewares/authMiddleware')



const app = express()

const PORT = 3030

//db config
mongoose.connect('mongodb://127.0.0.1:27017/furnitures')
.then(()=>console.log('successfully connected to db'))
.catch((err)=>console.log('error while trying to connect to DB'))

//Middleware Configurations
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(cors())
app.use(auth)


// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', '*')
//     res.setHeader('Access-Control-Allow-Headers', '*')

//     next();
// })


console.log('works')

// app.get('/',(req,res,next)=>{
//     res.send('retfull api')
// })

app.use(routes)

app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`))