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
          wx.navigateTo({
            url: '/pages/addStudent/index',
          })
      }else{
        wx.showLoading({
          title: '',
        })
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
    },},
  methods:{
    onLoad:function(){
      console.log("onload")
      // this.towerSwiper('swiperList');
    },
    loadSuccess:function(){
      wx.hideLoading()
    }

      
  }
})