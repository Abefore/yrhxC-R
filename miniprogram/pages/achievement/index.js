const app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  properties:{
    studentInfo:Object,
   },
  data:{
    userInfo:{}
  },
  lifetimes:{
    created:function(){
      console.log("created")
     
    },
    attached:function(){
      console.log("attached")
    
      var info =  getApp().globalData.user
      this.setData({userInfo:info.userInfo})
    }
  },
  methods:{
    showAllClass:function(){
      var c = JSON.stringify(this.data.studentInfo)
      wx.navigateTo({
        url: '/pages/allClasses/index?studentInfo=' + JSON.stringify(this.data.studentInfo),
      })
    },
    changePhone:function(){

    },
  }
})