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
    achiveList:[
      {_id:"achie-1",uid:10001,	level:1, title :	"全副武装", standard:	[{des:"完整穿戴滑雪装备",score:2}]	,	state:false},
      {_id:"achie-2",uid:10002,	level:1, title :	"准备就绪", standard:	[{"des":"完成一次热身","score":2},{"des":"完成一次拉伸","score":2}],	state:false},
      {_id:"achie-3",uid:10003,	level:1, title :	"雪道礼仪", standard:	[{"des":"如何持板","score":2},{"des":"正确停留雪道","score":2},{"des":"事故处理","score":2}],	state:false},
      {_id:"achie-4",uid:10004,	level:1, title :	"认识雪场", standard:	[{"des":"雪道难度分辨","score":2},{"des":"分析滑雪路线","score":2}],	state:false},
      {_id:"achie-5",uid:10005,	level:1, title :	"公共交通", standard:	[{"des":"了解魔毯","score":2},{"des":"了解缆车","score":2}],	state:false},
      {_id:"achie-6",uid:10006,	level:1, title :	"安全摔倒与站起", standard:	[{"des":"完成一次前刃摔倒","score":2},{"des":"完成一次后刃摔倒","score":2},{"des":"完成一次顺势翻滚","score":2}],	state:false},
      {_id:"achie-7",uid:10007,	level:1, title :	"基础站姿", standard:	[{"des":"身体与雪板保持一致","score":2},{"des":"双脚平均分配重量","score":2},{"des":"下半身灵活弯曲","score":2},{"des":"视线与滑行方向一致","score":2}],	state:false},
      {_id:"achie-8",uid:10008,	level:1, title :	"移动雪板", standard:	[{"des":"单脚原地抬板转圈","score":2},{"des":"单脚蹬坡","score":2}],	state:false},
      {_id:"achie-9",uid:10009,	level:1, title :	"单脚平地滑行", standard:	[{"des":"使用板底滑行","score":2},{"des":"后脚登出重心在前脚","score":2},{"des":"滑行时重心在两脚中间","score":2},{"des":"保持基础站姿","score":2},{"des":"连续滑行","score":2}],	state:false},
      {_id:"achie-10",uid:10010,	level:1, title :	"单脚后刃推坡", standard:	[{"des":"后刃推坡站姿","score":2},{"des":"两脚重心均衡分配","score":2},{"des":"匀速下滑","score":2},{"des":"熟练刹车","score":2}],	state:false},
      {_id:"achie-11",uid:10011,	level:1, title :	"单脚前刃推坡", standard:	[{"des":"前刃推坡站姿","score":2},{"des":"两脚发力均衡","score":2},{"des":"匀速下滑","score":2},{"des":"熟练刹车","score":2}],	state:false},
      {_id:"achie-12",uid:10012,	level:1, title :	"单脚后刃J型弯", standard:	[{"des":"站姿转换","score":2},{"des":"下半身主要发力","score":2},{"des":"转弯流畅","score":2}],	state:false},
      {_id:"achie-13",uid:10013,	level:1, title :	"单脚前刃J型弯", standard:	[{"des":"站姿转换","score":2},{"des":"下半身主要发力","score":2},{"des":"转弯流畅","score":2}],	state:false},
      {_id:"achie-14",uid:10014,	level:1, title :	"后刃横滑降", standard:	[{"des":"后刃推坡站姿","score":2},{"des":"两脚重心均衡分配","score":2},{"des":"匀速下滑","score":2},{"des":"熟练刹车","score":2}],	state:false},

    ],
    
 
    searchResp:[],
  },
  lifetimes:{
    created:function(){
      console.log("created")
     
    },
    attached:function(){
      console.log("attached")
    
      var info = this.data.studentInfo
      var achiveState = info.achives? info.achives:{"10001":[true],"10002":[true,true],}
      var achiveList_p = this.data.achiveList
        for (let index = 0; index < achiveList_p.length; index++) { QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
          const element = achiveList_p[index];
          if(achiveState[element.uid]){
            var count = 0
            for (let index = 0; index < element.standard.length; index++) {
              const stan = element.standard[index];
              if(achiveState[element.uid][index]){ 
                stan.done = true
                count++
              }
            }
            if(count == element.standard.length){
              element.state = true
            }
          }
          
          
        }
        this.setData({
          achiveList:achiveList_p
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