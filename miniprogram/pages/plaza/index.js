// pages/plaza/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PageCur: 'active',
    envId : '',
    studentInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // this.setData({
      //   userInfo: JSON.parse( options.userInfo),
      //   envId: options.envId
      // })
      
    // 初始化towerSwiper 传已有的数组名即可
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var user = getApp().globalData.user
    // if(user.curStudentId.length == 0){
      wx.showLoading({
        title: '',
      })
      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          type: 'searchStudent',
          phoneNumber:user.phoneNumber
        }
      }).then((resp) => {
        wx.hideLoading()
        var students = resp.result.students
        if(students.length == 0){
          //todo 弹出添加学生窗口
        }else{
          var  curdata = students[0]
          if(user.curStudentId.length == 0){
           
            this.changeCurId(curdata._id)
          }

          
          for (let index = 0; index < students.length; index++) {
            const element = students[index];
            if(element._id == user.curStudentId){
              curdata = element
              break
            }            
          }
          user.setData({curStudentId:curdata._id,
            bindStudents:students
          })
          this.setData({
            studentInfo:curdata
          })
          
        }

      }).catch((e) => {
      
       wx.hideLoading()
      })
    // }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var user = getApp().globalData.user
    if (user.bindStudents.length >0){
      this.setData({
        studentInfo:user.bindStudents[0]
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  NavChange(e) {
  
    
      this.setData({
        PageCur: e.currentTarget.dataset.cur
      })
  
      // wx.navigateTo({
      //   url: '/pages/addStudent/index',
      // })
  },

  changeCurId:function(id){

    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        
        type: 'changeStudentId',
        id:id
      }
  }).then((resp) => {
    console.log(resp)
  })
},

  onShareAppMessage() {
    return {
      title: '猿人滑雪',
      // imageUrl: '/images/share.jpg',
      path: 'pages/active/index'
    }
  },
  /**
   * 用户点击右上角分享
   */

})