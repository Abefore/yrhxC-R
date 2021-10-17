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
    // modalName:null
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
  //   [
  //     {
  //     name:"咖喱",
  //     pic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",//https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg
  //     complete:10,
  //     achievement:[],
  //     honor:["xxxx比赛冠军","xxxxxb比赛亚军"]
  //   },
  //   {name:"图图",
  //     pic:"https://z3.ax1x.com/2021/07/28/WoQH5q.jpg",
  //     complete:10,
  //     achievement:[3,5,7],
  //     honor:["乌鲁瓦图冲浪赛冠军","xxx比赛亚军"]
  //   },
  // ],
  searchResp:[],
  },
  lifetimes:{
    created:function(){
      console.log("created")
      // this.towerSwiper('swiperList');
    },
    attached:function(){
      console.log("attached")
      this.setData({
        bindStudents:getApp().globalData.user.bindStudents,
      })
      // this.towerSwiper('swiperList');
    },
    detached:function(){
      console.log("detached")
      // this.towerSwiper('swiperList');
    },
  },

  methods:{
    onLoad:function(){
      console.log("onload")
      // this.towerSwiper('swiperList');
    },
   

      showModal(e) {
        this.setData({
          modalName: e.currentTarget.dataset.target,
          // 打开弹窗的时候初始化数据
          searchTips:'请根据联系电话查找',
          searchResp:[],
          duplicateResp:[],
        })
      },
      hideModal(e) {
        this.setData({
          modalName: null
        })
      },
      searchStudentsByPhoneNumber(input){
        console.log(input)
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
            phoneNumber:this.data.searchPhoneNumber
          }
        }).then((resp) => {
          var students = resp.result.students

          this.data.searchState = true
          let duplicate = this.checkDuplicate(resp.result.students)
          this.setData({
            searchState: true,
            searchResp:resp.result.students,
            duplicateResp:duplicate
                    })
         
          if (resp.result.students.length == 0) {
            this.setData({
              searchTips:'没有找到'
            })
          }else{
            this.setData({
              searchTips:'查询到'+resp.result.students.length+'个结果'
            })
          }
          wx.hideLoading()
        
       }).catch((e) => {
         
         wx.hideLoading()
        })
      },
      saveInputInfo(e){
          this.setData({
            searchPhoneNumber: e.detail.value
          })
      },
      bindStudents(e){
        console.log(e)
        var list = e.detail.value.selectStudent
        for (let index = 0; index < list.length; index++) {
          const element = list[index];
          var student = this.data.searchResp[element]
          var students = this.data.bindStudents
          students.push(student)
          this.setData({
            bindStudents:students
          })
          getApp().globalData.user.setData({
            bindStudents:students
          })
          console.log(student)
        }
        this.uploadUserInfo()
        this.hideModal()
      },
      uploadUserInfo(){
        wx.showLoading({
          title: '',
        })
       wx.cloud.callFunction({
          name: 'quickstartFunctions',
          config: {
            env: this.data.envId
          },
          data: {
            type: 'updateUserInfo',
            data: {bindStudents : this.data.bindStudents}
          }
        }).then((resp) => {
        
         wx.hideLoading()
       }).catch((e) => {
         
         wx.hideLoading()
        })
      },
      checkDuplicate(data){
          let ret = []
          for (let index_s = 0; index_s < data.length; index_s++) {
            const search = data[index_s];
            ret[index_s] = true
            for (let index_b = 0; index_b < this.data.bindStudents.length; index_b++) {
              const bind = this.data.bindStudents[index_b];
            
              if (bind._id == search._id) {
                ret[index_s] = false
              }
            }
            
          }
          return ret
      },
  }
})