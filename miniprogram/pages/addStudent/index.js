// pages/addStudent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      sexConfig:[
        {
          id:1,
          des:'男'
        },
        {
          id:2,
          des:'女'
        }
      ],
      selectIndex : 1,
      birthdate:"2018-01-01",
      name:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  inputChange: function(e){
    console.log(e)
    this.setData({
      name:e.detail.value
    })
},

  changeSelect: function(e){
      console.log(e)
      this.setData({
        selectIndex:e.currentTarget.dataset.index
      })
  },
  dateChange: function(e){
    this.setData({
      birthdate:e.detail.value
    })
  },
  cancel: function(){
    wx.navigateBack()
  },
  commit : function(e){
    if (this.data.name == "" ){
      wx.showToast({
        title: '姓名不能为空',
      })
    }else{
      var user = getApp().globalData.user
      wx.showLoading({
        title: '',
      })
      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        data: {
          weRunData: wx.cloud.CloudID(e.detail.cloudID),
          type: 'addStudent',
          name:this.data.name,
          phoneNumber: user.phoneNumber
        }
      }).then((res) => {
        wx.hideLoading()
      })

      // wx.navigateBack()
    }
   
  }
})