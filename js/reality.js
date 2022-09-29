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
            [1,1,1,1,1,1,1,1,1,1],
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
            [13,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            ],
            map_City_1_1:[
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [29,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,32,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,31,1,1,1,1,1,1,1,1],
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

            player_in_map:zero,player_x:six,player_y:six,
            body_touch_times:zero,
        }
    },
    color: "pink",
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
                alert("警告 ! 警告 ! 警告 ! 无关人员请立即离开 !!!")
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
                return '<h1>☢</h1>'
            }
            if(player.r.map_Lab_1F[xx][yy]==4)
            {
                return '<h1>→</h1>'
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
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
            if(xx.eq(0) && yy.eq(3)){alert('这里是 22222 的家 , 不过空空如也');return}
            if(xx.eq(0) && yy.eq(5)){alert('这里是 53 的家 , 不过空空如也');return}
            if(xx.eq(0) && yy.eq(7)){alert('这里是 QwQe308 的家 , 不过空空如也');return}
            if(xx.eq(0) && yy.eq(9)){alert('这里是 ajchen 的家 , 不过空空如也');return}
            
            if(xx.eq(2) && yy.eq(3)){alert('这里是 Shinwmyste 的家 , 不过空空如也');return}
            if(xx.eq(2) && yy.eq(5)){alert('这里是 cyxw 的家 , 不过空空如也');return}
            if(xx.eq(2) && yy.eq(7)){alert('这里是 sxy 的家 , 不过空空如也');return}
            if(xx.eq(2) && yy.eq(9)){alert('这里是 qeq 的家 , 不过空空如也');return}
            
            if(xx.eq(4) && yy.eq(3)){alert('这里是 稽哥 的家 , 不过空空如也');return}
            if(xx.eq(4) && yy.eq(5)){
                alert('这里是 Andy Burg 的家')
                player.r.player_in_map=two
                player.r.player_x=n(2)
                player.r.player_y=n(1)
                showTab('Andy_Burg_Home')
                return
            }
            if(xx.eq(4) && yy.eq(7)){alert('这里是 阳光 的家 , 可是他今天反日');return}
            if(xx.eq(4) && yy.eq(9)){alert('这里是 神之海 的家 , 不过空空如也');return}

            if(xx.eq(6) && yy.eq(3)){alert('这里是 陌尘 的家 , 不过空空如也');return}
            if(xx.eq(6) && yy.eq(5)){alert('这里是 念轩 的家 , 不过空空如也');return}
            if(xx.eq(6) && yy.eq(7)){alert('这里是 寒寒(憨憨?) 的家 , 不过空空如也');return}
            if(xx.eq(6) && yy.eq(9)){alert('这里是 gt 的家 , 不过空空如也');return}

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
                return '<h1>↙</h1>'
            }
            if(player.r.map_City_0_0[xx][yy]==7)
            {
                return '<h1>↗</h1>'
            }
            if(player.r.map_City_0_0[xx][yy]==10)
            {
                return '<h1>↑</h1>'
            }
            if(player.r.map_City_0_0[xx][yy]==11)
            {
                return '<h1>→</h1>'
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
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
                return '<h1>↓</h1>'
            }
            if(player.r.map_City_1_0[xx][yy]==17)
            {
                return '<h1>↑</h1>'
            }
            if(player.r.map_City_1_0[xx][yy]==18)
            {
                return '<h1>←</h1>'
            }
            if(player.r.map_City_1_0[xx][yy]==28)
            {
                return '<h1>→</h1>'
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
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
                return '<h1>←</h1>'
            }
            if(player.r.map_City_0_1[xx][yy]==30)
            {
                return '<h1>↑</h1>'
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
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
            if(player.r.map_City_1_1[xx][yy]==32)
            {
                if(player.r.body_touch_times.gte(2.5))
                {
                    alert('它就是一具尸体罢了'+'\n'+'没啥更多的了')
                }
                else if(player.r.body_touch_times.gte(1.5))
                {
                    alert('你强忍着恶心'+'\n'+'[ 在尸体身上摸索 ]')
                    alert('你获得了 一把钥匙(A101)')
                }
                else if(player.r.body_touch_times.gte(0.5))
                {
                    alert('你确定要触碰它吗')
                }
                else
                {
                    alert('呕')
                    alert('这里竟然有一具尸体')
                    alert('我的天,我要吐了')
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
                return '<h1>←</h1>'
            }
            if(player.r.map_City_1_1[xx][yy]==31)
            {
                return '<h1>↓</h1>'
            }
            if(player.r.map_City_1_1[xx][yy]==32)
            {
                return '<h1>血</h1>'
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
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
                alert('这看起来是一个通往地下室的入口 , 不过你并没有钥匙')
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
                return '<h1>←</h1>'
            }
            if(player.r.map_Andy_Burg_Home[xx][yy]==9)
            {
                return '<h1>↓</h1>'
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
    resource: "重置点",
    type: "normal",
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
                    alert('你把钥匙(A101)放进旋钮'+'\n'+'叮的一声 , 门开了')
                    player.r.player_in_map=n(8)
                    player.r.player_x=n(2)
                    player.r.player_y=n(2)
                    showTab('A101')
                    return
                }
                alert('你缺少钥匙')
                return
            }
            if(player.r.map_Office_1F[xx][yy]==23)
            {
                alert('你缺少钥匙')
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
                return '<h1>↓</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==20)
            {
                return '<h1>→</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==21)
            {
                return '<h1>↖</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==22)
            {
                return '<h1>←</h1>'
            }
            if(player.r.map_Office_1F[xx][yy]==23)
            {
                return '<h1>←</h1>'
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
    resource: "重置点",
    type: "normal",
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
                alert('你缺少钥匙')
                return
            }
            if(player.r.map_Office_2F[xx][yy]==26)
            {
                alert('这幅画上有着一张苍老的脸'+'\n'+'看起来德高望重'+'\n'+'你猜他可能是这里的院长')
                return
            }
            if(player.r.map_Office_2F[xx][yy]==27)
            {
                alert('这幅画上也有一张脸'+'\n'+'但不知道为什么 , 这张脸被撕去了大部分'+'\n'+'你隐约从下面的介绍中看到'+'\n'+'他似乎叫A*t* B*g')
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
                return '<h1>↘</h1>'
            }
            if(player.r.map_Office_2F[xx][yy]==25)
            {
                return '<h1>↓</h1>'
            }
            if(player.r.map_Office_2F[xx][yy]==26)
            {
                return '<h1>画1</h1>'
            }
            if(player.r.map_Office_2F[xx][yy]==27)
            {
                return '<h1>画2</h1>'
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
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount()
    {
        return zero
    },
    baseResource:"点数",
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
                alert('工作台上有一张纸 , 你拿起来看 :')
                alert('多么美好的世界啊')
                alert('多么希望可以一直生活在这里啊')
                alert('充实的工作 , 充实的生活')
                alert('啦啦啦啦')
                alert('对了 , A102好像住着一个疯子')
                alert('只是老板一直不让我去')
                alert('很想去诶')
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
                return '<h1>→</h1>'
            }
            if(player.r.map_A101[xx][yy]==34)
            {
                return '工作台'
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