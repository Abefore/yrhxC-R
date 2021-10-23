const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 查找学生信息云函数入口函数
exports.main = async (event, context) => {
  var list = [];
  var state = false
  var id = ""
  try {
    const db = cloud.database();
    await db.collection('students').where({
      phoneNumber:parseInt( event.phoneNumber)
    }).get().then(res=>{
      list = res.data
      
    })
    console.log('add 1' + id)
    if (list.length === 0){
      await db.collection('students').add({
       data:{
        name:event.name,
        phoneNumber:parseInt( event.phoneNumber)
       },      
      }).then(res => {
        console.log(res)
        state = true
        id = res._id
      })
      console.log('add 2' + id)
      
    }else{
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (element.name == event.name){
          state = false
          break
        }else{
          state = true
        }
      }
      if (state){
        await db.collection('students').add({
          data:{
           name:event.name,
           phoneNumber:parseInt( event.phoneNumber)
          },
        
         }).then(res => {
          console.log(res)
          state = true
          id = res._id
        })
         console.log('add 3' + id)
      }
      console.log('add 4' + id)
       
    }
    return {state: state,
      id:id
    }
  } catch (error) {
    return {state: state}
    console.log('add 5' + id)
  };
  // return {students : list}
}