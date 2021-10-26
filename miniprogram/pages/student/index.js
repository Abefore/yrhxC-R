Component({
  options: {
    addGlobalClass: true,
  },
  properties:{
    studentInfo:Object,
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
    imgIndex:0,
    imageFileID:[],
    imageFilePath:[],
    
 
  searchResp:[],
  },
  lifetimes:{
    created:function(){
      console.log("created")
     
    },
    attached:function(){
      console.log("attached")
    
      var info = this.data.studentInfo
      if (Object.keys(info).length === 0){
          this.setData(
            {showSearch:true}
          )
         
      }else{
        if(info.picList && info.picList.length > 0){
          // wx.showLoading({
          //   title: '',
          // })
          this.getAllPath()
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
     
  
    },
    detached:function(){
      console.log("detached")
     
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
    loadSuccess:function(e){
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
          this.checkStudent()
          try{
            // 数据存本地
            wx.setStorageSync('phoneNumber', res.result)
          }catch{
  
          }
          
          
         
          
        }).catch(err => {
          console.log(err);
        });
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
              studentInfo:curdata,
              showSearch:false
            })
            this.getAllPath()
          }
  
        }).catch((e) => {
        
         wx.hideLoading()
        })
      }
    },
    changeCurId:function(id){

      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          
          type: 'changeStudentId',
          id:id
        }
    }).then((resp) => {
      console.log(resp)
    })
    },

    getAllPath:function(){
      var info = this.data.studentInfo
      var imageFileID = []
        for (let index = 0; index < info.picList.length; index++) {
          const element = info.picList[index];
          imageFileID[index] = this.data.picPath +info._id +'/' +element
        }
        this.setData({imageFileID:imageFileID})
        wx.cloud.getTempFileURL({
          fileList:imageFileID
        }).then(res=>{
          console.log(res.fileList)
          var imageFilePath = []
          for (let index = 0; index < res.fileList.length; index++) {
            const element = res.fileList[index];
            if(element.status == 0){
              imageFilePath[index] = element.tempFileURL
            }
            
          }
          this.setData({
            imageFilePath:imageFilePath
          })
        }).catch(err => {

        })
    },
    downLoad:function(){
      wx.cloud.downloadFile({
        fileID:'cloud://cloud1-8gah9v4cd85e78f5.636c-cloud1-8gah9v4cd85e78f5-1307734597/default/test.mp4',
        success: res => {
          // 返回临时文件路径
          console.log(res.tempFilePath)
          wx.saveImageToPhotosAlbum({
                 filePath:res.tempFilePath,
                 success:(res)=> { 
                  console.log(res);
                 },
                 fail:(res)=>{
                  console.log(res);
                 }
                })
        },
        fail: console.error
      })
     
    },
    saveImg(e){
  
  
          //用户需要授权
        wx.getSetting({
          success: (res) => {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success:()=> {
              // 同意授权
              this.downLoad();
            },
            fail: (res) =>{
              console.log(res);
            }
            })
          }else{
            // 已经授权了
            this.downLoad();
          }
          },
          fail: (res) =>{
          console.log(res);
          }
        })  
      
      
     },
    //  saveImg1(url){
    //   wx.getImageInfo({
    //    src: url,
    //    success:(res)=> {
    //     let path = res.path;
    //     wx.saveImageToPhotosAlbum({
    //      filePath:path,
    //      success:(res)=> { 
    //       console.log(res);
    //      },
    //      fail:(res)=>{
    //       console.log(res);
    //      }
    //     })
    //    },
    //    fail:(res)=> {
    //     console.log(res);
    //    }
    //   })
    //  },
    //  slideChangeEnd:function(e){
    //   this.setData({
    //     imgIndex:e.detail.current
    //   })
    //  },
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
  },
  
})