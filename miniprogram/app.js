//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'relese-8g8jj45r259110b2',
        traceUser: true,
      })
    }

    // wx.getSystemInfo({
    //   success: (result) => {
    //     this.globalData.StatusBar = result.statusBarHeight;
    //     let custom = wx.getMenuButtonBoundingClientRect();
    //     this.globalData.Custom = custom
    //     this.globalData.CustomBar = custom.bottom + custom.top - result.statusBarHeight;
    //   },
    // })

    this.globalData = {
      user:{
        _id:'1',
        _openid:'1',
        bindStudents:[],
        phoneNumber:"",
        curStudentId:'',
        userInfo:{},
        setData:function(data){
          this._id = data._id ? data._id : this._id
          this._openid = data._openid ? data._openid : this._openid
          this.bindStudents = data.bindStudents ? data.bindStudents : this.bindStudents
          this.userInfo = data.userInfo ? data.userInfo : this.userInfo
          this.phoneNumber = data.phoneNumber ? data.phoneNumber : this.phoneNumber
          this.curStudentId = data.curStudentId ? data.curStudentId : this.curStudentId

        },
        
      },
      filePath:'cloud://cloud1-8gah9v4cd85e78f5.636c-cloud1-8gah9v4cd85e78f5-1307734597/',
    }
    // this.globalData.user.setData({_id:'22'})
    // console.log(12312)
    
  }
})
