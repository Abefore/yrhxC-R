// pages/addStudent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      sexConfig:[
         '男',
          '女'
      ],
      levelConfig:[
        "专业组",
        "大众组"
      ],
      competitions:[
        "高山123",
        "pingd",
      ],
     selectData:{
      sex:0,
      level:0,
      competitions:[],
     },
      notice:"12312312312312312\n312312",
      name:'',
      age:0,
      idCard:0,
      phone:0,
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
    this.getConfig()
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
  inputChangeName: function(e){
    console.log(e)
    this.setData({
      name:e.detail.value
    })
  },
  inputChangeAge: function(e){
    console.log(e)
    this.setData({
      age:e.detail.value
    })
  },
  inputChangeIdCard: function(e){
    console.log(e)
    this.setData({
      idCard:e.detail.value
    })
  },
  inputChangePhoneNumber: function(e){
    console.log(e)
    this.setData({
      phone:e.detail.value
    })
  },

  changeSelectSex: function(e){
      console.log(e)
      var data = this.data.selectData
      data.sex = e.currentTarget.dataset.index
      this.setData({
        selectData:   data

      })
  },
  changeSelectCompetition: function(e){
    console.log(e)
    var data = this.data.selectData
    var comp = data.competitions
    comp[e.currentTarget.dataset.index] = true,
    this.setData({
      selectData:   data

    })
},
changeSelectLevel: function(e){
  console.log(e)
  var data = this.data.selectData
  data.level = e.currentTarget.dataset.index
  this.setData({
    selectData:   data

  })
  
},
  dateChange: function(e){
    this.setData({
      birthdate:e.detail.value
    })
  },



  commitData:function(e){
    var _data = this.data
    var commit = {}
    if (_data.name == "" ){
      wx.showToast({
        title: '姓名不能为空',
      })
      return
    }else{
      commit.name = _data.name
    }
    if (_data.age == 0 ){
      wx.showToast({
        title: '请填写年龄',
      })
      return
    }else{
      commit.age = _data.age
    }
    if (_data.idCard == 0 ){
      wx.showToast({
        title: '请填写身份证号码',
      })
      return
    }else{
      commit.idCard = _data.idCard
    }
    if (_data.phone == 0 ){
      wx.showToast({
        title: '请填写手机号码',
      })
      return
    }else{
      commit.phone = _data.phone
    }
    var  _selectData = _data.selectData
    if (_selectData.competitions.length == 0 ){
      wx.showToast({
        title: '请选择参加的项目',
      })
      return false
    }else{
      commit.competitions = []
      for (let index = 0; index < _selectData.competitions.length; index++) {
        const element = _selectData.competitions[index];
        if (element){
          commit.competitions.push(_data.competitions[index])
        }
      }
    }
    commit.sex = _data.sexConfig[parseInt(_selectData.sex)]
    commit.level = _data.levelConfig[parseInt(_selectData.level)]
    // return
    {
      
      wx.showLoading({
        title: '',
      })
      wx.cloud.callFunction({
        name: 'Competition',
        config: {
          env: this.data.envId
        },
        data: {
          
           type: 'commitData',
           data:commit
        }
      }).then((res) => {
        wx.hideLoading()
        
        if(res.result){
          // wx.showToast({
          //   title: '报名成功',
          // })
          this.payTo(res.result)
        }else{
            wx.showToast({
              title: '提交失败',
              icon:'error'
            })
        }
      })
    }
  },

  payTo: function(id){
    
      wx.showLoading({
        title: '加载中。。。',
      })
      let that = this;
      var uuid = id

      
      wx.cloud.callFunction({
        name: 'Competition',
        config: {
          env: this.data.envId
        },
       
        data: {
          type: 'pay',
      
          orderid: "" + uuid,
          money: this.data.payMoney,//支付金额
          nonceStr:uuid//调用自己的uuid函数
        },
        success(res) {
          wx.hideLoading({
            complete: (res) => {},
          })
          console.log("提交成功", res.result)
          //创建自己的未支付订单

  
          that.pay(res.result)
        },
        fail(res) {
          wx.hideLoading({
            complete: (res) => {},
          })
          console.log("提交失败", res)
        }
      })
    
  },
  pay : function(parm){
    wx.requestPayment({
      nonceStr: parm.payment.nonceStr,
      package: parm.payment.package,
      paySign: parm.payment.paySign,
      signType: parm.payment.signType,
      timeStamp: parm.payment.timeStamp,
      success (res) {
        console.log('pay success', res)
      },
      fail (err) {
        console.log('pay fail', err)
      }
    })
  },
  getConfig  : function(){
    
      
      wx.showLoading({
        title: '',
      })
      wx.cloud.callFunction({
        name: 'Competition',
        config: {
          env: this.data.envId
        },
        data: {
          
           type: 'getConfig',  
           
        }
      }).then((res) => {
        wx.hideLoading()
        if(res.result){
          var str = res.result.notice
          var str1 = str.replace(/\\n/g,"\n")
          this.setData({
            sexConfig:res.result.sexConfig,
           levelConfig:res.result.levelConfig, 
           competitions:res.result.comConfig,
           notice:"" + str1,
           payMoney:res.result.money,
          })
        }
       
      })
    
  }
  
})