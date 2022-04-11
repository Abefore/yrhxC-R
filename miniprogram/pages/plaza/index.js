// pages/plaza/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PageCur: 'active',
    envId : '',
    studentInfo:{},
    getPhone:false,
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
    var phoneNumber = 0
    try {
      phoneNumber = wx.getStorageSync('phoneNumber')
      if (phoneNumber == 0){ //没有授权手机号码
          this.setData({
            getPhone:true
          })
      }else{
        user.setData({phoneNumber : phoneNumber})
       
      }
    } catch (error) {
      
    }
    this.checkStudent()
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
    var target = e.currentTarget.dataset.cur
    if(this.data.PageCur ==  target){
      return
    }
    // 检查手机号
    var user = getApp().globalData.user
   

    if (target == "achievement"){
    
   
      if (Object.keys(user.userInfo).length === 0) {//没有用户数据
        wx.showLoading({
          title: '',
        })
        wx.getUserProfile({
          desc: '完善会员资料',
          success:(res)=>{
            wx.showToast({
              title: '授权成功',
            })
      
            var user = getApp().globalData.user
            user.setData({userInfo:res.userInfo})
            
           
          
              
            this.checkStudent()
            
            this.UpdateUserInfo()
       
          },
          complete:function(e){
            wx.hideLoading()
          }
        })
        return
      }
    }
      
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    
    
    
     
     
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

  checkStudent:function(){
    var user = getApp().globalData.user
    // if (Object.keys(user.userInfo).length != 0){
    //   return
    // }
    if (user.phoneNumber.length == 0 && user.curStudentId.length == 0){
      return
    }
     
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
          phoneNumber:user.phoneNumber, //test可以修改这里的
          curStudentId:user.curStudentId
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
    
  },

  UpdateUserInfo(){
    var user = getApp().globalData.user
    // wx.showLoading({
    //   title: '',
    // })
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'updateUserInfo',
        data: {userInfo : user.userInfo,
                // phoneNumber:user.phoneNumber,
               }
      }
    }).then((resp) => {
    
     wx.hideLoading()
   }).catch((e) => {
     
     wx.hideLoading()
    })
  },

  getPhoneNumber:function(e){
    console.log(e)
    if (e.detail.errMsg !== "getPhoneNumber:ok"){
      return
    }
    wx.showLoading({
      title: '',
    })
      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        data: {
          weRunData: wx.cloud.CloudID(e.detail.cloudID),//
          type: 'getPhoneNumber'
        }
      }).then(res => {
        wx.hideLoading()
        wx.showToast({
          title: '授权成功',
        })
        var user = getApp().globalData.user
        user.setData({phoneNumber : res.result})
        this.setData({
          getPhone:false
        })
        this.checkStudent()
        try{
          // 数据存本地
          wx.setStorageSync('phoneNumber', res.result)
        }catch{

        }
        
        
       
        
      }).catch(err => {
        console.log(err);
      });
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