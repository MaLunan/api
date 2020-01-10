// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let foodSchema= mongoose.Schema({
    goods_name:{ type:String,required:true },
    goods_price:{ type:String,required:true },
    goods_number:{ type:String,required:true },
    goods_weight:{ type:String,required:true },  //图片的路径  图片的base64数据
    goods_state:{ type:String,required:true },
    add_time:{ type:String,required:true },
    old_time:{ type:String,required:true },
    is_promote:{ type:String,required:true },
    goods_img:{ type:String,required:true },
},{versionKey: false})
let  foodModel = mongoose.model('foods',foodSchema)

module.exports = foodModel