addLayer("r",
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),
            reality_unlocked:zero,
            in_day:zero,in_night:one,
            days:one,

            map_Lab_1F:[
            [0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,3,1,2,2,2,2,2,2,2,2,2,0],
            [0,2,1,1,1,1,1,1,1,1,1,2,0],
            [0,2,1,2,2,2,2,2,2,2,1,2,0],
            [0,2,1,2,1,1,1,1,1,2,1,2,0],
            [0,2,1,2,1,2,2,2,1,2,1,2,0],
            [0,2,1,2,1,2,1,2,1,2,1,2,0],
            [0,2,1,2,1,1,1,2,1,2,1,2,0],
            [0,2,1,2,2,2,2,2,1,2,1,2,0],
            [0,2,1,1,1,1,1,1,1,2,1,2,0],
            [0,2,2,2,2,2,2,2,2,2,1,1,4],
            [0,0,0,0,0,0,0,0,0,0,0,0,0],
            ],
            map_City_0_0:[
            [1,10,1,6,1,6,1,6,1,6],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,6,1,6,1,6,1,6],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,6,1,7,1,6,1,6],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,6,1,6,1,6,1,6],
            [1,1,1,1,1,1,1,1,1,1],
            [1,5,1,1,1,1,1,1,1,11],
            [1,1,1,1,1,1,1,1,1,1],
            ],
            map_City_1_0:[
            [1,1,1,1,1,1,1,35,1,1],
            [1,14,14,14,14,14,1,1,1,1],
            [1,14,15,15,15,18,1,1,1,28],
            [1,14,15,16,15,14,1,1,1,1],
            [1,14,15,16,15,14,1,1,1,1],
            [1,14,15,16,15,14,1,1,1,1],
            [1,14,15,15,15,14,1,1,1,1],
            [1,14,14,17,14,14,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,12,1,1,1,1,1,1,1,1],
            ],
            map_City_0_1:[
            [1,30,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [13,1,1,1,1,1,1,1,1,41],
            [1,1,1,1,1,1,1,1,1,1],
            ],
            map_City_1_1:[
            [1,1,39,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [29,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,32,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,45],
            [1,1,1,1,1,1,1,1,1,1],
            [1,31,1,1,1,1,1,1,1,1],
            ],
            map_City_2_0:[
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,37],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,36,1,1],
            ],
            map_City_0_2:[
            [1,1,1,1,1,1,1,1,43,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [42,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            ],
            map_City_1_2:[
            [1,1,1,1,1,1,1,1,49,1],
            [1,1,1,53,53,1,1,1,1,1],
            [1,1,1,53,53,1,1,1,1,1],
            [1,1,52,52,52,52,1,1,1,1],
            [1,1,52,52,52,52,1,1,1,1],
            [1,51,51,51,51,51,51,1,1,1],
            [1,51,51,54,51,51,51,1,1,1],
            [46,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,44,1],
            ],
            map_City_2_1:[
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [38,1,1,1,1,1,1,1,1,47],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,40,1,1,1,1,1,1,1],
            ],
            map_City_2_2:[
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [48,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,50,1],
            ],
            map_Andy_Burg_Home:[
            [0,0,0,0,0,0],
            [0,1,1,1,1,0],
            [8,1,1,1,9,0],
            [0,1,1,1,1,0],
            [0,0,0,0,0,0],
            ],
            map_A101:[
            [14,14,14,14,],
            [14,1 ,1 ,14,],
            [14,34,1 ,33,],
            [14,1 ,1 ,14,],
            [14,14,14,14,],
            ],
            map_Office_1F:[
                [14,14,14,14,14,14,14,14,14],
                [14,21,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,14,14,14,1 ,1 ,1 ,1 ,20],
                [14,99,99,14,1 ,1 ,1 ,1 ,14],
                [14,99,99,22,1 ,1 ,1 ,1 ,14],
                [14,99,99,14,1 ,1 ,1 ,1 ,14],
                [14,14,14,14,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,14,14,14,1 ,1 ,1 ,1 ,14],
                [14,99,99,14,1 ,1 ,1 ,1 ,14],
                [14,99,99,23,1 ,1 ,1 ,1 ,14],
                [14,99,99,14,1 ,1 ,1 ,1 ,14],
                [14,14,14,14,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,14,14,14,19,14,14,14,14],
            ],
            map_Office_2F:[
                [14,14,14,14,14,14,14,14,14],
                [14,24,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,1 ,1 ,1 ,1 ,1 ,1 ,1 ,14],
                [14,14,25,25,14,14,1 ,1 ,14],
                [99,99,99,99,99,14,1 ,1 ,14],
                [99,99,99,99,99,14,1 ,1 ,14],
                [99,99,99,99,99,14,1 ,1 ,14],
                [99,99,99,99,99,14,1 ,1 ,14],
                [99,99,99,99,99,14,1 ,1 ,14],
                [99,99,99,99,99,14,26,27,14],
            ],
            map_Fire:[
            [52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,51,51,55,51,51,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,51,51,56,51,51,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,61,62,63,58,57,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,51,51,60,51,51,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,51,51,59,51,51,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,52,],
            [52,52,52,52,52,52,52,64,52,52,52,52,52,52,52,],
            ],

            player_in_map:zero,player_x:six,player_y:six,
            body_touch_times:zero,
            has_key_A102:zero,
        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    update(diff)
    {
        player.r.player_x=player.r.player_x
        player.r.player_y=player.r.player_y
    },
    row: 1,
    layerShown()
    {
        return false
    },
})
addLayer("Lab1F",//0
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 12,
        cols: 13,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(0)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Lab_1F[xx][yy]==0 || player.r.map_Lab_1F[xx][yy]==2)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_Lab_1F[xx][yy]==0)
                {
                    tmpcolor='#483C32'
                }
                if(player.r.map_Lab_1F[xx][yy]==1)
                {
                    if(layers.Lab1F.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_Lab_1F[xx][yy]==2)
                {
                    tmpcolor='#00FF00'
                }
                if(player.r.map_Lab_1F[xx][yy]==3)
                {
                    if(1)
                    tmpcolor='#FFFF00'
                    else
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Lab_1F[xx][yy]==4)
                {
                    tmpcolor='#ADD8E6'
                }
            }
            jss.backgroundColor=`${tmpcolor}`
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(xx.eq(1) && yy.eq(1))
            {
                alert("?????? ! ?????? ! ?????? ! ??????????????????????????? !!!")
                return
            }
            if(xx.eq(10) && yy.eq(12))
            {
                player.r.player_in_map=one
                player.r.player_x=eight
                player.r.player_y=two
                showTab('City_0_0')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Lab_1F[xx][yy]==0)
            {
                return ''
            }
            if(player.r.map_Lab_1F[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_Lab_1F[xx][yy]==2)
            {
                return '?'
            }
            if(player.r.map_Lab_1F[xx][yy]==3)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Lab_1F[xx][yy]==4)
            {
                return '<h1>???</h1>'
            }
        },
    },
    tabFormat:{
        "Lab_1F":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['Lab1F',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(0) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_0_0",//1
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(1)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            // if(player.r.map_City_0_0[xx][yy]==0)
            // {
            //     return false
            // }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_0_0[xx][yy]==1)
                {
                    if(layers.City_0_0.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_0_0[xx][yy]==5)
                {
                    tmpcolor='#483C32'
                }
                if(player.r.map_City_0_0[xx][yy]==6 || player.r.map_City_0_0[xx][yy]==7)
                {
                    tmpcolor='brown'
                }
                if(player.r.map_City_0_0[xx][yy]==10 || player.r.map_City_0_0[xx][yy]==11)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_0_0[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(xx.eq(0) && yy.eq(3)){alert('????????? 22222 ?????? , ??????????????????');return}
            if(xx.eq(0) && yy.eq(5)){alert('????????? 53 ?????? , ??????????????????');return}
            if(xx.eq(0) && yy.eq(7)){alert('????????? QwQe308 ?????? , ??????????????????');return}
            if(xx.eq(0) && yy.eq(9)){alert('????????? ajchen ?????? , ??????????????????');return}
            
            if(xx.eq(2) && yy.eq(3)){alert('????????? Shinwmyste ?????? , ??????????????????');return}
            if(xx.eq(2) && yy.eq(5)){alert('????????? cyxw ?????? , ??????????????????');return}
            if(xx.eq(2) && yy.eq(7)){alert('????????? sxy ?????? , ??????????????????');return}
            if(xx.eq(2) && yy.eq(9)){alert('????????? qeq ?????? , ??????????????????');return}
            
            if(xx.eq(4) && yy.eq(3)){alert('????????? ?????? ?????? , ??????????????????');return}
            if(xx.eq(4) && yy.eq(5)){
                alert('????????? Andy Burg ??????')
                player.r.player_in_map=two
                player.r.player_x=n(2)
                player.r.player_y=n(1)
                showTab('Andy_Burg_Home')
                return
            }
            if(xx.eq(4) && yy.eq(7)){alert('????????? ?????? ?????? , ?????????????????????');return}
            if(xx.eq(4) && yy.eq(9)){alert('????????? ????????? ?????? , ??????????????????');return}

            if(xx.eq(6) && yy.eq(3)){alert('????????? ?????? ?????? , ??????????????????');return}
            if(xx.eq(6) && yy.eq(5)){alert('????????? ?????? ?????? , ??????????????????');return}
            if(xx.eq(6) && yy.eq(7)){alert('????????? ??????(???????) ?????? , ??????????????????');return}
            if(xx.eq(6) && yy.eq(9)){alert('????????? gt ?????? , ??????????????????');return}

            if(xx.eq(8) && yy.eq(1))
            {
                player.r.player_in_map=zero
                player.r.player_x=n(10)
                player.r.player_y=n(11)
                showTab('Lab1F')
                return
            }
            if(xx.eq(0) && yy.eq(1))
            {
                player.r.player_in_map=three
                player.r.player_x=n(8)
                player.r.player_y=n(1)
                showTab('City_1_0')
                return
            }
            if(xx.eq(8) && yy.eq(9))
            {
                player.r.player_in_map=four
                player.r.player_x=n(8)
                player.r.player_y=n(1)
                showTab('City_0_1')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_0_0[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_0_0[xx][yy]==5)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_0_0[xx][yy]==7)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_0_0[xx][yy]==10)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_0_0[xx][yy]==11)
            {
                return '<h1>???</h1>'
            }
        },
    },
    tabFormat:{
        "City_0_0":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_0_0',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(1) && player.r.in_day.gte(0.5)
    },
})
addLayer("Andy_Burg_Home",//2
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 5,
        cols: 6,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(2)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            // if(player.r.map_Andy_Burg_Home[xx][yy]==0)
            // {
            //     return false
            // }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'100px',
                width:'100px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_Andy_Burg_Home[xx][yy]==0)
                {
                    tmpcolor='brown'
                }
                if(player.r.map_Andy_Burg_Home[xx][yy]==1)
                {
                    if(layers.Andy_Burg_Home.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_Andy_Burg_Home[xx][yy]==8)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Andy_Burg_Home[xx][yy]==9)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_Andy_Burg_Home[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(xx.eq(2) && yy.eq(0))
            {
                player.r.player_in_map=one
                player.r.player_x=n(4)
                player.r.player_y=n(4)
                showTab('City_0_0')
                return
            }
            if(xx.eq(2) && yy.eq(4))
            {
                alert('????????????????????????????????????????????? , ????????????????????????')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Andy_Burg_Home[xx][yy]==0)
            {
                return ''
            }
            if(player.r.map_Andy_Burg_Home[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_Andy_Burg_Home[xx][yy]==8)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Andy_Burg_Home[xx][yy]==9)
            {
                return '<h1>???</h1>'
            }
        },
    },
    tabFormat:{
        "Andy Burg's Home":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['Andy_Burg_Home',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(2) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_1_0",//3
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(3)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_1_0[xx][yy]==14)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_1_0[xx][yy]==1)
                {
                    if(layers.City_1_0.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_1_0[xx][yy]==12)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_0[xx][yy]==14)
                {
                    tmpcolor='#973A28'
                }
                if(player.r.map_City_1_0[xx][yy]==15)
                {
                    tmpcolor='#973A2895'
                }
                if(player.r.map_City_1_0[xx][yy]==16)
                {
                    tmpcolor='#973A2880'
                }
                if(player.r.map_City_1_0[xx][yy]==17)
                {
                    tmpcolor='#973A28'
                }
                if(player.r.map_City_1_0[xx][yy]==18)
                {
                    tmpcolor='#973A28'
                }
                if(player.r.map_City_1_0[xx][yy]==28)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_0[xx][yy]==35)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_1_0[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(xx.eq(9) && yy.eq(1))
            {
                player.r.player_in_map=one
                player.r.player_x=n(1)
                player.r.player_y=n(1)
                showTab('City_0_0')
                return
            }
            if(xx.eq(7) && yy.eq(3))
            {
                player.r.player_in_map=five
                player.r.player_x=n(15)
                player.r.player_y=n(4)
                showTab('Office_1F')
                return
            }
            if(xx.eq(2) && yy.eq(5))
            {
                player.r.player_in_map=five
                player.r.player_x=n(3)
                player.r.player_y=n(7)
                showTab('Office_1F')
                return
            }
            if(player.r.map_City_1_0[xx][yy]==28)
            {
                player.r.player_in_map=n(7)
                player.r.player_x=n(2)
                player.r.player_y=n(1)
                showTab('City_1_1')
                return
            }
            if(player.r.map_City_1_0[xx][yy]==35)
            {
                player.r.player_in_map=n(9)
                player.r.player_x=n(8)
                player.r.player_y=n(7)
                showTab('City_2_0')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_1_0[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_1_0[xx][yy]==12)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_0[xx][yy]==17)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_0[xx][yy]==18)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_0[xx][yy]==28)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_0[xx][yy]==35)
            {
                return '<h1>???</h1>'
            }
            return ''
        },
    },
    tabFormat:{
        "City_1_0":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_1_0',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(3) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_0_1",//4
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(4)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            // if(player.r.map_City_0_1[xx][yy]==0)
            // {
            //     return false
            // }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_0_1[xx][yy]==1)
                {
                    if(layers.City_0_1.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_0_1[xx][yy]==13)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_0_1[xx][yy]==30)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_0_1[xx][yy]==41)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_0_1[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(xx.eq(8) && yy.eq(0))
            {
                player.r.player_in_map=one
                player.r.player_x=n(8)
                player.r.player_y=n(8)
                showTab('City_0_0')
                return
            }
            if(player.r.map_City_0_1[xx][yy]==30)
            {
                player.r.player_in_map=n(7)
                player.r.player_x=n(8)
                player.r.player_y=n(1)
                showTab('City_1_1')
                return
            }
            if(player.r.map_City_0_1[xx][yy]==41)
            {
                player.r.player_in_map=n(11)
                player.r.player_x=n(8)
                player.r.player_y=n(1)
                showTab('City_0_2')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_0_1[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_0_1[xx][yy]==13)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_0_1[xx][yy]==30)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_0_1[xx][yy]==41)
            {
                return '<h1>???</h1>'
            }
        },
    },
    tabFormat:{
        "City_0_1":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_0_1',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(4) && player.r.in_day.gte(0.5)
    },
})
addLayer("Office_1F",//5
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal",
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 17,
        cols: 9,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(5)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Office_1F[xx][yy]==14)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s',
                // borderWidth:'0px'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_Office_1F[xx][yy]==1)
                {
                    if(layers.Office_1F.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_Office_1F[xx][yy]==14)
                {
                    tmpcolor='#973A28'
                }
                if(player.r.map_Office_1F[xx][yy]==19)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Office_1F[xx][yy]==20)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Office_1F[xx][yy]==21)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Office_1F[xx][yy]==22)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Office_1F[xx][yy]==23)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Office_1F[xx][yy]==99)
                {
                    tmpcolor='#0F0F0F'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_Office_1F[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(xx.eq(16) && yy.eq(4))
            {
                player.r.player_in_map=three
                player.r.player_x=n(8)
                player.r.player_y=n(3)
                showTab('City_1_0')
                return
            }
            if(xx.eq(3) && yy.eq(8))
            {
                player.r.player_in_map=three
                player.r.player_x=n(2)
                player.r.player_y=n(6)
                showTab('City_1_0')
                return
            }
            if(xx.eq(1) && yy.eq(1))
            {
                player.r.player_in_map=six
                player.r.player_x=n(1)
                player.r.player_y=n(2)
                showTab('Office_2F')
                return
            }
            if(player.r.map_Office_1F[xx][yy]==22)
            {
                if(player.r.body_touch_times.gte(1.5))
                {
                    alert('????????????(A101)????????????'+'\n'+'???????????? , ?????????')
                    player.r.player_in_map=n(8)
                    player.r.player_x=n(2)
                    player.r.player_y=n(2)
                    showTab('A101')
                    return
                }
                alert('???????????????')
                return
            }
            if(player.r.map_Office_1F[xx][yy]==23)
            {
                alert('???????????????')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Office_1F[xx][yy]==14)
            {
                return ''
            }
            if(player.r.map_Office_1F[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_Office_1F[xx][yy]==19)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==20)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==21)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==22)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==23)
            {
                return '<h1>???</h1>'
            }
        },
    },
    tabFormat:{
        "Office 1F":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['Office_1F',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(5) && player.r.in_day.gte(0.5)
    },
})
addLayer("Office_2F",//6
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal",
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 17,
        cols: 9,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(6)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Office_2F[xx][yy]==14)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s',
                // borderWidth:'0px'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_Office_2F[xx][yy]==1)
                {
                    if(layers.Office_2F.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_Office_2F[xx][yy]==14)
                {
                    tmpcolor='#973A28'
                }
                if(player.r.map_Office_2F[xx][yy]==24)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Office_2F[xx][yy]==25)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_Office_2F[xx][yy]==99)
                {
                    tmpcolor='#0F0F0F'
                }
                if(player.r.map_Office_2F[xx][yy]==26)
                {
                    tmpcolor='#973A28'
                }
                if(player.r.map_Office_2F[xx][yy]==27)
                {
                    tmpcolor='#973A28'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_Office_2F[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(xx.eq(1) && yy.eq(1))
            {
                player.r.player_in_map=five
                player.r.player_x=n(1)
                player.r.player_y=n(2)
                showTab('Office_1F')
                return
            }
            if(player.r.map_Office_2F[xx][yy]==25)
            {
                alert('???????????????')
                return
            }
            if(player.r.map_Office_2F[xx][yy]==26)
            {
                alert('????????????????????????????????????'+'\n'+'?????????????????????'+'\n'+'?????????????????????????????????')
                return
            }
            if(player.r.map_Office_2F[xx][yy]==27)
            {
                alert('???????????????????????????'+'\n'+'????????????????????? , ??????????????????????????????'+'\n'+'????????????????????????????????????'+'\n'+'????????????A*t* B*g')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Office_2F[xx][yy]==14)
            {
                return ''
            }
            if(player.r.map_Office_2F[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_Office_2F[xx][yy]==24)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Office_2F[xx][yy]==25)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Office_2F[xx][yy]==26)
            {
                return '<h1>???1</h1>'
            }
            if(player.r.map_Office_2F[xx][yy]==27)
            {
                return '<h1>???2</h1>'
            }
        },
    },
    tabFormat:{
        "Office 2F":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['Office_2F',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(6) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_1_1",//7
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(7)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            // if(player.r.map_City_1_1[xx][yy]==0)
            // {
            //     return false
            // }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_1_1[xx][yy]==1)
                {
                    if(layers.City_1_1.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_1_1[xx][yy]==29)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_1[xx][yy]==31)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_1[xx][yy]==39)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_1[xx][yy]==45)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_1[xx][yy]==32)
                {
                    tmpcolor='red'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_1_1[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_1_1[xx][yy]==29)
            {
                player.r.player_in_map=n(3)
                player.r.player_x=n(2)
                player.r.player_y=n(8)
                showTab('City_1_0')
                return
            }
            if(player.r.map_City_1_1[xx][yy]==31)
            {
                player.r.player_in_map=n(4)
                player.r.player_x=n(1)
                player.r.player_y=n(1)
                showTab('City_0_1')
                return
            }
            if(player.r.map_City_1_1[xx][yy]==39)
            {
                player.r.player_in_map=n(10)
                player.r.player_x=n(8)
                player.r.player_y=n(2)
                showTab('City_2_1')
                return
            }
            if(player.r.map_City_1_1[xx][yy]==45)
            {
                player.r.player_in_map=n(12)
                player.r.player_x=n(7)
                player.r.player_y=n(1)
                showTab('City_1_2')
                return
            }
            if(player.r.map_City_1_1[xx][yy]==32)
            {
                if(player.r.body_touch_times.gte(2.5))
                {
                    alert('???????????????????????????'+'\n'+'??????????????????')
                }
                else if(player.r.body_touch_times.gte(1.5))
                {
                    alert('??????????????????'+'\n'+'[ ????????????????????? ]')
                    alert('???????????? ????????????(A101)')
                }
                else if(player.r.body_touch_times.gte(0.5))
                {
                    alert('????????????????????????')
                }
                else
                {
                    alert('???')
                    alert('???????????????????????????')
                    alert('?????????,????????????')
                }
                player.r.body_touch_times=player.r.body_touch_times.add(1)
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_1_1[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_1_1[xx][yy]==29)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_1[xx][yy]==31)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_1[xx][yy]==39)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_1[xx][yy]==45)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_1[xx][yy]==32)
            {
                return '<h1>???</h1>'
            }
        },
    },
    tabFormat:{
        "City_1_1":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_1_1',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(7) && player.r.in_day.gte(0.5)
    },
})
addLayer("A101",//8
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 5,
        cols: 4,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(8)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            // if(player.r.map_A101[xx][yy]==0)
            // {
            //     return false
            // }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'100px',
                width:'100px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_A101[xx][yy]==14)
                {
                    tmpcolor='#973A28'
                }
                if(player.r.map_A101[xx][yy]==1)
                {
                    if(layers.A101.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_A101[xx][yy]==33)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_A101[xx][yy]==34)
                {
                    tmpcolor='#973A28'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_A101[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_A101[xx][yy]==33)
            {
                player.r.player_in_map=n(5)
                player.r.player_x=n(5)
                player.r.player_y=n(4)
                showTab('Office_1F')
                return
            }
            if(player.r.map_A101[xx][yy]==34)
            {
                alert('???????????????????????? , ??????????????? :')
                alert('????????????????????????')
                alert('??????????????????????????????????????????')
                alert('??????????????? , ???????????????')
                alert('????????????')
                alert('?????? , A102????????????????????????')
                alert('??????????????????????????????')
                alert('????????????')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_A101[xx][yy]==14)
            {
                return ''
            }
            if(player.r.map_A101[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_A101[xx][yy]==33)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_A101[xx][yy]==34)
            {
                return '?????????'
            }
        },
    },
    tabFormat:{
        "A101":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['A101',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(8) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_2_0",//9
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(9)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_0[xx][yy]==14)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_2_0[xx][yy]==1)
                {
                    if(layers.City_2_0.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_2_0[xx][yy]==36)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_2_0[xx][yy]==37)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_2_0[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_0[xx][yy]==36)
            {
                player.r.player_in_map=n(3)
                player.r.player_x=n(1)
                player.r.player_y=n(7)
                showTab('City_1_0')
                return
            }
            if(player.r.map_City_2_0[xx][yy]==37)
            {
                player.r.player_in_map=n(10)
                player.r.player_x=n(7)
                player.r.player_y=n(1)
                showTab('City_2_1')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_0[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_2_0[xx][yy]==36)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_2_0[xx][yy]==37)
            {
                return '<h1>???</h1>'
            }
            return ''
        },
    },
    tabFormat:{
        "City_2_0":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_2_0',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(9) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_2_1",//10
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(10)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_1[xx][yy]==14)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_2_1[xx][yy]==1)
                {
                    if(layers.City_2_1.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_2_1[xx][yy]==38)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_2_1[xx][yy]==40)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_2_1[xx][yy]==47)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_2_1[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_1[xx][yy]==38)
            {
                player.r.player_in_map=n(9)
                player.r.player_x=n(7)
                player.r.player_y=n(8)
                showTab('City_2_0')
                return
            }
            if(player.r.map_City_2_1[xx][yy]==40)
            {
                player.r.player_in_map=n(7)
                player.r.player_x=n(1)
                player.r.player_y=n(2)
                showTab('City_1_1')
                return
            }
            if(player.r.map_City_2_1[xx][yy]==47)
            {
                player.r.player_in_map=n(13)
                player.r.player_x=n(7)
                player.r.player_y=n(1)
                showTab('City_2_2')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_1[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_2_1[xx][yy]==38)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_2_1[xx][yy]==40)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_2_1[xx][yy]==47)
            {
                return '<h1>???</h1>'
            }
            return ''
        },
    },
    tabFormat:{
        "City_2_1":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_2_1',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(10) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_0_2",//11
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(11)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_0_2[xx][yy]==14)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_0_2[xx][yy]==1)
                {
                    if(layers.City_0_2.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_0_2[xx][yy]==42)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_0_2[xx][yy]==43)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_0_2[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_0_2[xx][yy]==42)
            {
                player.r.player_in_map=n(4)
                player.r.player_x=n(8)
                player.r.player_y=n(8)
                showTab('City_0_1')
                return
            }
            if(player.r.map_City_0_2[xx][yy]==43)
            {
                player.r.player_in_map=n(12)
                player.r.player_x=n(8)
                player.r.player_y=n(8)
                showTab('City_1_2')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_0_2[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_0_2[xx][yy]==42)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_0_2[xx][yy]==43)
            {
                return '<h1>???</h1>'
            }
            return ''
        },
    },
    tabFormat:{
        "City_0_2":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_0_2',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(11) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_1_2",//12
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(12)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_1_2[xx][yy]==14)
            {
                return false
            }
            if(player.r.map_City_1_2[xx][yy]==51)
            {
                return false
            }
            if(player.r.map_City_1_2[xx][yy]==52)
            {
                return false
            }
            if(player.r.map_City_1_2[xx][yy]==53)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_1_2[xx][yy]==1)
                {
                    if(layers.City_1_2.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_1_2[xx][yy]==44)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_2[xx][yy]==46)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_2[xx][yy]==49)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_1_2[xx][yy]==51)
                {
                    tmpcolor='#FF000060'
                }
                if(player.r.map_City_1_2[xx][yy]==54)
                {
                    tmpcolor='#FF000060'
                }
                if(player.r.map_City_1_2[xx][yy]==52)
                {
                    tmpcolor='#FF000080'
                }
                if(player.r.map_City_1_2[xx][yy]==53)
                {
                    tmpcolor='#FF000099'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_1_2[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_1_2[xx][yy]==44)
            {
                player.r.player_in_map=n(11)
                player.r.player_x=n(1)
                player.r.player_y=n(8)
                showTab('City_0_2')
                return
            }
            if(player.r.map_City_1_2[xx][yy]==46)
            {
                player.r.player_in_map=n(7)
                player.r.player_x=n(7)
                player.r.player_y=n(8)
                showTab('City_1_1')
                return
            }
            if(player.r.map_City_1_2[xx][yy]==49)
            {
                player.r.player_in_map=n(13)
                player.r.player_x=n(8)
                player.r.player_y=n(8)
                showTab('City_2_2')
                return
            }
            if(player.r.map_City_1_2[xx][yy]==54)
            {
                alert('???????????????????????????')
                player.r.player_in_map=n(14)
                player.r.player_x=n(13)
                player.r.player_y=n(7)
                showTab("Fire")
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_1_2[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_1_2[xx][yy]==44)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_2[xx][yy]==46)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_2[xx][yy]==49)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_1_2[xx][yy]==54)
            {
                return '<h1>???</h1>'
            }
            return ''
        },
    },
    tabFormat:{
        "City_1_2":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_1_2',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(12) && player.r.in_day.gte(0.5)
    },
})
addLayer("City_2_2",//13
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "pink",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(13)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_2[xx][yy]==14)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(player.r.map_City_2_2[xx][yy]==1)
                {
                    if(layers.City_2_2.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_City_2_2[xx][yy]==48)
                {
                    tmpcolor='#ADD8E6'
                }
                if(player.r.map_City_2_2[xx][yy]==50)
                {
                    tmpcolor='#ADD8E6'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_City_2_2[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_2[xx][yy]==48)
            {
                player.r.player_in_map=n(10)
                player.r.player_x=n(7)
                player.r.player_y=n(8)
                showTab('City_2_1')
                return
            }
            if(player.r.map_City_2_2[xx][yy]==50)
            {
                player.r.player_in_map=n(12)
                player.r.player_x=n(1)
                player.r.player_y=n(8)
                showTab('City_1_2')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_City_2_2[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_City_2_2[xx][yy]==48)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_City_2_2[xx][yy]==50)
            {
                return '<h1>???</h1>'
            }
            return ''
        },
    },
    tabFormat:{
        "City_2_2":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['City_2_2',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(13) && player.r.in_day.gte(0.5)
    },
})
addLayer("Fire",//12
{
    symbol: "R", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),

        }
    },
    color: "red",
    resource: "?????????",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"??????",
    gainMult()
    {
        var mult=new ExpantaNum(1)
        return mult
    },
    gainExp()
    {
        var exp=new ExpantaNum(1)
        return exp
    },
    tooltip(){return ''},
    row: 1,
    grid: {
        rows: 15,
        cols: 15,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) { // Default
            return player.r.player_in_map.eq(14)
        },
        getCanClick(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Fire[xx][yy]==14)
            {
                return false
            }
            if(player.r.map_Fire[xx][yy]==51)
            {
                return false
            }
            if(player.r.map_Fire[xx][yy]==52)
            {
                return false
            }
            if(player.r.map_Fire[xx][yy]==53)
            {
                return false
            }
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            return chax.add(chay).gte(0.001) && chax.add(chay).lte(1.001)
        },
        getStyle(data,id){
            const jss={
                borderRadius:'0px',
                backgroundColor:'white',
                height:'50px',
                width:'50px',
                transitionDuration:'0s'
            }
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            var tmpcolor=''
            var chax=player.r.player_x.sub(xx),chay=player.r.player_y.sub(yy)
            chax=chax.abs()
            chay=chay.abs()
            // if(xx==6 && yy==3)
            // {
            //     console.log(chax.add(chay))
            // }
            if(chax.add(chay).lte(0.001))
            {
                tmpcolor='#FFA500'
            }
            else
            {
                if(
                    player.r.map_Fire[xx][yy]==1 || (player.r.map_Fire[xx][yy]>=55 && player.r.map_Fire[xx][yy]<=62)
                )
                {
                    if(layers.Fire.grid.getCanClick(data,id))
                    {
                        tmpcolor='#FFFFFF'
                    }
                    else
                    {
                        tmpcolor='#808080'
                    }
                }
                if(player.r.map_Fire[xx][yy]==51)
                {
                    tmpcolor='#FF000060'
                }
                if(player.r.map_Fire[xx][yy]==52)
                {
                    tmpcolor='#FF000080'
                }
                if(player.r.map_Fire[xx][yy]==63)
                {
                    tmpcolor='#FF0000'
                }
                if(player.r.map_Fire[xx][yy]==64)
                {
                    tmpcolor='#FF000080'
                }
                // if(xx==6 && yy==3)
                // {
                //     console.log(player.r.map_Fire[xx][yy])
                //     console.log(tmpcolor)
                // }
            }
            jss.backgroundColor=`${tmpcolor}`
            // if(xx==6 && yy==3)
            // {
            //     console.log(jss.backgroundColor)
            // }
            return jss
        },
        onClick(data, id) { 
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Fire[xx][yy]==64)
            {
                player.r.player_in_map=n(12)
                player.r.player_x=n(7)
                player.r.player_y=n(3)
                showTab("City_1_2")
                return
            }
            if(player.r.map_Fire[xx][yy]==55 || player.r.map_Fire[xx][yy]==57 || player.r.map_Fire[xx][yy]==59 || player.r.map_Fire[xx][yy]==61)
            {
                alert("????????????????????????????????????")
            }
            if(player.r.map_Fire[xx][yy]==56 || player.r.map_Fire[xx][yy]==58 || player.r.map_Fire[xx][yy]==60 || player.r.map_Fire[xx][yy]==62)
            {
                alert("????????????")
                alert("??????????????????")
                alert("?????????????????????????????????")
                if(player.r.map_Fire[xx][yy]==56 && player.r.has_key_A102.lte(0.5))
                {
                    alert("???????????? , ??????????????????????????????")
                    alert("????????????????????????(A102)")
                    player.r.has_key_A102=n(1)
                }
            }
            if(player.r.map_Fire[xx][yy]==63)
            {
                alert("???!")
                alert("???????????????????????????????????????")
                alert("????????????")
                player.r.in_night=n(1)
                player.r.in_day=n(0)
                player.r.lock_day=n(1)
                player.fire.unlock_fire=n(1)
                showTab('none')
                return
            }
            player.r.player_x=xx
            player.r.player_y=yy
        },
        getDisplay(data, id) {
            var xx=n((id-id%100)/100).sub(1)
            var yy=n(id%100).sub(1)
            if(player.r.map_Fire[xx][yy]==1)
            {
                return ''
            }
            if(player.r.map_Fire[xx][yy]==64)
            {
                return '<h1>???</h1>'
            }
            if(player.r.map_Fire[xx][yy]==55 || player.r.map_Fire[xx][yy]==56)return '<h1>???</h1>'
            if(player.r.map_Fire[xx][yy]==57 || player.r.map_Fire[xx][yy]==58)return '<h1>???</h1>'
            if(player.r.map_Fire[xx][yy]==59 || player.r.map_Fire[xx][yy]==60)return '<h1>???</h1>'
            if(player.r.map_Fire[xx][yy]==61 || player.r.map_Fire[xx][yy]==62)return '<h1>???</h1>'
            if(player.r.map_Fire[xx][yy]==63)return '<h1>????</h1>'
            return ''
        },
    },
    tabFormat:{
        "Fire":{
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["layer-proxy",['Fire',["grid"]]],
            ],
        },
    },
    layerShown()
    {
        return player.r.player_in_map.eq(14) && player.r.in_day.gte(0.5)
    },
})