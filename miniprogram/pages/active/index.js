Component({
  options: {
    addGlobalClass: true,
  },
  data:{
    cardCur: 0,
    classList:[
      {name:'基础训练营1期'},
      {name:'基础训练营2期'}
    ],
    desList:[
      {des1:"走出家门认识更广阔的世界",
      des2:'不宅在家里，不面对手机，电视。开始人生新的探索'
    },
      {des1:"学会独立",
      des2:'第一次独自出行，自己穿衣，打饭......'
    },
      {des1:"自理能力",
      des2:'在教练和生活老师的指导下整理装备，物品，打包行囊。'
    },
      {des1:"社交能力",
      des2:'在与新朋友与滑雪教练的相处中学会沟通协作'
      },
      {des1:"Get到炫酷的滑雪新技能，开启冠军之路",
      des2:'专业的教学团队，科学的课程体系，真正获得滑雪技能。'
      }
    ],
    
  },

  methods:{
    onLoad:function(){
     
    },

    

     // 导航功能
  showMapToSchool(){
    // let plugin = requirePlugin('routePlan')
    // let key = 'LCMBZ-O6ICW-2FHR7-RS24D-G3XSZ-42B5W'
    // let referer = '源仁SNOW'
    // let endPoint = JSON.stringify({
    //   'name':'西部长青滑雪场',
    //   'latitude':38.030824,
    //   'longitude':114.296661
    // });
    // let path = 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    // wx.navigateTo({
    //   url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    // });
    wx.openChannelsActivity({
      finderUserName:"sphO151ge1hoJnz",
      feedId:"export/UzFfAgtgekIEAQAAAAAA7eURT_wnYwAAAAstQy6ubaLX4KHWvLEZgBPE04EMI1lWbfP9zNPgMJp_afGXmKX4Dc4vZF_v4o7r",
      success:function(e){
        console.log(e)
      },
      fail:function(e){
        console.log(e)
      },
      complete:function(e){
        console.log(e)
      },
    })
  },
  gzsucces:function(e){
    console.log(e)
  },
  gzfeil:function(e){
    console.log(e)
  }
  },
 

})