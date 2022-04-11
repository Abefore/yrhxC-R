const achive = [[
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
      {_id:"achie-14",uid:10014,	level:2, title :	"后刃横滑降", standard:	[{"des":"后刃推坡站姿","score":2},{"des":"两脚重心均衡分配","score":2},{"des":"匀速下滑","score":2},{"des":"熟练刹车","score":2}],	state:false},
      {_id:"achie-15",uid:10015,	level:2, title :	"前刃横滑降", standard:	[{"des":"前刃推坡站姿","score":2},{"des":"两脚重心均衡分配","score":2},{"des":"匀速下滑","score":2},{"des":"熟练刹车","score":2}],	state:false},
      {_id:"achie-16",uid:10016,	level:2, title :	"后刃J型弯", standard:	[{"des":"站姿转换","score":2},{"des":"下半身主要发力","score":2},{"des":"弯形流畅","score":2}],	state:false},
      {_id:"achie-17",uid:10017,	level:2, title :	"前刃J型弯", standard:	[{"des":"站姿转换","score":2},{"des":"下半身主要发力","score":2},{"des":"弯形流畅","score":2}],	state:false},
      {_id:"achie-18",uid:10018,	level:2, title :	"后刃Z字滑行", standard:	[{"des":"保持站姿","score":2},{"des":"左右脚发力均衡","score":2},{"des":"左右脚控制力相近","score":2},{"des":"均匀控速","score":2}],	state:false},
      {_id:"achie-19",uid:10019,	level:2, title :	"前刃Z字滑行", standard:	[{"des":"保持站姿","score":2},{"des":"左右脚发力均衡","score":2},{"des":"左右脚控制力相近","score":2},{"des":"均匀控速","score":2}],	state:false},
   
],[
      {_id:"achie2-1",uid:20001,	level:1, title :	"全副武装", standard:	[{des:"完整穿戴滑雪装备",score:2}]	,	state:false},
      {_id:"achie2-2",uid:20002,	level:1, title :	"准备就绪", standard:	[{"des":"完成一次热身","score":2},{"des":"完成一次拉伸","score":2}],	state:false},
      {_id:"achie2-3",uid:20003,	level:1, title :	"雪道礼仪", standard:	[{"des":"如何持板","score":2},{"des":"正确停留雪道","score":2},{"des":"事故处理","score":2}],	state:false},
      {_id:"achie2-4",uid:20004,	level:1, title :	"认识雪场", standard:	[{"des":"雪道难度分辨","score":2},{"des":"分析滑雪路线","score":2}],	state:false},
      {_id:"achie2-5",uid:20005,	level:1, title :	"公共交通", standard:	[{"des":"了解魔毯","score":2},{"des":"了解缆车","score":2}],	state:false},
      {_id:"achie2-6",uid:20006,	level:1, title :	"安全摔倒与站起", standard:	[{"des":"完成一次前刃摔倒","score":2},{"des":"完成一次后刃摔倒","score":2},{"des":"完成一次顺势翻滚","score":2}],	state:false},
      {_id:"achie2-7",uid:20007,	level:1, title :	"基础站姿", standard:	[{"des":"身体与雪板保持一致","score":2},{"des":"双脚平均分配重量","score":2},{"des":"下半身灵活弯曲","score":2},{"des":"视线与滑行方向一致","score":2}],	state:false},
      {_id:"achie2-8",uid:20008,	level:1, title :	"移动雪板", standard:	[{"des":"原地转向","score":2},{"des":"平地移动","score":2}],	state:false},
      {_id:"achie2-9",uid:20009,	level:1, title :	"初闯雪道", standard:	[{"des":"侧向登坡","score":2},{"des":"八字蹬坡","score":2},{"des":"直滑降","score":2}],	state:false},
      {_id:"achie2-10",uid:20010,	level:1, title :	"犁式入门", standard:	[{"des":"犁式直滑降","score":2},{"des":"大小转换犁式直滑降","score":2},{"des":"犁式制动","score":2}],	state:false},
      {_id:"achie2-11",uid:20011,	level:1, title :	"犁式转弯", standard:	[{"des":"平地转腿","score":2},{"des":"犁式C弯","score":2},{"des":"犁式J弯","score":2},{"des":"连续犁式转弯","score":2}],	state:false},
      {_id:"achie2-12",uid:20012,	level:1, title :	"半犁式转弯", standard:	[{"des":"小犁式转弯","score":2},{"des":"半犁式转弯","score":2},{"des":"高级半犁式转弯","score":2},{"des":"平行式刹车 ","score":2}],	state:false},
      {_id:"achie2-13",uid:20013,	level:1, title :	"平行式转弯入门", standard:	[{"des":"横滑降","score":2},{"des":"斜滑降","score":2},{"des":"基础平行式","score":2}],	state:false},
      {_id:"achie2-14",uid:20014,	level:1, title :	"平行式转弯进阶", standard:	[{"des":"标枪弯","score":2},{"des":"强力犁式转弯","score":2},{"des":"高级道平行式","score":2}],	state:false},
   
]]

const snycConfig = function(info,ski_type){
      ski_type = ski_type == 1? 1 : 0
      var achiveState = info.achives? info.achives:[{},{}]
      achiveState = achiveState[ski_type]
      var achiveList_p = achive[ski_type]//this.data.achiveList
        for (let index = 0; index < achiveList_p.length; index++) { 
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
        return  achiveList_p
}
module.exports = {
  achive,
  snycConfig
}