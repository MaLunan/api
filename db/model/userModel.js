// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let userSchema= mongoose.Schema({
    us:{ type:String,required:true },
    ps:{ type:String,required:true },
    token:{type:String,default:null}
})
let  userModel = mongoose.model('users',userSchema)

module.exports = userModel