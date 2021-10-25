Component({
  options: {
    addGlobalClass: true,
  },
  properties:{
    studentInfo:Object
  },
  data:{
    hasBind:true,
    searchTips:'请根据联系电话查找',
    picPath:getApp().globalData.filePath + "students/",
    bindStudents:[],
    avatar:'/images/student/head.png',
    sex : 1,
    showSearch:false,
    hasPhone:false,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
 
  searchResp:[],
  },
  lifetimes:{
    created:function(){
      console.log("created")
      // this.towerSwiper('swiperList');
    },
    attached:function(){
      console.log("attached")
      // this.setData({
      //   bindStudents:getApp().globalData.user.bindStudents,
      // })
      var info = this.data.studentInfo
      if (Object.keys(info).length === 0){
          this.setData(
            {showSearch:true}
          )
         
      }else{
        if(info.picList && info.picList.length > 0){
          wx.showLoading({
            title: '',
          })
        }
       
      }
      var user = getApp().globalData.user
      if (user.phoneNumber.length == 0 ){
        this.setData(
          {hasPhone:false}
        )
      }else{
        this.setData(
          {hasPhone:true}
        )
      }
     
      // this.towerSwiper('swiperList');
    },
    detached:function(){
      console.log("detached")
      // this.towerSwiper('swiperList');
    },
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log("show")
      var user = getApp().globalData.user
      if (user.bindStudents.length >0){
        this.setData({
          studentInfo:user.bindStudents[0],
          showSearch:false
        })
        
      }else{
        this.setData({
          showSearch:true
        })
      }
      
    },},
  methods:{
    onLoad:function(){
      console.log("onload")
      // this.towerSwiper('swiperList');
    },
    loadSuccess:function(){
      wx.hideLoading()
    },
    searchStudent:function(){
      wx.navigateTo({
        url: '/pages/addStudent/index',
      })
    },
    getPhoneNumber(e){
      console.log(e)
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
            hasPhone:true
          })
          try{
            // 数据存本地
            wx.setStorageSync('phoneNumber', res.result)
          }catch{
  
          }
          
          
         
          
        }).catch(err => {
          console.log(err);
        });
    }

      
  },
  checkStudent:function(){
    var user = getApp().globalData.user
    if (user.phoneNumber.length == 0){
      return
    }
     if(user.curStudentId.length == 0){
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
          phoneNumber:user.phoneNumber
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
    }
  },
})