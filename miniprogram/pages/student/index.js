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
    achiveList:[ ],
    
 
    searchResp:[],
    TabCur:0,
  },
  lifetimes:{
    created:function(){
      console.log("created")
     
    },
    attached:function(){
      console.log("attached")
      let {achive, snycConfig} = require ("../../config/achiveCfg.js")
    
      var a1 =  snycConfig(this.data.studentInfo,0) //单板数据
      var a2 =  snycConfig(this.data.studentInfo,1) //双板数据
    var list = []
    list[0] = a1
    list[1] = a2
      this.setData({
      
        achiveList:list
      })
     
       
      
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
    tabSelect:function (e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,})
    },
    
   

    
  

    
    // downLoad:function(){
    //   wx.cloud.downloadFile({
    //     fileID:'cloud://cloud1-8gah9v4cd85e78f5.636c-cloud1-8gah9v4cd85e78f5-1307734597/default/test.mp4',
    //     success: res => {
    //       // 返回临时文件路径
    //       console.log(res.tempFilePath)
    //       wx.saveImageToPhotosAlbum({
    //              filePath:res.tempFilePath,
    //              success:(res)=> { 
    //               console.log(res);
    //              },
    //              fail:(res)=>{
    //               console.log(res);
    //              }
    //             })
    //     },
    //     fail: console.error
    //   })
     
    // },
    // saveImg(e){
  
  
    //       //用户需要授权
    //     wx.getSetting({
    //       success: (res) => {
    //       if (!res.authSetting['scope.writePhotosAlbum']) {
    //         wx.authorize({
    //         scope: 'scope.writePhotosAlbum',
    //         success:()=> {
    //           // 同意授权
    //           this.downLoad();
    //         },
    //         fail: (res) =>{
    //           console.log(res);
    //         }
    //         })
    //       }else{
    //         // 已经授权了
    //         this.downLoad();
    //       }
    //       },
    //       fail: (res) =>{
    //       console.log(res);
    //       }
    //     })  
      
      
    //  },
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
 

  },
  
})