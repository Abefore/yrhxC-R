// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env:'cloud1-8gah9v4cd85e78f5'}
)

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  console.log('paycallback',event)
  await db.collection('competitionData').where({
    _id:event.outTradeNo
  }).update({
    data:{
      order:event.outTradeNo
    }
  })
  return {'errcode':0}
}