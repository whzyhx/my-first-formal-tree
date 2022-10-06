addLayer("fire",
{
    symbol: "F", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),
            unlock_fire:zero,

            //Fire
            fire:one,ash:zero,total_ash:zero,
            make_fire_time:zero,best_fire:one,

            //Fireseed
            unlock_fireseed:zero,fire_seed:zero,
            fire_energy:ten,
            fire_1:zero,extra_fire_1:zero,beishu_1:one,
            fire_2:zero,extra_fire_2:zero,beishu_2:one,
            fire_3:zero,extra_fire_3:zero,beishu_3:one,
            fire_4:zero,extra_fire_4:zero,beishu_4:one,
        }
    },
    color: "red",
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
    tooltip(){return format(player.fire.fire)+' 火'},
    update(diff)
    {
        if(player.fire.unlock_fire.lte(0.5))
        {
            return
        }
        player.fire.best_fire=player.fire.best_fire.max(player.fire.fire)
        var x=player.fire.fire
        player.fire.fire=player.fire.fire.div(n(1).add(n(0.1)
        .mul(layers.fire.upgrades["Ash-Upgrade-5"].EFFECT())
        .div(layers.fire.upgrades["Ash-Upgrade-4"].EFFECT())).pow(diff)).max(1)
        x=x.sub(player.fire.fire)
        player.fire.ash=player.fire.ash.add(x.mul(layers.fire.upgrades["Ash-Upgrade-2"].EFFECT()))
        player.fire.total_ash=player.fire.total_ash.add(x.mul(layers.fire.upgrades["Ash-Upgrade-2"].EFFECT()))

        //Fire Seed
        player.fire.beishu_1=n(2).pow(player.fire.fire_1.div(10).floor())
        player.fire.beishu_2=n(2).pow(player.fire.fire_2.div(10).floor())
        player.fire.beishu_3=n(2).pow(player.fire.fire_3.div(10).floor())
        player.fire.beishu_4=n(2).pow(player.fire.fire_4.div(10).floor())
        var x=n(1)
        if(player.machine.match_fire_space.gte(0.5))
        {
            x=player.space.space_node.pow(2).add(1)
        }
        player.fire.fire_energy=player.fire.fire_energy
        .add(player.fire.fire_1
            .add(player.fire.extra_fire_1)
            .pow(player.fire.fire_seed.div(10).add(1))
            .mul(player.fire.beishu_1).mul(diff).mul(x))
        player.fire.extra_fire_1=player.fire.extra_fire_1.add(player.fire.fire_2.add(player.fire.extra_fire_2).mul(player.fire.beishu_2).mul(diff).mul(x))
        player.fire.extra_fire_2=player.fire.extra_fire_2.add(player.fire.fire_3.add(player.fire.extra_fire_3).mul(player.fire.beishu_3).mul(diff).mul(x))
        player.fire.extra_fire_3=player.fire.extra_fire_3.add(player.fire.fire_4.add(player.fire.extra_fire_4).mul(player.fire.beishu_4).mul(diff).mul(x))
    },
    clickables:
    {
        "Make-Fire":
        {
            EFFECT()
            {
                var x=n(1)
                .mul(layers.fire.upgrades["Ash-Upgrade-1"].EFFECT())
                .mul(layers.fire.upgrades["Ash-Upgrade-3"].EFFECT())
                if(player.fire.fire_seed.gte(0.5))
                {
                    x=x.mul(n(1.5).pow(
                        player.fire.fire_energy.add(1).logBase(10)
                        .div(player.fire.fire_energy.add(1).logBase(5).add(1).logBase(5))))
                }
                if(hasUpgrade("fire","Ash-Upgrade-5"))x=x.pow(1.5)
                if(player.machine.match_life_fire.gte(0.5))x=x.mul(player.life.o2.add(1))
                return x
            },
            display()
            {
                return '拱火'
            },
            unlocked(){return true},
            style(){return {"width":"75px","border-radius":"0px","background-color":"red","height":"75px","min-height":"75px",}},
            canClick(){return true},
            onClick(){
                player.fire.fire=player.fire.fire.add(layers.fire.clickables["Make-Fire"].EFFECT())
                player.fire.make_fire_time=player.fire.make_fire_time.add(1)
            },
        },
        "Create-Fire-Seed":
        {
            display()
            {
                var goal=n(1e6)
                goal=goal.mul(n(100).pow(player.fire.fire_seed.pow(1.5)))
                return '火种!<br><br>需要 : '+format(goal)+'火<br><br>(注:这会重置你之前的进度)'
            },
            unlocked(){return true},
            style(){return {"width":"400px","border-radius":"0px","background-color":"red","height":"150px","min-height":"150px",}},
            canClick(){
                var goal=n(1e6)
                goal=goal.mul(n(100).pow(player.fire.fire_seed.pow(1.5)))
                return player.fire.fire.gte(goal)
            },
            onClick(){
                player.fire.fire_seed=player.fire.fire_seed.add(1)
                player.fire.fire=n(1)
                player.fire.ash=n(0)
                player.fire.total_ash=n(0)
                player.fire.best_fire=n(1)
                player.fire.upgrades=[]
            },
        },
        "Fire-1":
        {
            COST()
            {
                var cost=n(10)
                var x=player.fire.fire_1.div(10).floor()
                cost=cost.mul(n(10).pow(x.pow(1.1)))
                return cost
            },
            display()
            {
                return '购买 花费:'+format(layers.fire.clickables["Fire-1"].COST())
            },
            unlocked(){return player.fire.fire_seed.gte(0.5)},
            style(){
                if(player.fire.fire_energy.gte(layers.fire.clickables["Fire-1"].COST()))
                return {"width":"200px","border-radius":"0px","background-color":"red","height":"30px","min-height":"30px",}
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){
                return player.fire.fire_energy.gte(layers.fire.clickables["Fire-1"].COST())
            },
            onClick(){
                var mx=player.fire.fire_energy.add(1).logBase(10).root(1.1).mul(10)
                if(mx.sub(player.fire.fire_1).gte(30))
                {
                    player.fire.fire_1=mx.floor().sub(10)
                }
                else
                {
                    player.fire.fire_energy=player.fire.fire_energy.sub(layers.fire.clickables["Fire-1"].COST())
                    player.fire.fire_1=player.fire.fire_1.add(1)
                }
            },
        },
        "Fire-2":
        {
            COST()
            {
                var cost=n(100)
                var x=player.fire.fire_2.div(10).floor()
                cost=cost.mul(n(100).pow(x.pow(1.1)))
                return cost
            },
            display()
            {
                return '购买 花费:'+format(layers.fire.clickables["Fire-2"].COST())
            },
            unlocked(){return player.fire.fire_seed.gte(0.5)},
            style(){
                if(player.fire.fire_energy.gte(layers.fire.clickables["Fire-2"].COST()))
                return {"width":"200px","border-radius":"0px","background-color":"red","height":"30px","min-height":"30px",}
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){
                return player.fire.fire_energy.gte(layers.fire.clickables["Fire-2"].COST())
            },
            onClick(){
                var mx=player.fire.fire_energy.add(1).logBase(100).root(1.1).mul(10)
                if(mx.sub(player.fire.fire_2).gte(30))
                {
                    player.fire.fire_2=mx.floor().sub(10)
                }
                else
                {
                    player.fire.fire_energy=player.fire.fire_energy.sub(layers.fire.clickables["Fire-2"].COST())
                    player.fire.fire_2=player.fire.fire_2.add(1)
                }
            },
        },
        "Fire-3":
        {
            COST()
            {
                var cost=n(1000)
                var x=player.fire.fire_3.div(10).floor()
                cost=cost.mul(n(1000).pow(x.pow(1.1)))
                return cost
            },
            display()
            {
                return '购买 花费:'+format(layers.fire.clickables["Fire-3"].COST())
            },
            unlocked(){return player.fire.fire_seed.gte(0.5)},
            style(){
                if(player.fire.fire_energy.gte(layers.fire.clickables["Fire-3"].COST()))
                return {"width":"200px","border-radius":"0px","background-color":"red","height":"30px","min-height":"30px",}
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){
                return player.fire.fire_energy.gte(layers.fire.clickables["Fire-3"].COST())
            },
            onClick(){
                var mx=player.fire.fire_energy.add(1).logBase(1000).root(1.1).mul(10)
                if(mx.sub(player.fire.fire_3).gte(30))
                {
                    player.fire.fire_3=mx.floor().sub(10)
                }
                else
                {
                    player.fire.fire_energy=player.fire.fire_energy.sub(layers.fire.clickables["Fire-3"].COST())
                    player.fire.fire_3=player.fire.fire_3.add(1)
                }
            },
        },
        "Fire-4":
        {
            COST()
            {
                var cost=n(10000)
                var x=player.fire.fire_4.div(10).floor()
                cost=cost.mul(n(10000).pow(x.pow(1.1)))
                return cost
            },
            display()
            {
                return '购买 花费:'+format(layers.fire.clickables["Fire-4"].COST())
            },
            unlocked(){return player.fire.fire_seed.gte(0.5)},
            style(){
                if(player.fire.fire_energy.gte(layers.fire.clickables["Fire-4"].COST()))
                return {"width":"200px","border-radius":"0px","background-color":"red","height":"30px","min-height":"30px",}
                return {"width":"200px","border-radius":"0px","background-color":"grey","height":"30px","min-height":"30px",}},
            canClick(){
                return player.fire.fire_energy.gte(layers.fire.clickables["Fire-4"].COST())
            },
            onClick(){
                var mx=player.fire.fire_energy.add(1).logBase(10000).root(1.1).mul(10)
                if(mx.sub(player.fire.fire_4).gte(30))
                {
                    player.fire.fire_4=mx.floor().sub(10)
                }
                else
                {
                    player.fire.fire_energy=player.fire.fire_energy.sub(layers.fire.clickables["Fire-4"].COST())
                    player.fire.fire_4=player.fire.fire_4.add(1)
                }
            },
        },
    },
    upgrades:
    {
        "Ash-Upgrade-1":
        {
            EFFECT()
            {
                var eff=player.fire.make_fire_time
                eff=eff.add(1).pow(0.5)
                if(!hasUpgrade("fire","Ash-Upgrade-1"))eff=n(1)
                return eff
            },
            fullDisplay()
            {
                return "熟练<br>拱火次数增幅拱火效果<br><br>当前: x"+format(layers.fire.upgrades["Ash-Upgrade-1"].EFFECT())
                      +'<br>花费 : 10灰烬'
            },
            onPurchase()
            {
                player.fire.ash=player.fire.ash.sub(10)
            },
            canAfford()
            {
                return player.fire.ash.gte(10)
            },
            style(){
                if(hasUpgrade("fire","Ash-Upgrade-1"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(!layers.fire.upgrades["Ash-Upgrade-1"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"red","height":"150px"}},
            unlocked(){return player.fire.total_ash.gte(2)},
        },
        "Ash-Upgrade-2":
        {
            EFFECT()
            {
                var x=player.fire.fire.div(n(1).add(n(0.1)
                .mul(layers.fire.upgrades["Ash-Upgrade-5"].EFFECT())
                .div(layers.fire.upgrades["Ash-Upgrade-4"].EFFECT()))).max(1)
                var eff=player.fire.fire.sub(x)
                eff=eff.add(1).logBase(10)
                eff=n(2).pow(eff)
                if(!hasUpgrade("fire","Ash-Upgrade-2"))eff=n(1)
                return eff
            },
            fullDisplay()
            {
                return "大火<br>每秒损失的火增幅灰烬获取<br><br>当前: x"+format(layers.fire.upgrades["Ash-Upgrade-2"].EFFECT())
                      +'<br>花费 : 150灰烬'
            },
            onPurchase()
            {
                player.fire.ash=player.fire.ash.sub(150)
            },
            canAfford()
            {
                return player.fire.ash.gte(150)
            },
            style(){
                if(hasUpgrade("fire","Ash-Upgrade-2"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(!layers.fire.upgrades["Ash-Upgrade-2"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"red","height":"150px"}},
            unlocked(){return hasUpgrade("fire","Ash-Upgrade-1")},
        },
        "Ash-Upgrade-3":
        {
            EFFECT()
            {
                var eff=player.fire.total_ash
                eff=eff.add(1).pow(0.2)
                if(eff.gte(1e20))
                {
                    eff=eff.div(1e20).pow(0.5).mul(1e20)
                }
                if(!hasUpgrade("fire","Ash-Upgrade-3"))eff=n(1)
                return eff
            },
            fullDisplay()
            {
                return "余烬<br>总灰烬增幅拱火效果<br><br>当前: x"+format(layers.fire.upgrades["Ash-Upgrade-3"].EFFECT())
                      +'<br>花费 : 2000灰烬'
            },
            onPurchase()
            {
                player.fire.ash=player.fire.ash.sub(2000)
            },
            canAfford()
            {
                return player.fire.ash.gte(2000)
            },
            style(){
                if(hasUpgrade("fire","Ash-Upgrade-3"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(!layers.fire.upgrades["Ash-Upgrade-3"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"red","height":"150px"}},
            unlocked(){return hasUpgrade("fire","Ash-Upgrade-2")},
        },
        "Ash-Upgrade-4":
        {
            EFFECT()
            {
                var eff=player.fire.best_fire
                eff=eff.add(1).logBase(100)
                if(!hasUpgrade("fire","Ash-Upgrade-4"))eff=n(1)
                return eff
            },
            fullDisplay()
            {
                return "缓慢<br>你的火消逝的更慢 , 基于你的最好火<br><br>当前: /"+format(layers.fire.upgrades["Ash-Upgrade-4"].EFFECT())
                      +'<br>花费 : 1e5灰烬'
            },
            onPurchase()
            {
                player.fire.ash=player.fire.ash.sub(1e5)
            },
            canAfford()
            {
                return player.fire.ash.gte(1e5)
            },
            style(){
                if(hasUpgrade("fire","Ash-Upgrade-4"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(!layers.fire.upgrades["Ash-Upgrade-4"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"red","height":"150px"}},
            unlocked(){return hasUpgrade("fire","Ash-Upgrade-3")},
        },
        "Ash-Upgrade-5":
        {
            EFFECT()
            {
                var eff=n(20)
                if(!hasUpgrade("fire","Ash-Upgrade-5"))eff=n(1)
                return eff
            },
            fullDisplay()
            {
                return "火花<br><i>一瞬即逝...</i><br>拱火的效果被提高到1.5次方 , 但火焰的流失速度变成20倍<br>"
                      +'<br>花费 : 4e5灰烬'
            },
            onPurchase()
            {
                player.fire.ash=player.fire.ash.sub(4e5)
                player.fire.unlock_fireseed=n(1)
            },
            canAfford()
            {
                return player.fire.ash.gte(4e5)
            },
            style(){
                if(hasUpgrade("fire","Ash-Upgrade-5"))
                return {"width":"150px","border-radius":"0px","background-color":"grey","height":"150px"}
                if(!layers.fire.upgrades["Ash-Upgrade-5"].canAfford())
                return {"width":"150px","border-radius":"0px","background-color":"white","height":"150px"}
                return {"width":"150px","border-radius":"0px","background-color":"red","height":"150px"}},
            unlocked(){return hasUpgrade("fire","Ash-Upgrade-4")},
        },
    },
    hotkeys: [
        {
            key: "n", 
            description: "n:购买所有 压缩火",
            onPress() {
                if(player.fire.unlock_fireseed.lte(0.5))
                return
                if(layers.fire.clickables["Fire-4"].canClick())layers.fire.clickables["Fire-4"].onClick()
                if(layers.fire.clickables["Fire-3"].canClick())layers.fire.clickables["Fire-3"].onClick()
                if(layers.fire.clickables["Fire-2"].canClick())layers.fire.clickables["Fire-2"].onClick()
                if(layers.fire.clickables["Fire-1"].canClick())layers.fire.clickables["Fire-1"].onClick()
            },
            unlocked() {return true}
        },
    ],
    row: 2,
	microtabs:
    {
        "Fire":
        {
			"Ash":{
                unlocked(){return player.fire.total_ash.gte(2)},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"grey"}
                },
				content:[
                    "blank",
                    ["row",[["upgrade","Ash-Upgrade-1"],["upgrade","Ash-Upgrade-2"],["upgrade","Ash-Upgrade-3"],["upgrade","Ash-Upgrade-4"],]],
                    ["row",[["upgrade","Ash-Upgrade-5"],["upgrade","Ash-Upgrade-6"],["upgrade","Ash-Upgrade-7"],["upgrade","Ash-Upgrade-8"],]],
				],
			},
		},
        "Fire Seed":
        {
			"FIRE=>fire":{
                unlocked(){return player.fire.fire_seed.gte(0.5)},
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"red"}
                },
				content:[
                    "blank",
                    ["row",[
                    ["display-text",
                        function() {
                            var s='<text style="color:#FF0000">1阶·压缩火 : '+format(player.fire.fire_1.add(player.fire.extra_fire_1))
                            +'('+format(player.fire.fire_1)+')'
                            +'(x'+format(player.fire.beishu_1)+')'
                            if(player.fire.fire_seed.lte(0.5))s=''
                            return s
                        },
                        { "color": "white", "font-size": "28px",}
                    ],"blank","blank",["clickable","Fire-1"]]],
                    ["row",[
                    ["display-text",
                        function() {
                            var s='<text style="color:#FF000090">2阶·压缩火 : '+format(player.fire.fire_2.add(player.fire.extra_fire_2))
                            +'('+format(player.fire.fire_2)+')'
                            +'(x'+format(player.fire.beishu_2)+')'
                            if(player.fire.fire_seed.lte(0.5))s=''
                            return s
                        },
                        { "color": "white", "font-size": "28px",}
                    ],"blank","blank",["clickable","Fire-2"]]],
                    ["row",[
                    ["display-text",
                        function() {
                            var s='<text style="color:#FF000070">3阶·压缩火 : '+format(player.fire.fire_3.add(player.fire.extra_fire_3))
                            +'('+format(player.fire.fire_3)+')'
                            +'(x'+format(player.fire.beishu_3)+')'
                            if(player.fire.fire_seed.lte(0.5))s=''
                            return s
                        },
                        { "color": "white", "font-size": "28px",}
                    ],"blank","blank",["clickable","Fire-3"]]],
                    ["row",[
                    ["display-text",
                        function() {
                            var s='<text style="color:#FF000050">4阶·压缩火 : '+format(player.fire.fire_4.add(player.fire.extra_fire_4))
                            +'('+format(player.fire.fire_4)+')'
                            +'(x'+format(player.fire.beishu_4)+')'
                            if(player.fire.fire_seed.lte(0.5))s=''
                            return s
                        },
                        { "color": "white", "font-size": "28px",}
                    ],"blank","blank",["clickable","Fire-4"]]],
				],
			},
		},
    },
    tabFormat:
    {
        "Fire":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '你有 <text style="color:red">'+format(player.fire.fire)+'</text> 火'
                    },
                    { "color": "white", "font-size": "32px",}
                ],
                ["display-text",
                    function() {
                        return '每秒有'+format(n(10).mul(layers.fire.upgrades["Ash-Upgrade-5"].EFFECT()).div(layers.fire.upgrades["Ash-Upgrade-4"].EFFECT()))+'%的火焰被转化成灰烬'
                    },
                    { "color": "white", "font-size": "16px",}
                ],
                "blank",
                ["display-text",
                    function() {
                        if(player.fire.total_ash.gte(0.001))
                        return '你有 <text style="color:grey">'+format(player.fire.ash)+'</text> 灰烬'
                    },
                    { "color": "white", "font-size": "22px",}
                ],
                "blank",
                ["row",[["clickable","Make-Fire"]]],
                "blank",
                "blank",
                ["microtabs","Fire",{'border-width':'0px'}],
            ],
        },
        "Fire Seed":
        {
            unlocked(){
                return player.fire.unlock_fireseed.gte(0.5)
            },
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '你有 <text style="color:red">'+format(player.fire.fire_seed)+'</text> 火种'
                    },
                    { "color": "white", "font-size": "32px",}
                ],
                ["display-text",
                    function() {
                        return '你的 火焰能量 生产被提高到 <text style="color:red">'+format(player.fire.fire_seed.div(10).add(1))+'</text> 次方<br>基于你的火种'
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                "blank",
                ["row",[["clickable","Create-Fire-Seed"]]],
                "blank",
                "blank",
                ["display-text",
                    function() {
                        return '你有 <text style="color:red">'+format(player.fire.fire_energy)+'</text> 火焰能量'
                        +' ( + <text style="color:red">'+format(
                            player.fire.fire_1.add(player.fire.extra_fire_1)
                            .pow(player.fire.fire_seed.div(10).add(1)).mul(player.fire.beishu_1))+'</text> /s)'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() {
                        return '你的火焰能量让你的拱火效果 x<text style="color:red">'
                        +format(n(1.5).pow(
                            player.fire.fire_energy.add(1).logBase(10)
                            .div(player.fire.fire_energy.add(1).logBase(5).add(1).logBase(5))))
                    },
                    { "color": "white", "font-size": "20px",}
                ],
                ["microtabs","Fire Seed",{'border-width':'0px'}],
            ],
        },
        "Features":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '你拱了 <text style="color:red">'+format(player.fire.make_fire_time)+'</text> 次火'
                    },
                    { "color": "white", "font-size": "30px",}
                ],
                ["display-text",
                    function() {
                        return '你最多有 <text style="color:red">'+format(player.fire.best_fire)+'</text> 火'
                    },
                    { "color": "white", "font-size": "30px",}
                ],
                ["display-text",
                    function() {
                        if(player.fire.total_ash.gte(0.001))
                        return '你一共有 <text style="color:grey">'+format(player.fire.total_ash)+'</text> 灰烬'
                    },
                    { "color": "white", "font-size": "30px",}
                ],
            ],
        },
    },
    layerShown()
    {
        return player.r.in_night.gte(0.5) && player.fire.unlock_fire.gte(0.5)
    },
})