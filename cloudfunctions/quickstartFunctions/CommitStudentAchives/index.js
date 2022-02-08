const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 更新学生成就数据云函数入口函数
exports.main = async (event, context) => {

  try {
    const db = cloud.database();
    if(event.uuid ){
      await db.collection('students').where({
        uid:event.uuid
      }).update({
        data:{
          achives:event.Achives
        }
        
      })
        
    }else{
      return false
    }
    
  } catch (error) {
    return false
  };
  return true
}