const express = require('express')
const router = express.Router()
const Food = require('../control/foodController')
const multer  = require('multer')
const upload=multer({})
//查询接口（分页查询  分类查询 关键字查询）
router.get('/getFoods',(req,res)=>{
  let page=Number(req.query.page)||1
  let pageSize=Number(req.query.pageSize)||2
  Food.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.get('/getFoodsByType',(req,res)=>{
  let {foodType} = req.query 
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  Food.getByType(foodType,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.get('/getFoodsByKw',(req,res)=>{
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  let kw = req.query.kw 
  Food.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//id查询
router.get('/getByID',(req,res)=>{
  let _id = req.query._id 
  Food.getByID(_id)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.get('/delFood',(req,res)=>{
  let {foodId}=req.query
  Food.del(foodId)
  .then((data)=>{
   
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})
//添加数据
router.post('/addFood',(req,res)=>{
  let {goods_name,goods_price,goods_number,goods_weight,goods_state,add_time,old_time,is_promote,goods_img} = req.body 
  Food.add(goods_name,goods_price,goods_number,goods_weight,goods_state,add_time,old_time,is_promote,goods_img)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.get('/updateFood',(req,res)=>{
  let {_id,goods_name,goods_price,goods_number,goods_weight,goods_state,add_time,old_time,is_promote,goods_img} = req.query 
  Food.update(_id,goods_name,goods_price,goods_number,goods_weight,goods_state,add_time,old_time,is_promote,goods_img)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
//上传图片
router.post('/upfile',upload.single('hh'),(req,res)=>{
  console.log(req.file)
  res.send(req.file)
  
})
module.exports = router