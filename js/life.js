addLayer("life",
{
    symbol: "L", 
    position: 1,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),
            unlock_life:zero,
            life_energy:n(20),
            people:one,tree:zero,o2:n(1e5),co2:n(1e5),
            life_exponent:one,
            ttttt:n(1e9)
        }
    },
    color: "lime",
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
    tooltip(){return format(player.life.life_energy)+' 点生命能量'},
    update(diff)
    {
        player.life.ttttt=n(1e9)
        if(player.machine.match_life_space.gte(0.5))
        {
            player.life.ttttt=player.life.ttttt.mul(player.space.space_energy.add(1).pow(0.5))
        }
        if(player.life.unlock_life.lte(0.5))
        {
            return
        }
        if(player.machine.match_life_fire.gte(0.5))
        {
            player.life.co2=player.life.co2.add(player.fire.fire.pow(0.25).mul(diff))
        }
        if(hasUpgrade("life","Generate"))
        {
            if(player.life.people.add(player.life.tree).lte(player.life.ttttt))
            {
                if(player.life.o2.gte(0.5))
                player.life.people=player.life.people.mul(n(1.05).pow(diff))
                if(player.life.co2.gte(0.5))
                player.life.tree=player.life.tree.mul(n(1.05).pow(diff))
            }
        }
        if(hasUpgrade("machine","Gear-Upgrade-1"))player.life.tree=player.life.people.mul(2)
        var x=n(1)
        if(hasUpgrade("life","Double"))x=n(2)
        player.life.o2=player.life.o2.sub(player.life.people.mul(diff)).add(player.life.tree.mul(0.5).mul(x).mul(diff)).max(0)
        player.life.co2=player.life.co2.add(player.life.people.mul(0.5).mul(diff)).sub(player.life.tree.mul(0.5).mul(diff)).max(0)
        player.life.life_exponent=player.life.o2.add(1).div(player.life.co2.add(1)).min(1)
        player.life.life_energy=player.life.life_energy.add(player.life.people.mul(player.life.life_exponent.pow(100)).mul(diff))
    },
    clickables:
    {
        "People":
        {
            display()
            {
                return '造人<br>需要 : 20生命能量'
            },
            unlocked(){return true},
            style(){
                return {"width":"100px","border-radius":"0px","background-color":"lime","height":"100px","min-height":"100px",}},
            canClick(){return player.life.life_energy.gte(n(20))},
            onClick(){
                player.life.life_energy=player.life.life_energy.sub(20)
                player.life.people=player.life.people.add(1)
            },
        },
        "Tree":
        {
            display()
            {
                return '种树<br>需要 : 10生命能量'
            },
            unlocked(){return true},
            style(){
                return {"width":"100px","border-radius":"0px","background-color":"lime","height":"100px","min-height":"100px",}},
            canClick(){return player.life.life_energy.gte(n(10))},
            onClick(){
                player.life.life_energy=player.life.life_energy.sub(10)
                player.life.tree=player.life.tree.add(1)
            },
        },
    },
    upgrades:
    {
        "Generate":
        {
            fullDisplay()
            {
                return "繁殖<br>在有O<sub>2</sub>时,人口以每秒5%的速度增长<br>在有CO<sub>2</sub>时,树木以5%的速度增长<br><br>花费:1000生命能量"
            },
            onPurchase()
            {
                player.life.life_energy=player.life.life_energy.sub(1000)
            },
            canAfford()
            {
                return player.life.life_energy.gte(1000)
            },
            style(){
                if(hasUpgrade("life","Generate"))
                return {"width":"600px","border-radius":"0px","background-color":"green","height":"150px"}
                if(layers.life.upgrades["Generate"].canAfford())
                return {"width":"600px","border-radius":"0px","background-color":"lime","height":"150px"}
                return {"width":"600px","border-radius":"0px","background-color":"grey","height":"150px"}},
            unlocked(){return true},
        },
        "Double":
        {
            fullDisplay()
            {
                return "转基因<br><br>树木产生双倍氧气<br><br>花费:1000生命能量"
            },
            onPurchase()
            {
                player.life.life_energy=player.life.life_energy.sub(1000)
            },
            canAfford()
            {
                return player.life.life_energy.gte(1000)
            },
            style(){
                if(hasUpgrade("life","Double"))
                return {"width":"200px","border-radius":"0px","background-color":"green","height":"150px"}
                if(layers.life.upgrades["Double"].canAfford())
                return {"width":"200px","border-radius":"0px","background-color":"lime","height":"150px"}
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"150px"}},
            unlocked(){return true},
        },
    },
    row: 2,
	microtabs:
    {
        "Life":
        {
			"Number":{
                unlocked(){return true},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"lime"}
                },
				content:[
                    "blank",
                    ["display-text",
                        function() {
                            return '你有 <text style="color:white">'+format(player.life.people)+'</text> 人口'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你有 <text style="color:lime">'+format(player.life.tree)+'</text> 树'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你有 <text style="color:lightblue">'+format(player.life.o2)+'</text> 氧气'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你有 <text style="color:grey">'+format(player.life.co2)+'</text> 二氧化碳'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    "blank","blank",
                    ["display-text",
                        function() {
                            return '你这颗星球的最大容积是 : <text style="color:white">'+format(player.life.ttttt)+'</text>'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
				],
			},
			"Exponent":{
                unlocked(){return true},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"lime"}
                },
				content:[
                    "blank",
                    ["display-text",
                        function() {
                            return '你的生命指数是 <text style="color:lime">'+format(player.life.life_exponent.mul(100))+'</text>%'
                        },
                        { "color": "white", "font-size": "30px",}
                    ],
                    "blank",
                    ["display-text",
                        function() {
                            return '生命指数=O<sub>2</sub>/CO<sub>2</sub>'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
				],
			},
			"Upgrade":{
                unlocked(){return true},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"lime"}
                },
				content:[
                    "blank",
                    ["row",[["upgrade","Generate"]]],
                    ["row",[["upgrade","Double"]]],
				],
			},
		},
    },
    tabFormat:
    {
        "Life":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '你有 <text style="color:lime">'+format(player.life.life_energy)+'</text> 点 生命能量'
                    },
                    { "color": "white", "font-size": "32px",}
                ],
                ["display-text",
                    function() {
                        return '(+P*LE<sup>100</sup>/s)=(+<text style="color:lime">'
                        +format(player.life.people.mul(player.life.life_exponent.pow(100)))+'</text>/s)'
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                "blank",
                ["row",[["clickable","People"],["clickable","Tree"]]],
                "blank",
                ["microtabs","Life",{'border-width':'0px'}],
            ],
        },
    },
    layerShown()
    {
        return player.r.in_night.gte(0.5) && player.life.unlock_life.gte(0.5)
    },
})