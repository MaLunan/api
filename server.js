const express = require('express')
const path = require('path')
const db = require('./db/connect')
const Jwt = require('./utils/jwt')
const User = require('./db/model/userModel')
// 启动服务器的同时连接数据库
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// 静态资源目录
app.use('/',express.static(path.join(__dirname,'./www')))
// 路由分发

const UserRouter = require('./router/userRouter')
const FoodRouter = require('./router/foodRouter')
app.use('/admin/user',UserRouter)
app.use('/admin/food',(req,res,next)=>{
  let token = req.query.token
  // 用户有咩有传token 
  if(!token){return res.send({err:-998,msg:'token缺失'})}
  // 验证token 是不是真的
  let data = Jwt.verifyToken(token)
  if(data){
    // token 合法 
    console.log(data)
    let _id=data._id 
    // 判断超时 
    let nowDate=(new Date()).getTime()
    if(nowDate-data.ctime>=data.ot){
      return res.send({err:-996,msg:'token超时'})
    }
    // 判断id和token是否匹配
    User.find({_id,token})
    .then((data)=>{
      if(data.length===1){
        next()
      }else{
        res.send({err:-997,msg:'token失效'})
      }
    })
  }else{
    res.send({err:-999,msg:'token非法'})
  }
},FoodRouter)

app.listen(3000,()=>{
  console.log('服务器启动')
})