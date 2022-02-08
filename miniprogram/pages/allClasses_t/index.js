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
    // console.log(options)
    // var studentInfo = JSON.parse(options.studentInfo)
    var classList = [
      {title:'训练营1期',
        students:[10000001,10000002,10000003,10000004,10000005,10000006,]
      },
      {title:'训练营2期',
        students:[10000001,10000002,10000003,10000004,10000005,10000006,]
      },
      {title:'训练营3期',
        students:[10000001,10000002,10000003,10000004,10000005,10000006,]
      },

    ]
    this.setData({
      classList:classList
    }) 
    this.getAllClassesInfo()
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

  getAllClassesInfo: function(){
    wx.showLoading({
      title: '获取训练营信息',
    })
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'GetAllClasses',
        
      }
    }).then((resp) => {
     console.log(resp)
     wx.hideLoading()
     this.setData({
      classList:resp.result.data
     })
    //  if(resp.result){
    //    wx.showToast({
    //      title: '修改成功',
    //    })
    //  }
    }).catch((e) => {
    
     wx.hideLoading()
    })
  },

  showDetail:function(e){
    console.log(e)
    var data = this.data.classList[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '/pages/allStudentsInClass_t/index?studentInfo=' + JSON.stringify(data.students),
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