// pages/allClasses/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList:[{
      title:'基础训练营1期'
    }],
    studentInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var studentInfo = JSON.parse(options.studentInfo)
    this.setData({
      studentInfo:studentInfo
    })
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
  showDetail:function(e){
    console.log(e)
    var data = this.data.classList[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '/pages/classRep/index?studentInfo=' + JSON.stringify(this.data.studentInfo),
    })
    // wx.navigateTo({
    //   url: '/pages/classRep/index',
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})