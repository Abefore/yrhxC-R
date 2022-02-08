// 云函数入口文件
const cloud = require('wx-server-sdk')
const commitCom = require('./CommitCompetition/index')
const getConfig = require('./GetConfig/index')
const pay = require('./Pay/index')

cloud.init(
  {env:'cloud1-8gah9v4cd85e78f5'}
)

// 云函数入口函数
exports.main = async (event, context) => {
  
  switch (event.type) {
    case 'commitData':
      return await commitCom.main(event, context)
    case 'getConfig':
      return await getConfig.main(event, context)
    case 'pay':
      return await pay.main(event, context)
  }
  console.log("123331")

}