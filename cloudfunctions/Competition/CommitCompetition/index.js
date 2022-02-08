const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 比赛报名函数入口
exports.main = async (event, context) => {

  try {
    const db = cloud.database();
    var id =""
    const userDatas = await db.collection('competitionData').where({
      idCard:event.data.idCard
    }).get()
    if (userDatas.data.length == 0) {
      await db.collection('competitionData').add({
        data: event.data
      }).then(res =>{
        id = res._id
      })
    } else {
      var user = userDatas.data[0]
      if(user.hasOwnProperty('order')){
        return false
      }else{
        await db.collection('competitionData').where({
          idCard:event.data.idCard
        }).update({
          data: event.data
        }).then(res =>{
          id = user._id
        })
      }
    }
    
    
  } catch (error) {
    return false
  };
  return id
}