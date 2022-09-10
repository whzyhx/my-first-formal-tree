addLayer("i",
{
    symbol: "I", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),
            white_num:zero,extra_white:zero,
            infinity_white_num:zero,
            infinity_white_energy:zero,infinity_white_power:one,
            red_num:zero,extra_red:zero,
            yellow_num:zero,extra_yellow:zero,
            blue_num:zero,extra_blue:zero,
            orange_num:zero,
            purple_num:zero,
            green_num:zero,
            a:one,b:one,c:zero,d:one,e:one,f:one,
            colorcolor:zero,

            infinity_unlocked:zero,
            infinity_points:zero,total_infinity_points:zero,infinity_points_power:one,
            infinity_upgrade_1_num:zero,
            s:"#000000"
        }
    },
    color: "white",
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(10),
    exponent:1,
    baseAmount()
    {
        return player.points
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
    update(diff)
    {
        if(player.points.gte(1e15))
        {
            player.i.infinity_unlocked=n(1)
        }
        player.i.colorcolor=player.i.colorcolor.add(n(1).mul(diff))
        if(player.i.colorcolor.gte(15))
        {
            player.i.colorcolor=player.i.colorcolor.sub(player.i.colorcolor.div(15).floor().mul(15))
        }
        var s='#'
        var x=player.i.colorcolor.floor()
        var ch=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        s+=ch[x]
        s+=ch[x]
        s+=ch[x]
        s+=ch[x]
        s+=ch[x]
        s+=ch[x]
        player.i.sss=s
        player.i.extra_white=player.i.extra_white.add(player.i.b.mul(diff))
        player.i.extra_red=player.i.extra_red.add(layers.i.clickables["Tube-Orange"].PRODUCE().mul(diff))
        player.i.extra_yellow=player.i.extra_yellow.add(layers.i.clickables["Tube-Purple"].PRODUCE().mul(diff))
        player.i.extra_blue=player.i.extra_blue.add(layers.i.clickables["Tube-Green"].PRODUCE().mul(diff))

        //infinity

        player.i.infinity_white_energy=player.i.infinity_white_energy.add(layers.i.clickables["Infinity-Tube-White"].EFFECT().mul(diff))
        player.i.infinity_white_power=player.i.infinity_white_energy.add(1).pow(0.125)
        
        player.i.infinity_points_power=player.i.total_infinity_points.add(1).pow(0.2)
    },
    tooltip(){return '我就不'
    },
    clickables:
    {
        "Tube-White":
        {
            COST()
            {
                var need=n(10)
                need=need.mul(n(1.1).pow(player.i.white_num.pow(player.i.d).mul(player.i.a))).div(player.i.infinity_points_power)
                return need
            },
            EFFECT()
            {
                var eff=n(player.i.white_num).add(player.i.extra_white).pow(player.i.f).mul(player.i.c).mul(player.i.infinity_white_power)
                return eff
            },
            display()
            {
                var formula_1='10*1.1<sup>x'
                if(hasUpgrade("i","Color-Orange"))formula_1=formula_1+'<sup>d</sup>'
                if(hasUpgrade("i","Color-Red"))formula_1=formula_1+'*a'
                var formula_2='x'
                if(hasUpgrade("i","Color-Green"))formula_2=formula_2+'<sup>f</sup>'
                if(hasUpgrade("i","Color-Blue"))formula_2=formula_2+'*c'
                if(hasUpgrade("i","Infinity-Color-White"))formula_2=formula_2+'*IWP'
                var extra=''
                if(hasUpgrade("i","Color-Yellow"))extra=extra+'+(额外的:'+format(player.i.extra_white)+')'
                return '白色 Tube<br>生产基础能源<br>价格公式:'+formula_1+'<br>效率公式:'+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-White"].COST())
                        +'<br>效率:'+format(layers.i.clickables["Tube-White"].EFFECT())
                        +'<br>已购买:'+format(player.i.white_num)+extra
            },
            unlocked(){return hasUpgrade("i","Color-White")},
            style(){return {"width":"600px","border-radius":"0px","background-color":"white","height":"150px",}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-White"].COST())},
            onClick(){
                if(player.points.div(layers.i.clickables["Tube-White"].COST()).lte(100))
                {
                    while(player.points.gte(layers.i.clickables["Tube-White"].COST()))
                    {
                        player.points=player.points.sub(layers.i.clickables["Tube-White"].COST())
                        player.i.white_num=player.i.white_num.add(1)
                    }
                }
                else
                {
                    var x=player.points.mul(player.i.infinity_points_power).div(10).logBase(1.1).div(player.i.a).root(player.i.d)
                    var y=x.sub(player.i.white_num).div(10).ceil()
                    player.i.white_num=player.i.white_num.add(y)
                    player.points=player.points.div(10).mul(7)
                }
            }
        },
        "Tube-Red":
        {
            COST()
            {
                var need=n(50)
                need=need.mul(n(1.2).pow(player.i.red_num)).div(player.i.infinity_points_power)
                return need
            },
            EFFECT()
            {
                let eff=n(player.i.red_num).add(player.i.extra_red)
                eff=eff.pow(n(0.75).mul(player.i.e)).div(2).add(1)
                eff=n(1).div(eff)
                player.i.a=eff
                return eff
            },
            display()
            {
                var formula_1='50*1.2<sup>x'
                var formula_2='1/(1+x<sup>0.75'
                if(hasUpgrade("i","Color-Purple"))formula_2=formula_2+'*e'
                formula_2=formula_2+'</sup>/2)'
                var extra=''
                if(hasUpgrade("i","Color-Orange"))extra=extra+'+(额外的:'+format(player.i.extra_red)+')'
                return '红色 Tube<br>降低白色 Tube 的价格<br>价格公式:'+formula_1+'<br>a公式:'+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-Red"].COST())
                        +'<br>a='+format(layers.i.clickables["Tube-Red"].EFFECT())
                        +'<br>已购买:'+format(player.i.red_num)+extra
            },
            unlocked(){return hasUpgrade("i","Color-Red")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"red","height":"150px"}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-Red"].COST())},
            onClick(){
                if(player.points.div(layers.i.clickables["Tube-Red"].COST()).lte(100))
                {
                    while(player.points.gte(layers.i.clickables["Tube-Red"].COST()))
                    {
                        player.points=player.points.sub(layers.i.clickables["Tube-Red"].COST())
                        player.i.red_num=player.i.red_num.add(1)
                    }
                }
                else
                {
                    var x=player.points.mul(player.i.infinity_points_power).div(50).logBase(1.2)
                    var y=x.sub(player.i.red_num).div(10).ceil()
                    player.i.red_num=player.i.red_num.add(y)
                    player.points=player.points.div(10).mul(7)
                }
            }
        },
        "Tube-Yellow":
        {
            COST()
            {
                var need=n(50)
                need=need.mul(n(1.2).pow(player.i.yellow_num)).div(player.i.infinity_points_power)
                return need
            },
            EFFECT()
            {
                if(player.i.yellow_num.lte(0.5))
                {
                    player.i.b=n(0)
                    return n(0)
                }
                let eff=n(player.i.yellow_num).add(1).add(player.i.extra_yellow)
                eff=eff.logBase(3).div(3)
                player.i.b=eff
                return eff
            },
            display()
            {
                var formula_1='50*1.2<sup>x'
                var formula_2='log<sub>3</sub>x/3'
                var extra=''
                if(hasUpgrade("i","Color-Purple"))extra=extra+'+(额外的:'+format(player.i.extra_yellow)+')'
                return '黄色 Tube<br>缓慢生产白色 Tube<br>价格公式:'+formula_1+'<br>b公式:'+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-Yellow"].COST())
                        +'<br>b='+format(layers.i.clickables["Tube-Yellow"].EFFECT())
                        +'<br>已购买:'+format(player.i.yellow_num)+extra
            },
            unlocked(){return hasUpgrade("i","Color-Yellow")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"yellow","height":"150px"}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-Yellow"].COST())},
            onClick(){
                if(player.points.div(layers.i.clickables["Tube-Yellow"].COST()).lte(100))
                {
                    while(player.points.gte(layers.i.clickables["Tube-Yellow"].COST()))
                    {
                        player.points=player.points.sub(layers.i.clickables["Tube-Yellow"].COST())
                        player.i.yellow_num=player.i.yellow_num.add(1)
                    }
                }
                else
                {
                    var x=player.points.mul(player.i.infinity_points_power).div(50).logBase(1.2)
                    var y=x.sub(player.i.yellow_num).div(10).ceil()
                    player.i.yellow_num=player.i.yellow_num.add(y)
                    player.points=player.points.div(10).mul(7)
                }
            }
        },
        "Tube-Blue":
        {
            COST()
            {
                var need=n(50)
                need=need.mul(n(1.2).pow(player.i.blue_num)).div(player.i.infinity_points_power)
                return need
            },
            EFFECT()
            {
                let eff=n(player.i.blue_num).add(player.i.extra_blue)
                eff=eff.add(1).pow(n(0.5).mul(player.i.e))
                player.i.c=eff
                return eff
            },
            display()
            {
                var formula_1='50*1.2<sup>x'
                var formula_2='(x+1)<sup>0.5'
                if(hasUpgrade("i","Color-Purple"))formula_2=formula_2+'*e'
                var extra=''
                if(hasUpgrade("i","Color-Green"))extra=extra+'+(额外的:'+format(player.i.extra_blue)+')'
                return '蓝色 Tube<br>增幅白色 Tube 的效率<br>价格公式:'+formula_1+'<br>c公式:'+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-Blue"].COST())
                        +'<br>c='+format(layers.i.clickables["Tube-Blue"].EFFECT())
                        +'<br>已购买:'+format(player.i.blue_num)+extra
            },
            unlocked(){return hasUpgrade("i","Color-Blue")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"blue","height":"150px"}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-Blue"].COST())},
            onClick(){
                if(player.points.div(layers.i.clickables["Tube-Blue"].COST()).lte(100))
                {
                    while(player.points.gte(layers.i.clickables["Tube-Blue"].COST()))
                    {
                        player.points=player.points.sub(layers.i.clickables["Tube-Blue"].COST())
                        player.i.blue_num=player.i.blue_num.add(1)
                    }
                }
                else
                {
                    var x=player.points.mul(player.i.infinity_points_power).div(50).logBase(1.2)
                    var y=x.sub(player.i.blue_num).div(10).ceil()
                    player.i.blue_num=player.i.blue_num.add(y)
                    player.points=player.points.div(10).mul(7)
                }
            }
        },
        "Tube-Orange":
        {
            COST()
            {
                var need=n(1e5)
                need=need.mul(n(2).pow(player.i.orange_num.pow(1.25))).div(player.i.infinity_points_power)
                return need
            },
            EFFECT()
            {
                let eff=n(player.i.orange_num)
                eff=eff.add(1).pow(0.1).rec()
                player.i.d=eff
                return eff
            },
            PRODUCE()
            {
                var eff=player.i.orange_num
                eff=eff.div(10)
                return eff
            },
            display()
            {
                var formula_1='100000*2<sup>x<sup>1.25'
                var formula_2='(1+x)<sup>0.1</sup>'
                var formula_3='0.1x'
                return '橙色 Tube<br>缓慢生产 红色 Tube<br>减少 白色 Tube 的价格指数<br>价格公式:'+formula_1+'<br>d公式:'+formula_2+'<br>生产公式:'+formula_3
                        +'<br>价格:'+format(layers.i.clickables["Tube-Orange"].COST())
                        +'<br>d='+format(layers.i.clickables["Tube-Orange"].EFFECT())
                        +'<br>生产:'+format(layers.i.clickables["Tube-Orange"].PRODUCE())
                        +'<br>已购买:'+format(player.i.orange_num)
            },
            unlocked(){return hasUpgrade("i","Color-Orange")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"orange","height":"250px"}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-Orange"].COST())},
            onClick(){
                if(player.points.div(layers.i.clickables["Tube-Orange"].COST()).lte(100))
                {
                    while(player.points.gte(layers.i.clickables["Tube-Orange"].COST()))
                    {
                        player.points=player.points.sub(layers.i.clickables["Tube-Orange"].COST())
                        player.i.orange_num=player.i.orange_num.add(1)
                    }
                }
                else
                {
                    var x=player.points.mul(player.i.infinity_points_power).div(1e6).logBase(2)
                    var y=x.sub(player.i.orange_num).div(10).ceil()
                    player.i.orange_num=player.i.orange_num.add(y)
                    player.points=player.points.div(10).mul(7)
                }
            }
        },
        "Tube-Purple":
        {
            COST()
            {
                var need=n(1e5)
                need=need.mul(n(2).pow(player.i.purple_num.pow(1.25))).div(player.i.infinity_points_power)
                return need
            },
            EFFECT()
            {
                let eff=n(player.i.purple_num)
                eff=eff.div(20).add(1)
                player.i.e=eff
                return eff
            },
            PRODUCE()
            {
                var eff=player.i.purple_num
                eff=eff.div(10)
                return eff
            },
            display()
            {
                var formula_1='100000*2<sup>x<sup>1.25'
                var formula_2='1+0.05*x'
                var formula_3='0.1x'
                return '紫色 Tube<br>缓慢生产 黄色 Tube<br>提高 红色和蓝色 Tube 的效率指数<br>价格公式:'+formula_1+'<br>e公式:'+formula_2+'<br>生产公式:'+formula_3
                        +'<br>价格:'+format(layers.i.clickables["Tube-Purple"].COST())
                        +'<br>e='+format(layers.i.clickables["Tube-Purple"].EFFECT())
                        +'<br>生产:'+format(layers.i.clickables["Tube-Purple"].PRODUCE())
                        +'<br>已购买:'+format(player.i.purple_num)
            },
            unlocked(){return hasUpgrade("i","Color-Purple")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"purple","height":"250px"}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-Purple"].COST())},
            onClick(){
                if(player.points.div(layers.i.clickables["Tube-Purple"].COST()).lte(100))
                {
                    while(player.points.gte(layers.i.clickables["Tube-Purple"].COST()))
                    {
                        player.points=player.points.sub(layers.i.clickables["Tube-Purple"].COST())
                        player.i.purple_num=player.i.purple_num.add(1)
                    }
                }
                else
                {
                    var x=player.points.mul(player.i.infinity_points_power).div(1e6).logBase(2)
                    var y=x.sub(player.i.purple_num).div(10).ceil()
                    player.i.purple_num=player.i.purple_num.add(y)
                    player.points=player.points.div(10).mul(7)
                }
            }
        },
        "Tube-Green":
        {
            COST()
            {
                var need=n(1e5)
                need=need.mul(n(2).pow(player.i.green_num.pow(1.25))).div(player.i.infinity_points_power)
                return need
            },
            EFFECT()
            {
                let eff=n(player.i.green_num)
                eff=eff.add(1).logBase(10).div(5).add(1)
                player.i.f=eff
                return eff
            },
            PRODUCE()
            {
                var eff=player.i.green_num
                eff=eff.div(10)
                return eff
            },
            display()
            {
                var formula_1='100000*2<sup>x<sup>1.25'
                var formula_2='1+log<sub>10</sub>(1+x)/5'
                var formula_3='0.1x'
                return '绿色 Tube<br>缓慢生产 蓝色 Tube<br>提高 白色 Tube 的效率指数<br>价格公式:'+formula_1+'<br>f公式:'+formula_2+'<br>生产公式:'+formula_3
                        +'<br>价格:'+format(layers.i.clickables["Tube-Green"].COST())
                        +'<br>f='+format(layers.i.clickables["Tube-Green"].EFFECT())
                        +'<br>生产:'+format(layers.i.clickables["Tube-Green"].PRODUCE())
                        +'<br>已购买:'+format(player.i.green_num)
            },
            unlocked(){return hasUpgrade("i","Color-Green")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"green","height":"250px"}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-Green"].COST())},
            onClick(){
                if(player.points.div(layers.i.clickables["Tube-Green"].COST()).lte(100))
                {
                    while(player.points.gte(layers.i.clickables["Tube-Green"].COST()))
                    {
                        player.points=player.points.sub(layers.i.clickables["Tube-Green"].COST())
                        player.i.green_num=player.i.green_num.add(1)
                    }
                }
                else
                {
                    var x=player.points.mul(player.i.infinity_points_power).div(1e6).logBase(2)
                    var y=x.sub(player.i.green_num).div(10).ceil()
                    player.i.green_num=player.i.green_num.add(y)
                    player.points=player.points.div(10).mul(7)
                }
            }
        },
        "Infinity":
        {
            GAIN(x)
            {
                var gain=n(x)
                gain=gain.div(1e14).logBase(10)
                gain=gain.max(0).floor()
                return gain
            },
            NEED(x)
            {
                var need=n(1e14)
                need=need.mul(n(10).pow(x))
                return need
            },
            display()
            {
                return '重置你的 普通 Tube<br>获得: + '+format(layers.i.clickables["Infinity"].GAIN(player.points))+' 无尽点'
                        +'<br>下一个无尽点在 '+format(layers.i.clickables["Infinity"].NEED(layers.i.clickables["Infinity"].GAIN(player.points).add(1)))+' 能源'
            },
            unlocked(){return true},
            style(){return {"width":"300px","border-radius":"0px","background-color":player.i.sss,"height":"100px",}},
            canClick(){return layers.i.clickables["Infinity"].GAIN(player.points).gte(1)},
            onClick(){
                player.i.infinity_points=player.i.infinity_points.add(layers.i.clickables["Infinity"].GAIN(player.points))
                player.i.total_infinity_points=player.i.total_infinity_points.add(layers.i.clickables["Infinity"].GAIN(player.points))
                player.points=n(10)
                player.i.white_num=n(0)
                player.i.extra_white=n(0)
                player.i.red_num=n(0)
                player.i.extra_red=n(0)
                player.i.yellow_num=n(0)
                player.i.extra_yellow=n(0)
                player.i.blue_num=n(0)
                player.i.extra_blue=n(0)
                player.i.orange_num=n(0)
                player.i.green_num=n(0)
                player.i.purple_num=n(0)
                var upg=player.i.upgrades
                var nwupg=[]
                for(var i=0;i<upg.length;i+=1)
                {
                    if(
                        upg[i]=="Color-White" || 
                        upg[i]=="Color-Red" || 
                        upg[i]=="Color-Yellow" || 
                        upg[i]=="Color-Blue" || 
                        upg[i]=="Color-Orange" || 
                        upg[i]=="Color-Purple" || 
                        upg[i]=="Color-Green"
                    )
                    {
                        continue
                    }
                    nwupg.push(upg[i])
                }
                player.i.upgrades=nwupg
            }
        },
        "Infinity-Tube-White":
        {
            COST()
            {
                var need=n(1)
                need=need.mul(n(1.1).pow(player.i.infinity_white_num))
                return need
            },
            EFFECT()
            {
                var eff=n(player.i.infinity_white_num)
                eff=eff.pow(2)
                return eff
            },
            display()
            {
                var formula_1='1.1<sup>x</sup>'
                var formula_2='x<sup>2</sup>'
                return '无尽 白色 Tube<br>生产无尽能源-白<br>价格公式:'+formula_1+'<br>效率公式:'+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Infinity-Tube-White"].COST())
                        +'<br>效率:'+format(layers.i.clickables["Infinity-Tube-White"].EFFECT())
                        +'<br>已购买:'+format(player.i.infinity_white_num)
            },
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
            style(){
                return {"width":"600px","border-radius":"0px","background-color":"white","height":"150px",
                        "border-width":"20px","border-color":player.i.sss}},
            canClick(){return player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-White"].COST())},
            onClick(){
                if(player.i.infinity_points.div(layers.i.clickables["Infinity-Tube-White"].COST()).lte(100))
                {
                    while(player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-White"].COST()))
                    {
                        player.i.infinity_points=player.i.infinity_points.sub(layers.i.clickables["Infinity-Tube-White"].COST())
                        player.i.infinity_white_num=player.i.infinity_white_num.add(1)
                    }
                }
                else
                {
                    var x=player.i.infinity_points.div(1).logBase(1.1).div(player.i.a).root(player.i.d)
                    var y=x.sub(player.i.infinity_white_num).div(10).ceil()
                    player.i.infinity_white_num=player.i.infinity_white_num.add(y)
                    player.i.infinity_points=player.i.infinity_points.div(10).mul(7)
                }
            }
        },
        "Infinity-Upgrade-1":
        {
            COST()
            {
                var need=n(10)
                need=need.pow(player.i.infinity_upgrade_1_num.add(1))
                return need
            },
            EFFECT(x)
            {
                var eff=n(2)
                eff=eff.pow(player.i.infinity_upgrade_1_num)
                return eff
            },
            display()
            {
                return '似曾相识<br><br>无尽点倍率x2<br><br>花费: '+format(layers.i.clickables["Infinity-Upgrade-1"].COST())+' 无尽点<br>'
                        +'当前:x'+format(layers.i.clickables["Infinity-Upgrade-1"].EFFECT())
            },
            unlocked(){return true},
            style(){return {"width":"300px","border-radius":"0px","background-color":"white","height":"100px",}},
            canClick(){return layers.i.clickables["Infinity"].GAIN(player.points).gte(1)},
            onClick(){
            }
        },
    },
    cost_1()
    {
        var cost=n(100)
        var x=n(0)
        if(hasUpgrade("i","Color-Red"))
        {
            x=x.add(1)
        }
        if(hasUpgrade("i","Color-Blue"))
        {
            x=x.add(1)
        }
        if(hasUpgrade("i","Color-Yellow"))
        {
            x=x.add(1)
        }
        if(x.eq(1))
        {
            cost=n(2000)
        }
        if(x.gt(1.5))
        {
            cost=n(50000)
        }
        cost=cost.div(player.i.infinity_points_power)
        return cost
    },
    cost_2()
    {
        var cost=n(200000)
        var x=n(0)
        if(hasUpgrade("i","Color-Orange"))
        {
            x=x.add(1)
        }
        if(hasUpgrade("i","Color-Purple"))
        {
            x=x.add(1)
        }
        if(hasUpgrade("i","Color-Green"))
        {
            x=x.add(1)
        }
        if(x.eq(1))
        {
            cost=n(1e6)
        }
        if(x.gt(1.5))
        {
            cost=n(1e7)
        }
        cost=cost.div(player.i.infinity_points_power)
        return cost
    },
    upgrades:
    {
        "Color-White":
        {
            fullDisplay()
            {
                return "解锁 - 白色 Tube<br><br>花费:0能源"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return true
            },
            style(){return {"width":"600px","border-radius":"0px","background-color":"white","height":"150px"}},
            unlocked(){return true},
        },
        "Color-Red":
        {
            fullDisplay()
            {
                return "解锁 - 红色 Tube<br><br>花费:"+format(layers.i.cost_1())+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(layers.i.cost_1())
            },
            canAfford()
            {
                return player.points.gte(layers.i.cost_1())
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"red","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-White")},
            branches:["Color-Orange","Color-Purple"],
        },
        "Color-Yellow":
        {
            fullDisplay()
            {
                return "解锁 - 黄色 Tube<br><br>花费:"+format(layers.i.cost_1())+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(layers.i.cost_1())
            },
            canAfford()
            {
                return player.points.gte(layers.i.cost_1())
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"yellow","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-White")},
            branches:["Color-Orange","Color-Green"],
        },
        "Color-Blue":
        {
            fullDisplay()
            {
                return "解锁 - 蓝色 Tube<br><br>花费:"+format(layers.i.cost_1())+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(layers.i.cost_1())
            },
            canAfford()
            {
                return player.points.gte(layers.i.cost_1())
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"blue","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-White")},
            branches:["Color-Green","Color-Purple"],
        },
        "Color-Orange":
        {
            fullDisplay()
            {
                return "解锁 - 橙色 Tube<br><br>花费:"+format(layers.i.cost_2())+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(layers.i.cost_2())
            },
            canAfford()
            {
                return player.points.gte(layers.i.cost_2())
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"orange","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-Red") && hasUpgrade("i","Color-Yellow")},
        },
        "Color-Purple":
        {
            fullDisplay()
            {
                return "解锁 - 紫色 Tube<br><br>花费:"+format(layers.i.cost_2())+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(layers.i.cost_2())
            },
            canAfford()
            {
                return player.points.gte(layers.i.cost_2())
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"purple","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-Red") && hasUpgrade("i","Color-Blue")},
        },
        "Color-Green":
        {
            fullDisplay()
            {
                return "解锁 - 绿色 Tube<br><br>花费:"+format(layers.i.cost_2())+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(layers.i.cost_2())
            },
            canAfford()
            {
                return player.points.gte(layers.i.cost_2())
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"green","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-Blue") && hasUpgrade("i","Color-Yellow")},
        },
        "Infinity-Color-White":
        {
            fullDisplay()
            {
                return "解锁 - 无尽 白色 Tube<br><br>花费:0无尽点"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return true
            },
            style(){
                return {"width":"600px","border-radius":"0px","background-color":"white","height":"150px",
                        "border-width":"20px","border-color":player.i.sss}},
            unlocked(){return true},
        },
        "Infinity-Color-Red":
        {
            fullDisplay()
            {
                return "解锁 - 无尽 红色 Tube<br><br>花费:???无尽点"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return false
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"red","height":"150px",
                        "border-width":"20px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
        },
        "Infinity-Color-Yellow":
        {
            fullDisplay()
            {
                return "解锁 - 无尽 红色 Tube<br><br>花费:???无尽点"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return false
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"yellow","height":"150px",
                        "border-width":"20px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
        },
        "Infinity-Color-Blue":
        {
            fullDisplay()
            {
                return "解锁 - 无尽 蓝色 Tube<br><br>花费:???无尽点"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return false
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"blue","height":"150px",
                        "border-width":"20px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
        },
    },
	microtabs:
    {
        "Idle Research":
        {
			"Tube":{
                buttonStyle()
                {
                    return {"border-radius":"0px"}
                },
				content:[
                    "blank",
                    ["row",[["clickable","Tube-White"]]],
                    ["row",[["clickable","Tube-Red"],["clickable","Tube-Yellow"],["clickable","Tube-Blue"],]],
                    ["row",[["clickable","Tube-Orange"],["clickable","Tube-Purple"],["clickable","Tube-Green"],]],
				]
			},
			"Color":{
                buttonStyle()
                {
                    return {"border-radius":"0px"}
                },
				content:[
                    "blank",
                    ["row",[["upgrade","Color-White"]]],
                    ["row",[["upgrade","Color-Red"],["upgrade","Color-Yellow"],["upgrade","Color-Blue"],]],
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    ["row",[["upgrade","Color-Orange"],["upgrade","Color-Purple"],["upgrade","Color-Green"],]],
				]
			},
		},
        "Infinity":
        {
			"Tube":{
                buttonStyle()
                {
                    return {"border-radius":"0px"}
                },
				content:[
                    "blank",
                    ["row",[["clickable","Infinity-Tube-White"]]],
                    ["row",[["clickable","Infinity-Tube-Red"],["clickable","Infinity-Tube-Yellow"],["clickable","Infinity-Tube-Blue"],]],
                    ["row",[["clickable","Infinity-Tube-Orange"],["clickable","Infinity-Tube-Purple"],["clickable","Infinity-Tube-Green"],]],
				]
			},
			"Color":{
                buttonStyle()
                {
                    return {"border-radius":"0px"}
                },
				content:[
                    "blank",
                    ["row",[["upgrade","Infinity-Color-White"]]],
                    ["row",[["upgrade","Infinity-Color-Red"],["upgrade","Infinity-Color-Yellow"],["upgrade","Infinity-Color-Blue"],]],
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    ["row",[["upgrade","Infinity-Color-Orange"],["upgrade","Infinity-Color-Purple"],["upgrade","Infinity-Color-Green"],]],
				]
			},
			"Upgrade":{
                unlocked(){return player.i.total_infinity_points.gte(5)},
                buttonStyle()
                {
                    return {"border-radius":"0px"}
                },
				content:[
                    "blank",
                    ["row",[["clickable","Infinity-Upgrade-1"]]],
				]
			},
		},
	},
    tabFormat:
    {
        "Idle Research":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Color-White"))
                        return 'x=当前购买的个数'},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Color-Red"))
                        return 'a='+format(player.i.a)},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Color-Yellow"))
                        return 'b='+format(player.i.b)},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Color-Blue"))
                        return 'c='+format(player.i.c)},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Color-Orange"))
                        return 'd='+format(player.i.d)},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Color-Purple"))
                        return 'e='+format(player.i.e)},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Color-Green"))
                        return 'f='+format(player.i.f)},
                    { "color": "white", "font-size": "20px",}
                ],
                "blank",
                ["microtabs","Idle Research",{'border-width':'0px'}],
            ],
        },
        "Infinity":
        {
            unlocked(){return player.i.infinity_unlocked.gte(0.5)},
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                ["display-text",
                    function() {
                        return '无尽点 : '+format(player.i.infinity_points)
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                "blank",
                ["display-text",
                    function() {
                        if(player.i.total_infinity_points.gte(0.5))
                        return 'TIP='+format(player.i.total_infinity_points)
                                +',IPP=(TIP+1)<sup>0.2</sup>'
                                +',IPP='+format(player.i.infinity_points_power)},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() {
                        if(hasUpgrade("i","Infinity-Color-White"))
                        return 'IWE='+format(player.i.infinity_white_energy)
                                +',IWP=(IWE+1)<sup>0.125</sup>'
                                +',IWP='+format(player.i.infinity_white_power)},
                    { "color": "white", "font-size": "20px",}
                ],
                "blank",
                "blank",
                ["row",[["clickable","Infinity"]]],
                "blank",
                ["microtabs","Infinity",{'border-width':'0px'}],
            ],
        },
        'Image':
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
                ["display-image",()=>{return 'js/img/背刺神秘.png'}, {maxWidth:'200%',maxHeight:'200%',position: 'relative'}]
            ],
        },
    },
    row: 1,
    layerShown()
    {
        return true
    },
})