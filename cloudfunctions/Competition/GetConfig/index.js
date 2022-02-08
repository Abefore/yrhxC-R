const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 比赛配置函数入口
exports.main = async (event, context) => {

  try {
    const db = cloud.database();
    
    const userDatas = await db.collection('competitionConfig').where({
      isOpen:true
    }).get()
    if (userDatas.data.length == 0) {
      return false
    } else {
      return userDatas.data[0]
    }
    
    
  } catch (error) {
    return false
  };
  return false
}