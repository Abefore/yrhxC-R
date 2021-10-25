// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    envId: '',
   
    showBtn:true,
    loginPic : "/images/loginLogo.png"//"cloud://yuanrensnow-t-0glbnu1oa9b533a4.7975-yuanrensnow-t-0glbnu1oa9b533a4-1306430517/instructor/Sketchpad.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        envId :options.envId
      })
      this.getOpenId()
  },

  getUserInfo(){
   wx.getUserProfile({
     desc: '完善会员资料',
     success:(res)=>{
     
      //  this.setData({
         
      //    user:{userInfo:res.userInfo}
      //  })
       var user = getApp().globalData.user
       user.setData({userInfo:res.userInfo})
       this.setData({
        showBtn : false
      })
      //  this.UpdateUserInfo()
      //  this.jumpToPlaza()
     }
   })
  },

  UpdateUserInfo(){
    var user = getApp().globalData.user
    wx.showLoading({
      title: '',
    })
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

  jumpToPlaza(){
      
       wx.redirectTo({
     
        url: `/pages/plaza/index?envId=${this.data.envId}`,
      })
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    })
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
   
      var user = getApp().globalData.user
      user.setData(resp.result.userInfo)
  
     wx.hideLoading()
     this.jumpToPlaza()
   }).catch((e) => {
      this.setData({
        // showUploadTip: true
      })
     wx.hideLoading()
    })
    
    
  },
// h获取电话号码
 getPhoneNumber : function(e){
      console.log(e)
      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        data: {
          weRunData: wx.cloud.CloudID(e.detail.cloudID),
          type: 'getPhoneNumber'
        }
      }).then(res => {
        var user = getApp().globalData.user
        user.setData({phoneNumber : res.result})
        try{
          // 数据存本地
          wx.setStorageSync('phoneNumber', res.result)
        }catch{

        }
        
        this.UpdateUserInfo()
        this.jumpToPlaza()
        
      }).catch(err => {
        console.error(err);
      });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})