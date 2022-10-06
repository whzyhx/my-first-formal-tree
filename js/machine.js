addLayer("machine",
{
    symbol: "M", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),
            unlock_machine:zero,
            machine_energy:zero,
            total_gear:zero,now_gear:zero,
            use_gear:[zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,zero,],
            time_2:zero,

            maxxx:zero,
            match_life_fire:zero,
            match_life_space:zero,
            match_fire_space:zero,
        }
    },
    color: "grey",
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
    exponent:1,
    countcount()
    {
        var x=n(0)
        x=x.add(player.machine.match_life_fire)
        x=x.add(player.machine.match_life_space)
        x=x.add(player.machine.match_fire_space)
        return x
    },
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
    tooltip(){return format(player.machine.machine_energy)+' 点机械能量'},
    update(diff)
    {
        if(player.machine.unlock_machine.lte(0.5))
        {
            return
        }
        if(player.machine.total_gear.gte(0.5))player.machine.maxxx=n(1)
        if(player.machine.total_gear.gte(4.5))player.machine.maxxx=n(2)
        if(player.machine.total_gear.gte(9.5))player.machine.maxxx=n(3)
        var x=n(1)
        .mul(n(1.1).pow(player.fire.fire.add(1).logBase(10)))
        .mul(player.points.add(1).logBase(10).add(1).logBase(10).add(1))
        .mul(n(1.2).pow(player.life.life_energy.add(1).logBase(10)))
        player.machine.machine_energy=player.machine.machine_energy.add(x.mul(diff))
        var x1=n(3).mul(player.machine.use_gear[0].pow(2))
        player.fire.fire=player.fire.fire.add(layers.fire.clickables["Make-Fire"].EFFECT().mul(x1).mul(diff))
        if(player.machine.use_gear[1].gte(0.5))
        {
            if(player.fire.unlock_fireseed.gte(0.5))
            {
                if(layers.fire.clickables["Fire-4"].canClick())layers.fire.clickables["Fire-4"].onClick()
                if(layers.fire.clickables["Fire-3"].canClick())layers.fire.clickables["Fire-3"].onClick()
                if(layers.fire.clickables["Fire-2"].canClick())layers.fire.clickables["Fire-2"].onClick()
                if(layers.fire.clickables["Fire-1"].canClick())layers.fire.clickables["Fire-1"].onClick()
            }
        }
        player.machine.time_2=player.machine.time_2.add(diff)
        if(player.machine.use_gear[2].gte(0.5) && player.machine.time_2.gte(5))
        {
            player.machine.time_2=n(0)
            if(hasUpgrade("i","Color-White"))
            layers.i.clickables["Tube-White"].onClick()
            if(hasUpgrade("i","Color-Orange"))
            layers.i.clickables["Tube-Orange"].onClick()
            if(hasUpgrade("i","Color-Purple"))
            layers.i.clickables["Tube-Purple"].onClick()
            if(hasUpgrade("i","Color-Green"))
            layers.i.clickables["Tube-Green"].onClick()
            if(hasUpgrade("i","Color-Red"))
            layers.i.clickables["Tube-Red"].onClick()
            if(hasUpgrade("i","Color-Yellow"))
            layers.i.clickables["Tube-Yellow"].onClick()
            if(hasUpgrade("i","Color-Blue"))
            layers.i.clickables["Tube-Blue"].onClick()
        }
        if(layers.i.clickables["Infinity"].GAIN(player.points).gte(0.001))
        {
            player.i.infinity_points=player.i.infinity_points
            .add(layers.i.clickables["Infinity"].GAIN(player.points).div(100).mul(player.machine.use_gear[3].pow(2)))
            player.i.total_infinity_points=player.i.total_infinity_points
            .add(layers.i.clickables["Infinity"].GAIN(player.points).div(100).mul(player.machine.use_gear[3].pow(2)))
        }
        if(player.machine.use_gear[4].gte(0.5))
        {
            if(hasUpgrade("space","Space-Node-Upgrade-3"))
            {
                player.space.space_node=player.space.space.add(1).logBase(10).div(10).root(2).floor()
            }
            else
            {
                if(layers.space.clickables["Space-Node"].canClick())
                {
                    layers.space.clickables["Space-Node"].onClick()
                }
            }
        }
    },
    clickables:
    {
        "Get-Gear":
        {
            NEED()
            {
                var x=n(20)
                x=x.pow(player.machine.total_gear)
                return x
            },
            display()
            {
                return '塑造 1 个齿轮'
            },
            unlocked(){return true},
            style(){
                return {"width":"200px","border-radius":"100px","border-color":"grey","border-width":"25px","background-color":"white","height":"200px","min-height":"200px",}},
            canClick(){return player.machine.machine_energy.gte(layers.machine.clickables["Get-Gear"].NEED())},
            onClick(){
                player.machine.machine_energy=n(0)
                player.machine.total_gear=player.machine.total_gear.add(1)
                player.machine.now_gear=player.machine.now_gear.add(1)
            },
        },
        "1-1":
        {
            display()
            {
                return '分配'
            },
            unlocked(){return true},
            style(){
                if(player.machine.now_gear.gte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.now_gear.gte(0.5)},
            onClick(){
                player.machine.use_gear[0]=player.machine.use_gear[0].add(1)
                player.machine.now_gear=player.machine.now_gear.sub(1)
            },
        },
        "1-2":
        {
            display()
            {
                return '取出'
            },
            unlocked(){return true},
            style(){
                if(player.machine.use_gear[0].gte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.use_gear[0].gte(0.5)},
            onClick(){
                player.machine.use_gear[0]=player.machine.use_gear[0].sub(1)
                player.machine.now_gear=player.machine.now_gear.add(1)
            },
        },
        "2-1":
        {
            display()
            {
                return '分配'
            },
            unlocked(){return true},
            style(){
                if(player.machine.now_gear.gte(0.5) && player.machine.use_gear[1].lte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.now_gear.gte(0.5) && player.machine.use_gear[1].lte(0.5)},
            onClick(){
                player.machine.use_gear[1]=player.machine.use_gear[1].add(1)
                player.machine.now_gear=player.machine.now_gear.sub(1)
            },
        },
        "2-2":
        {
            display()
            {
                return '取出'
            },
            unlocked(){return true},
            style(){
                if(player.machine.use_gear[1].gte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.use_gear[1].gte(0.5)},
            onClick(){
                player.machine.use_gear[1]=player.machine.use_gear[1].sub(1)
                player.machine.now_gear=player.machine.now_gear.add(1)
            },
        },
        "3-1":
        {
            display()
            {
                return '分配'
            },
            unlocked(){return true},
            style(){
                if(player.machine.now_gear.gte(1.5) && player.machine.use_gear[2].lte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.now_gear.gte(1.5) && player.machine.use_gear[2].lte(0.5)},
            onClick(){
                player.machine.use_gear[2]=player.machine.use_gear[2].add(1)
                player.machine.now_gear=player.machine.now_gear.sub(2)
            },
        },
        "3-2":
        {
            display()
            {
                return '取出'
            },
            unlocked(){return true},
            style(){
                if(player.machine.use_gear[2].gte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.use_gear[2].gte(0.5)},
            onClick(){
                player.machine.use_gear[2]=player.machine.use_gear[2].sub(1)
                player.machine.now_gear=player.machine.now_gear.add(2)
            },
        },
        "4-1":
        {
            display()
            {
                return '分配'
            },
            unlocked(){return true},
            style(){
                if(player.machine.now_gear.gte(0.5) && player.machine.use_gear[3].lte(4.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.now_gear.gte(0.5) && player.machine.use_gear[3].lte(4.5)},
            onClick(){
                player.machine.use_gear[3]=player.machine.use_gear[3].add(1)
                player.machine.now_gear=player.machine.now_gear.sub(1)
            },
        },
        "4-2":
        {
            display()
            {
                return '取出'
            },
            unlocked(){return true},
            style(){
                if(player.machine.use_gear[3].gte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.use_gear[3].gte(0.5)},
            onClick(){
                player.machine.use_gear[3]=player.machine.use_gear[3].sub(1)
                player.machine.now_gear=player.machine.now_gear.add(1)
            },
        },
        "5-1":
        {
            display()
            {
                return '分配'
            },
            unlocked(){return true},
            style(){
                if(player.machine.now_gear.gte(1.5) && player.machine.use_gear[4].lte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.now_gear.gte(1.5) && player.machine.use_gear[4].lte(0.5)},
            onClick(){
                player.machine.use_gear[4]=player.machine.use_gear[4].add(1)
                player.machine.now_gear=player.machine.now_gear.sub(2)
            },
        },
        "5-2":
        {
            display()
            {
                return '取出'
            },
            unlocked(){return true},
            style(){
                if(player.machine.use_gear[4].gte(0.5))
                return {"width":"75px","border-radius":"0px","background-color":"white","height":"30px","min-height":"30px",}
                return {"width":"75px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){return player.machine.use_gear[4].gte(0.5)},
            onClick(){
                player.machine.use_gear[4]=player.machine.use_gear[4].sub(1)
                player.machine.now_gear=player.machine.now_gear.add(2)
            },
        },
        "Match-Life-Fire":
        {
            display()
            {
                if(player.machine.match_life_fire.gte(0.5))
                {
                    return '<h1>DisMatch</h1><br><br><text style="color:lime">生命</text>-<text style="color:red">火</text>'
                }
                return '<h1>Match</h1><br><br><text style="color:lime">生命</text>-<text style="color:red">火</text>'
            },
            unlocked(){return true},
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"100px","min-height":"100px",}},
            canClick(){
                if(player.machine.match_life_fire.gte(0.5))
                return true
                return layers.machine.countcount().add(1).lte(player.machine.maxxx)
            },
            onClick(){
                player.machine.match_life_fire=n(1).sub(player.machine.match_life_fire)
            },
        },
        "Match-Life-Space":
        {
            display()
            {
                if(player.machine.match_life_space.gte(0.5))
                {
                    return '<h1>DisMatch</h1><br><br><text style="color:lime">生命</text>-<text style="color:white">空间</text>'
                }
                return '<h1>Match</h1><br><br><text style="color:lime">生命</text>-<text style="color:white">空间</text>'
            },
            unlocked(){return true},
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"100px","min-height":"100px",}},
            canClick(){
                if(player.machine.match_life_space.gte(0.5))
                return true
                return layers.machine.countcount().add(1).lte(player.machine.maxxx)
            },
            onClick(){
                player.machine.match_life_space=n(1).sub(player.machine.match_life_space)
            },
        },
        "Match-Fire-Space":
        {
            display()
            {
                if(player.machine.match_fire_space.gte(0.5))
                {
                    return '<h1>DisMatch</h1><br><br><text style="color:red">火</text>-<text style="color:white">空间</text>'
                }
                return '<h1>Match</h1><br><br><text style="color:red">火</text>-<text style="color:white">空间</text>'
            },
            unlocked(){return true},
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"100px","min-height":"100px",}},
            canClick(){
                if(player.machine.match_fire_space.gte(0.5))
                return true
                return layers.machine.countcount().add(1).lte(player.machine.maxxx)
            },
            onClick(){
                player.machine.match_fire_space=n(1).sub(player.machine.match_fire_space)
            },
        },
    },
    upgrades:
    {
        "Gear-Upgrade-1":
        {
            fullDisplay()
            {
                return "永久升级 - 自动配平<br>树木被固定在人口的两倍<br><br>花费 : 2齿轮"
            },
            onPurchase()
            {
                player.machine.now_gear=player.machine.now_gear.sub(2)
            },
            canAfford()
            {
                return player.machine.now_gear.gte(2)
            },
            style(){
                if(hasUpgrade("machine","Gear-Upgrade-1"))
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                if(layers.machine.upgrades["Gear-Upgrade-1"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}},
            unlocked(){return true},
        },
    },
    row: 4,
	microtabs:
    {
        "Machine":
        {
			"Gear":{
                unlocked(){return true},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"grey"}
                },
				content:[
                    "blank",
                    
                    ["display-text",
                        function() {
                            return '<text style="color:white">能源</text> 自动购买普通 Tube(2) '+(player.machine.use_gear[2].gte(0.5)?format(player.machine.time_2):'---')
                        },
                        { "color": "white", "font-size": "28px",}
                    ],["row",[["clickable","3-1"],["clickable","3-2"]]],
                    
                    ["display-text",
                        function() {
                            return '<text style="color:white">能源</text> 每秒自动获取无尽点('+format(player.machine.use_gear[3])+'/5.00)(1) '+format(player.machine.use_gear[3].pow(2))+'%/s'
                        },
                        { "color": "white", "font-size": "28px",}
                    ],["row",[["clickable","4-1"],["clickable","4-2"]]],
                    
                    ["display-text",
                        function() {
                            return '<text style="color:red">火</text> 自动拱火(1) : '+format(n(3).mul(player.machine.use_gear[0].pow(2)))+' /s '
                        },
                        { "color": "white", "font-size": "28px",}
                    ],["row",[["clickable","1-1"],["clickable","1-2"]]],
                    
                    ["display-text",
                        function() {
                            return '<text style="color:red">火</text> 自动购买压缩火(1) '+(player.machine.use_gear[1].gte(0.5)?"启用":"禁用")
                        },
                        { "color": "white", "font-size": "28px",}
                    ],["row",[["clickable","2-1"],["clickable","2-2"]]],

                    ["display-text",
                        function() {
                            return '<text style="color:white">空间</text> 自动重置空间节点(2) '+(player.machine.use_gear[4].gte(0.5)?"启用":"禁用")
                        },
                        { "color": "white", "font-size": "28px",}
                    ],["row",[["clickable","5-1"],["clickable","5-2"]]],
				],
			},
			"Upgrade":{
                unlocked(){return true},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"grey"}
                },
				content:[
                    "blank",
                    ["row",[["upgrade","Gear-Upgrade-1"]]],
				],
			},
		},
    },
    tabFormat:
    {
        "Machine":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '你有 <text style="color:grey">'+format(player.machine.machine_energy)+'</text> 点 机械能量'
                    },
                    { "color": "white", "font-size": "32px",}
                ],
                ["display-text",
                    function() {
                        return '(+<text style="color:grey">'+format(n(1)
                        .mul(n(1.1).pow(player.fire.fire.add(1).logBase(10)))
                        .mul(n(1.2).pow(player.life.life_energy.add(1).logBase(10)))
                        .mul(player.points.add(1).logBase(10).add(1).logBase(10).add(1)))+'</text>/s)'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                "blank",
                ["row",[["clickable","Get-Gear"]]],
                ["display-text",
                    function() {
                        return '你总共有 '+format(player.machine.total_gear)+' 个齿轮'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() {
                        return '你现在有 '+format(player.machine.now_gear)+' 个齿轮'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() {
                        return '你最大的齿轮有 '+(player.machine.total_gear.lte(0.5)?"0":format(n(20).pow(player.machine.total_gear.sub(1))))+' 转'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() {
                        return '下一个齿轮要 '+format(n(20).pow(player.machine.total_gear))+' 机械能量'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                "blank",
                ["microtabs","Machine",{'border-width':'0px'}],
            ],
        },
        "More":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '<text style="color:white"><h1>能量转化</h1></text><br>你的<text style="color:white">'
                        +format(player.points)+'</text>能源 增幅你的机械能量获取 x<text style="color:grey">'
                        +format(player.points.add(1).logBase(10).add(1).logBase(10).add(1))+'</text>'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() {
                        if(player.fire.unlock_fire.gte(0.5))
                        return '<text style="color:red"><h1>受热膨胀</h1></text><br>你的<text style="color:red">'
                        +format(player.fire.fire)+'</text>火 增幅你的机械能量获取 x<text style="color:grey">'
                        +format(n(1.1).pow(player.fire.fire.add(1).logBase(10)))+'</text>'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() {
                        if(player.life.unlock_life.gte(0.5))
                        return '<text style="color:lime"><h1>生生不息</h1></text><br>你的<text style="color:lime">'
                        +format(player.life.life_energy)+'</text>生命能量 增幅你的机械能量获取 x<text style="color:grey">'
                        +format(n(1.2).pow(player.life.life_energy.add(1).logBase(10)))+'</text>'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
            ],
        },
        "Match":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '你最多可以同时连接 '+format(player.machine.maxxx)+' 条法则'
                    },
                    { "color": "white", "font-size": "32px",}
                ],
                "blank",
                ["row",[["clickable","Match-Life-Fire"],["clickable","Match-Life-Space"],]],
                ["row",[["clickable","Match-Fire-Space"],]],
                //life fire
                "blank",
                ["display-text",
                    function() {
                        if(player.machine.match_life_fire.gte(0.5))
                        return '你的<text style="color:lightblue">'+format(player.life.o2)
                        +'</text>氧气让拱火效果x'+format(player.life.o2.add(1))
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(player.machine.match_life_fire.gte(0.5))
                        return '你的<text style="color:red">'+format(player.fire.fire)
                        +'</text>火 产生<text style="color:grey">'+format(player.fire.fire.pow(0.25))+'</text>二氧化碳/s'
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                //life space
                "blank",
                ["display-text",
                    function() {
                        if(player.machine.match_life_space.gte(0.5))
                        return '你的<text style="color:white">'+format(player.life.people)
                        +'</text>人口让光生产 ^<text style="color:yellow">'+format(n(1.1).pow(player.life.people.add(1).logBase(10)))
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(player.machine.match_life_space.gte(0.5))
                        return '你的<text style="color:white">'+format(player.space.space_energy)
                        +'</text>空间能量让星球容积 x'+format(player.space.space_energy.add(1).pow(0.5))
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                //fire space
                "blank",
                ["display-text",
                    function() {
                        if(player.machine.match_fire_space.gte(0.5))
                        return '<text style="color:red"><i>受热</i></text> 你的<text style="color:red">'
                        +format(player.fire.fire)+'</text> 火 让空间膨胀x<text style="color:grey">'+format(player.fire.fire.add(1).logBase(10))
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(player.machine.match_fire_space.gte(0.5))
                        return '你的<text style="color:grey">'+format(player.space.space_node)
                        +'</text>空间节点 让压缩火(All)生产x<text style="color:#FF000090">'+format(player.space.space_node.pow(2).add(1))
                    },
                    { "color": "white", "font-size": "20px",}
                ],
            ],
        },
    },
    layerShown()
    {
        return player.r.in_night.gte(0.5) && player.machine.unlock_machine.gte(0.5)
    },
})