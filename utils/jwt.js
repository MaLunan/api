
const jwt = require('jsonwebtoken')
const sceret='sjdflksajfl;asjfiowxflasjkf;ajlksjflasjfalsjkflasjf;laskj'
module.exports={
  createToken(data){
    //创建一个token
    var data=data||{}
    data.ctime=(new Date()).getTime() //存储创建时间
    let token =jwt.sign(data,sceret)
    return token
  },
  verifyToken(token){
    // 验证token 对不对  对返回数据 真 token不对 返回 null 为假
     let result =null 
     try {
       result =jwt.verify(token,sceret)
     } catch (error) {
       
     } 
     console.log(result)
     return result  
  }
}