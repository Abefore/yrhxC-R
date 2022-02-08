const getOpenId = require('./getOpenId/index')
const updateUserInfo = require('./updateUserInfo/index')
const searchStudents = require('./searchStudents/index')
const getPhoneNumber = require('./getPhoneNumber/index')
const addStudent = require('./addStudent/index')
const changeStudentId = require('./changeStudentId/index')
const GetStudentInfo = require('./GetStudentInfo/index')
const CommitStudentAchives = require('./CommitStudentAchives/index')
const GetAllClasses = require('./GetAllClasses/index')

// ------------
const getMiniProgramCode = require('./getMiniProgramCode/index')
const createCollection = require('./createCollection/index')
const selectRecord = require('./selectRecord/index')
const updateRecord = require('./updateRecord/index')
const sumRecord = require('./sumRecord/index')
// -----------




// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context)
    case 'getMiniProgramCode':
      return await getMiniProgramCode.main(event, context)
    case 'createCollection':
      return await createCollection.main(event, context)
    case 'selectRecord':
      return await selectRecord.main(event, context)
    case 'updateRecord':
      return await updateRecord.main(event, context)
    case 'sumRecord':
      return await sumRecord.main(event, context)
    case 'updateUserInfo':
      return await updateUserInfo.main(event, context)
    case 'searchStudent':
      return await searchStudents.main(event, context)
    case 'GetStudentInfo':
      return await GetStudentInfo.main(event, context)
    case 'getPhoneNumber':
      return await getPhoneNumber.main(event, context)
    case 'addStudent':
      return await addStudent.main(event, context)
    case 'changeStudentId':
      return await changeStudentId.main(event, context)
    case 'CommitStudentAchives':
      return await CommitStudentAchives.main(event, context)
    case 'GetAllClasses':
      return await GetAllClasses.main(event,context)
      
  }
}
