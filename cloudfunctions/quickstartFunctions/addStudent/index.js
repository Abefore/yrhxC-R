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
    if (list.length === 0){
      await db.collection('students').add({
       data:{
        name:event.name,
        phoneNumber:parseInt( event.phoneNumber)
       },
       success: function(res){
        return {success : true}
       }
      })
      
    }else{
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (Element.name == event.name){
          return {success : false,
            des:'学生已存在'
          }
        }
      }
      await db.collection('students').add({
        data:{
         name:event.name,
         phoneNumber:parseInt( event.phoneNumber)
        },
        success: function(res){
         return {success : true}
        }
       })
    }
  } catch (error) {
    
  };
  // return {students : list}
}