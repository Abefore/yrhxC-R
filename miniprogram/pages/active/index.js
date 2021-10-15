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