const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 查找学生信息云函数入口函数
exports.main = async (event, context) => {
  var list = [];
  try {
    const db = cloud.database();
    await db.collection('students').where({
      phoneNumber:parseInt( event.phoneNumber)
    }).get().then(res=>{
      list = res.data
      // if (res.data.length == 0) {}
    })
  } catch (error) {
    
  };
  return {students : list}
}