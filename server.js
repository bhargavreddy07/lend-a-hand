const exp=require("express")
const app=exp()
const mclient=require('mongodb').MongoClient
require("dotenv").config()
const DBurl=process.env.DATABASE_CONNECTION_URL
const path=require("path")
app.use(exp.static(path.join(__dirname,'./build')))
mclient.connect(DBurl)
.then((client)=>{
   let dbobj=client.db("Database")
   let usercollectionobj=dbobj.collection("usercollection")
   let productcollectionobj=dbobj.collection("productcollection")
   app.set("usercollectionobj",usercollectionobj)
   app.set("productcollectionobj",productcollectionobj)
   console.log("connection with database established")

})
.catch(err=>console.log("error occured in database connection",err))

const userapp=require('./Apis/userapi')
const productapp=require('./Apis/productapi')
app.use('/user-api',userapp)
app.use('/product-api',productapp)

app.use("*",(request,response)=>{
response.sendFile(path.join(__dirname,'./build/index.html'))
})

app.use((request,response,next)=>{
    response.send({message:`path ${request.url} is invalid`})
})
app.use((error,request,response,next)=>{
    response.send({message:`${error.message}` })
})
let port=process.env.PORT
app.listen(port,()=>console.log("server is active..."))