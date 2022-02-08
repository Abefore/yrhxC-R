const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 查找学生信息云函数入口函数
exports.main = async (event, context) => {
  var studentInfo = {};
  try {
    const db = cloud.database();
    if(event.uuid ){
      await db.collection('students').where({
        uid:event.uuid
      }).get().then(res=>{
        
        if (res.data.length > 0) {
          studentInfo = res.data[0]
        }
      })
    }
    
  } catch (error) {
    
  };
  return {info : studentInfo}
}