
const nodemailer = require("nodemailer");

//  创建邮件的发送对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '723325701@qq.com', // 邮箱账号
      pass: 'ognvakvkzigzbcib' // 邮箱smtp验证码
    }
  });
 let img='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2627047110,1799495614&fm=26&gp=0.jpg'

  
  module.exports={
    sendMail(mail,code){
      console.log(mail)
       //创建邮件内容
        let info={
          from: '"随笔笔记" <723325701@qq.com>', // sender address
          to: mail, // list of receivers
          subject: "您的注册信息", // Subject line
          // text: "Hello world?", // plain text body
          html: `<div>
                    <h3>欢迎注册你的验证码是:${code}</h3>
                    
                    <img src='${img}'>
                </div>` // html body
        }
       return new Promise((resolve,reject)=>{
        transporter.sendMail(info,(err,data)=>{
          console.log(err)
          if(err){
            reject({err:-3,msg:'邮件发送失败'})
          }else{
            resolve({err:0,msg:"发送ok"})
          }
        })
       })
      
    }
  }
 
