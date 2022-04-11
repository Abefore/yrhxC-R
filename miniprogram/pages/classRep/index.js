// pages/classRep/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgIndex:0,
    imageFileID:[],
    picPath:getApp().globalData.filePath + "students/",
    videoPath:'cloud://dev-cloud-1gd6721e8e5c39e6.6465-dev-cloud-1gd6721e8e5c39e6-1307734597/default/class1.mp4',
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
      imageFileID[index] = this.data.picPath +studentInfo.uid +'/' +element
    }
    this.setData({
      imageFileID:imageFileID,
      videoPath:this.data.picPath +studentInfo.uid +'/'+ 'col.mp4'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.imageFileID.length > 0){
      wx.showLoading({
        title: '加载图片',
      })
    }
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
    wx.showLoading({
      title: '加载图片',
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
    wx.showLoading({
      title: '加载图片',
    })
  },
  loadImageFinish:function(e){
    wx.hideLoading()
  },
  hideLoading:function(){
    wx.hideLoading()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})