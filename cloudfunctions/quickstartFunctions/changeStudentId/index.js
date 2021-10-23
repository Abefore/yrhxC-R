const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 更新玩家信息云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  const wxContext = cloud.getWXContext()
  try {
    const db = cloud.database()

    db.collection('user').where({
      _openid:wxContext.OPENID 
    }).update({
      data:{
        curStudentId: event.id
      },
      success:function(res){ 
        console.log(res.data)
      }
    })

    
  
    return {
      success: true
    }
  } catch (e) {
    return{
      success: false,
      data:e
    }
  }
 
}