// 云函数入口文件
const cloud = require('wx-server-sdk')
const getStudent = require('./getStudent/index')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  
  switch (event.type) {
    case 'getStudent':
      return await getStudent.main(event, context)
  }

}