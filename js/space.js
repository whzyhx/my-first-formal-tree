addLayer("space",
{
    symbol: "S", 
    position: 1,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),
            unlock_space:zero,
            space:one,space_energy:zero,space_mult:n(1.001),space_gain:zero,
            unlock_space_node:zero,space_node:zero,total_space_node:zero,
            light:one,light_mult:zero,
            one_wei:zero,one_wei_mult:zero,
            two_wei:zero,two_wei_mult:zero,
            three_wei:zero,
            light_to_exponent:zero,
        }
    },
    color: "white",
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
    tooltip(){return format(player.space.space_energy)+' 点空间能量'},
    update(diff)
    {
        if(player.space.unlock_space.lte(0.5))
        {
            return
        }
        player.space.space_mult=n(0.001)
        player.space.space_mult=player.space.space_mult.mul(layers.space.upgrades["Space-Upgrade-1"].EFFECT())
        player.space.space_mult=player.space.space_mult.mul(layers.space.upgrades["Space-Upgrade-2"].EFFECT())
        if(player.machine.match_fire_space.gte(0.5))
        {
            player.space.space_mult=player.space.space_mult.mul(player.fire.fire.add(1).logBase(10))
        }
        if(hasUpgrade("space","Space-Node-Upgrade-2"))
        {
            player.space.space_mult=player.space.space_mult.mul(layers.space.upgrades["Space-Node-Upgrade-2"].EFFECT())
        }
        player.space.space_mult=player.space.space_mult.add(1)
        var xxx=player.space.space_node.pow(n(0.5).add(player.space.light_to_exponent)).add(1)
        if(xxx.gte(1e10))
        {
            xxx=xxx.div(1e10).pow(0.5).mul(1e10)
        }
        player.space.space_mult=player.space.space_mult
        .pow(xxx)
        player.space.space=player.space.space.mul(player.space.space_mult.pow(diff))
        player.space.space_gain=player.space.space.add(1).logBase(10).add(1)
        player.space.space_energy=player.space.space_energy.add(player.space.space_gain.mul(diff))
        var x=n(1)
        if(player.machine.match_life_space.gte(0.5))
        {
            x=n(1.1).pow(player.life.people.add(1).logBase(10))
        }
        player.space.light_mult=player.space.one_wei.add(1).pow(x)
        player.space.one_wei_mult=player.space.two_wei.add(1)
        player.space.two_wei_mult=player.space.three_wei.add(1)
        player.space.light=player.space.light.mul(player.space.light_mult.pow(diff))
        player.space.one_wei=player.space.one_wei.mul(player.space.one_wei_mult.pow(diff))
        player.space.two_wei=player.space.two_wei.mul(player.space.two_wei_mult.pow(diff))
        player.space.light_to_exponent=player.space.light.add(1).logBase(5).add(1).logBase(5).div(10)
    },
    clickables:
    {
        "Space-Node":
        {
            display()
            {
                var goal=n(1e10).pow(player.space.space_node.add(1).pow(2))
                return '重置<br>获取 1 空间节点<br>需要 '+format(goal)+ ' 点空间'
            },
            unlocked(){return true},
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"white","height":"100px","min-height":"100px",}},
            canClick(){
                var goal=n(1e10).pow(player.space.space_node.add(1).pow(2))
                return player.space.space.gte(goal)},
            onClick(){
                if(!hasUpgrade("space","Space-Node-Upgrade-3"))
                {
                    player.space.space_energy=n(0)
                    player.space.space=n(1)
                    var upg=[]
                    if(hasUpgrade("space","Space-Node-Upgrade-1"))upg.push("Space-Node-Upgrade-1")
                    if(hasUpgrade("space","Space-Node-Upgrade-2"))upg.push("Space-Node-Upgrade-2")
                    if(hasUpgrade("space","one-wei"))upg.push("one-wei")
                    if(hasUpgrade("space","two-wei"))upg.push("two-wei")
                    if(hasUpgrade("space","three-wei"))upg.push("three-wei")
                    player.space.upgrades=upg
                }
                player.space.space_node=player.space.space_node.add(1)
                player.space.total_space_node=player.space.total_space_node.add(1)
            },
        },
    },
    upgrades:
    {
        "Space-Upgrade-1":
        {
            EFFECT()
            {
                var pow=n(0.3)
                if(hasUpgrade("space","Space-Node-Upgrade-4"))pow=n(0.6)
                var eff=player.space.space_energy
                eff=eff.add(1).pow(pow).add(1)
                if(!hasUpgrade("space","Space-Upgrade-1"))eff=n(1)
                return eff  
            },
            fullDisplay()
            {
                return "快速<br>你所拥有的空间能量让空间增长的更快<br>效果:x"
                      +format(layers.space.upgrades["Space-Upgrade-1"].EFFECT())+"<br><br>花费:20空间能量"
            },
            onPurchase()
            {
                player.space.space_energy=player.space.space_energy.sub(20)
            },
            canAfford()
            {
                return player.space.space_energy.gte(20)
            },
            style(){
                if(hasUpgrade("space","Space-Upgrade-1"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(layers.space.upgrades["Space-Upgrade-1"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"black","height":"150px"}},
            unlocked(){return true},
        },
        "Space-Upgrade-2":
        {
            EFFECT()
            {
                var pow=n(0.1)
                if(hasUpgrade("space","Space-Node-Upgrade-4"))pow=n(0.2)
                var eff=player.space.space.pow(pow)
                eff=eff.add(1).logBase(2).add(1)
                if(!hasUpgrade("space","Space-Upgrade-2"))eff=n(1)
                return eff  
            },
            fullDisplay()
            {
                return "自大<br>你所拥有的空间让空间增长的更快<br>效果:x"
                      +format(layers.space.upgrades["Space-Upgrade-2"].EFFECT())+"<br><br>花费:100空间能量"
            },
            onPurchase()
            {
                player.space.space_energy=player.space.space_energy.sub(100)
            },
            canAfford()
            {
                return player.space.space_energy.gte(100)
            },
            style(){
                if(hasUpgrade("space","Space-Upgrade-2"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(layers.space.upgrades["Space-Upgrade-2"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"black","height":"150px"}},
            unlocked(){return true},
        },
        "Space-Node-Upgrade-1":
        {
            fullDisplay()
            {
                return "爆炸<br>一个空间节点爆炸了<br>效果:<i>你看见了光</i><br><br>花费:1空间节点"
            },
            onPurchase()
            {
                player.space.space_node=player.space.space_node.sub(1)
            },
            canAfford()
            {
                return player.space.space_node.gte(1)
            },
            style(){
                if(hasUpgrade("space","Space-Node-Upgrade-1"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(layers.space.upgrades["Space-Node-Upgrade-1"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"black","height":"150px"}},
            unlocked(){return player.space.total_space_node.gte(1.5)},
        },
        "Space-Node-Upgrade-2":
        {
            EFFECT()
            {
                var eff=player.space.light.add(1).logBase(10)
                return eff
            },
            fullDisplay()
            {
                return "刺眼<br>光可以给你提供一个额外的增益<br><br><br>花费:5空间节点"
            },
            onPurchase()
            {
                player.space.space_node=player.space.space_node.sub(5)
            },
            canAfford()
            {
                return player.space.space_node.gte(5)
            },
            style(){
                if(hasUpgrade("space","Space-Node-Upgrade-2"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(layers.space.upgrades["Space-Node-Upgrade-2"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"black","height":"150px"}},
            unlocked(){return hasUpgrade("space","Space-Node-Upgrade-1")},
        },
        "Space-Node-Upgrade-3":
        {
            fullDisplay()
            {
                return "完美<br>空间节点不再重置任何东西<br><br>花费:10空间节点"
            },
            onPurchase()
            {
                player.space.space_node=player.space.space_node.sub(10)
            },
            canAfford()
            {
                return player.space.space_node.gte(10)
            },
            style(){
                if(hasUpgrade("space","Space-Node-Upgrade-3"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(layers.space.upgrades["Space-Node-Upgrade-3"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"black","height":"150px"}},
            unlocked(){return hasUpgrade("space","Space-Node-Upgrade-2")},
        },
        "Space-Node-Upgrade-4":
        {
            fullDisplay()
            {
                return "更强<br>前两个升级变得更强 !<br><br>花费:20空间节点"
            },
            onPurchase()
            {
                player.space.space_node=player.space.space_node.sub(20)
            },
            canAfford()
            {
                return player.space.space_node.gte(20)
            },
            style(){
                if(hasUpgrade("space","Space-Node-Upgrade-4"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(layers.space.upgrades["Space-Node-Upgrade-4"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"black","height":"150px"}},
            unlocked(){return hasUpgrade("space","Space-Node-Upgrade-3")},
        },
        "one-wei":
        {
            fullDisplay()
            {
                return "解锁 1维<br><br>需要 : 1空间节点"
            },
            onPurchase()
            {
                player.space.space_node=player.space.space_node.sub(1)
                player.space.one_wei=n(1)
            },
            canAfford()
            {
                return player.space.space_node.gte(1)
            },
            style(){
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}},
            unlocked(){return !hasUpgrade("space","one-wei") && hasUpgrade("space","Space-Node-Upgrade-1")},
        },
        "two-wei":
        {
            fullDisplay()
            {
                return "解锁 2维<br><br>需要 : 10空间节点"
            },
            onPurchase()
            {
                player.space.space_node=player.space.space_node.sub(10)
                player.space.two_wei=n(1)
            },
            canAfford()
            {
                return player.space.space_node.gte(10)
            },
            style(){
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}},
            unlocked(){return !hasUpgrade("space","two-wei") && hasUpgrade("space","one-wei")},
        },
        "three-wei":
        {
            fullDisplay()
            {
                return "解锁 3维<br><br>需要 : 100空间节点"
            },
            onPurchase()
            {
                player.space.space_node=player.space.space_node.sub(100)
                player.space.three_wei=n(1)
            },
            canAfford()
            {
                return player.space.space_node.gte(100)
            },
            style(){
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}},
            unlocked(){return !hasUpgrade("space","three-wei") && hasUpgrade("space","two-wei")},
        },
    },
    row: 3,
	microtabs:
    {
        "Space":
        {
			"Upgrade":{
                unlocked(){return true},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"white"}
                },
				content:[
                    "blank",
                    ["row",[["upgrade","Space-Upgrade-1"],["upgrade","Space-Upgrade-2"],]],
                    "blank",
                    "blank",
                    ["row",[["upgrade","Space-Node-Upgrade-1"],["upgrade","Space-Node-Upgrade-2"],
                    ["upgrade","Space-Node-Upgrade-3"],["upgrade","Space-Node-Upgrade-4"],]],
				],
			},
			"Node":{
                unlocked(){return hasUpgrade("space","Space-Upgrade-2")||player.space.total_space_node.gte(0.5)},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"white"}
                },
				content:[
                    "blank",
                    ["display-text",
                        function() {
                            return '你有 <text style="color:grey">'+format(player.space.space_node)+'</text> 个 空间节点'
                        },
                        { "color": "white", "font-size": "32px",}
                    ],
                    ["display-text",
                        function() {
                            return '因此 , 你的空间膨胀速度 ^<text style="color:grey">'
                            +format(player.space.space_node.pow(n(0.5).add(player.space.light_to_exponent)).add(1))
                        },
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["row",[["clickable","Space-Node"],]],
                    "blank",
                    ["display-text",
                        function() {
                            if(hasUpgrade("space","Space-Node-Upgrade-1"))
                            return '你有 <text style="color:yellow">'+format(player.space.light)
                            +'</text> 光 (x<text style="color:yellow">'+format(player.space.light_mult)+'</text>/s)'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            if(hasUpgrade("space","Space-Node-Upgrade-1"))
                            return '为空间节点的指数增加 +'+format(player.space.light_to_exponent)
                        },
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            if(hasUpgrade("space","Space-Node-Upgrade-2"))
                            return '为空间膨胀 x'+format(layers.space.upgrades["Space-Node-Upgrade-2"].EFFECT())
                        },
                        { "color": "white", "font-size": "20px",}
                    ],
                    "blank",
                    "blank",
                    ["display-text",
                        function() {
                            if(hasUpgrade("space","one-wei"))
                            return '<text style="color:#FFFFFF">1维空间 : '+format(player.space.one_wei)+' (x'+format(player.space.one_wei_mult)+'/s)'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["row",[["upgrade","one-wei"],]],
                    ["display-text",
                        function() {
                            if(hasUpgrade("space","two-wei"))
                            return '<text style="color:#FFFFFF90">2维空间 : '+format(player.space.two_wei)+' (x'+format(player.space.two_wei_mult)+'/s)'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["row",[["upgrade","two-wei"],]],
                    ["display-text",
                        function() {
                            if(hasUpgrade("space","three-wei"))
                            return '<text style="color:#FFFFFF70">3维空间 : '+format(player.space.three_wei)
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["row",[["upgrade","three-wei"],]],
				],
			},
		},
    },
    tabFormat:
    {
        "Space":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '你有 <text style="color:white">'+format(player.space.space_energy)+'</text> 点 空间能量'
                    },
                    { "color": "white", "font-size": "32px",}
                ],
                ["display-text",
                    function() {
                        return '( +'+format(player.space.space_gain)+' / s )'
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                "blank",
                "blank",
                "blank",
                ["display-text",
                    function() {
                        return '你有 <text style="color:white">'+format(player.space.space)+'</text> 空间'
                        +'( x'+format(player.space.space_mult)+' )'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["microtabs","Space",{'border-width':'0px'}],
            ],
        },
    },
    layerShown()
    {
        return player.r.in_night.gte(0.5) && player.space.unlock_space.gte(0.5)
    },
})