var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/1923');
mongoose.connect('mongodb://localhost/houtai',{ useNewUrlParser: true,useUnifiedTopology:true });
// 连接本地数据库
var db = mongoose.connection;
// 数据库连接对象
db.on('error',()=>{
  console.log('数据库连接失败')
});
db.on('open', function() {
  console.log('数据库连接成功')
});