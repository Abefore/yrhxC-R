// pages/studentInfo_t/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
      // name:'liyanran',
      // phoneNumber:15931198765,
      // picList:[],
      // uid:10000001,
      // achives:{"10001":[true],"10002":[true,true],}
    },
    changeList:[],
    TabCur:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var uuid = JSON.parse(options.studentId)
    this.GetStudentInfo(uuid)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.UpdateInfo(this.data.info)
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
  UpdateInfo : function(students){
    let {achive, snycConfig} = require ("../../config/achiveCfg.js")
    var a1 =  snycConfig(students,0) //单板数据
    var a2 =  snycConfig(students,1) //双板数据
    var list = this.data.changeList
    list[0] = a1
    list[1] = a2
    this.setData({
      info:students,
      achiveList:list
    })
  },
  GetStudentInfo: function(uuid){
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'GetStudentInfo',
        uuid:uuid,
     
      }
    }).then((resp) => {
      wx.hideLoading()
      var students = resp.result.info
      this.setData({
        info:students
      })
      this.UpdateInfo(students)

    }).catch((e) => {
    
     wx.hideLoading()
    })
  },
  commitData: function(){
    wx.showLoading({
      title: '提交修改',
    })
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'CommitStudentAchives',
        uuid:this.data.info.uid,
        Achives:this.data.info.achives
      }
    }).then((resp) => {
     console.log(resp)
     wx.hideLoading()
     if(resp.result){
       wx.showToast({
         title: '修改成功',
       })
     }
    }).catch((e) => {
    
     wx.hideLoading()
    })
  },
  ShowDetails:function(e){
    this.setData({
      modalName: e.currentTarget.dataset.target,
      selectIndex:e.currentTarget.dataset.index
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  checkboxChange:function(e){
    console.log(e)
    var values = e.detail.value
    var data = this.data
    var achive = data.achiveList[data.TabCur][data.selectIndex]
    var info = data.info
    info.achives = info.achives?info.achives:[{},{}]
    for (let i = 0, lenI = achive.standard.length; i < lenI; ++i) {
      info.achives[data.TabCur][achive.uid] = info.achives[data.TabCur][achive.uid]?info.achives[data.TabCur][achive.uid]:[false]
      info.achives[data.TabCur][achive.uid][i] = values[i]?true:false
      achive.standard[i].done = values[i]?true:false
    }
    this.setData({
      info:info
    })
    // for (let index = 0; index < values.length; index++) {
    //   items[i].done = true   
    // }

  },
  tabSelect:function (e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,})
  }
})