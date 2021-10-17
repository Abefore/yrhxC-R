const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  const wxContext = cloud.getWXContext()
  // var phoneNumber = event.
  
  // try {
  //   const db = cloud.database()
  //   const userDatas = await db.collection('user').where({
  //   _openid:wxContext.OPENID
  //   }).get()
  //   if (userDatas.data.length == 0) {
  //     await db.collection('user').add({
  //       data: userData
  //     })
  //   } else {
  //     userData = userDatas.data[0]
  //   }
  //   // userInfo = userInfos.data.length == 0 ? {} :userInfos.data[0]
  // } catch (e) {
    
  // }
  
  return {
    // openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
    userInfo: userData,
  }
}