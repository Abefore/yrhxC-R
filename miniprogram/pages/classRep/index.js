// pages/classRep/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgIndex:0,
    imageFileID:[],
    picPath:getApp().globalData.filePath + "students/",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var studentInfo = JSON.parse(options.studentInfo)
    this.setData({
      studentInfo:studentInfo
    })
    var imageFileID = []
    for (let index = 0; index < studentInfo.picList.length; index++) {
      const element = studentInfo.picList[index];
      imageFileID[index] = this.data.picPath +studentInfo._id +'/' +element
    }
    this.setData({imageFileID:imageFileID})
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
  prePic:function(){
    var index = this.data.imgIndex
    index = index - 1
    if (index < 0){
      index = 0
    }
    this.setData({
      imgIndex:index
    })
  },
  nextPic:function(){
    var index = this.data.imgIndex
    index = index + 1
    if (index >= this.data.imageFileID.length){
      index = this.data.imageFileID.length - 1
    }
    this.setData({
      imgIndex:index
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})