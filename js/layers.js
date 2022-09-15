addLayer("i",
{
    symbol: "I", 
    position: 0,
    startData()
    {
        return{
            unlocked: true,
            points: new ExpantaNum(0),
            has_ins_2_1:zero,
            cost_1:n(100),cost_2:n(1e7),
            white_num:zero,extra_white:one,
            infinity_white_num:zero,extra_infinity_white:one,
            infinity_white_energy:zero,infinity_white_power:one,
            red_num:zero,extra_red:zero,
            infinity_red_num:zero,
            infinity_red_energy:zero,infinity_red_power:one,
            yellow_num:zero,extra_yellow:zero,
            infinity_yellow_num:zero,
            infinity_yellow_energy:zero,infinity_yellow_power:one,
            blue_num:zero,extra_blue:zero,
            infinity_blue_num:zero,
            infinity_blue_energy:zero,infinity_blue_power:one,
            orange_num:zero,
            purple_num:zero,
            green_num:zero,
            a:one,b:one,c:zero,d:one,e:one,f:one,
            Ia:zero,Ib:one,Ic:one,Id:one,Ie:one,If:one,
            colorcolor:zero,

            infinity_unlocked:zero,
            infinity_points:zero,total_infinity_points:zero,infinity_points_power:one,
            infinity_upgrade_1_num:zero,
            points_to_points:one,
            s:"#000000",
            cost_infinity_1:n(30),
            shiftAlias:0,
            infinity_time:zero,infinity_per_s:zero,

            button_click_time:zero,instability_unlocked:zero,
            time:zero,instability_power:one,
            best_points:zero,
            best_white:zero,
            best_red:zero,
            best_yellow:zero,
            best_blue:zero,
            best_orange:zero,
            best_purple:zero,
            best_green:zero,
            explode_time:zero,
            shield_time:zero,
        }
    },
    color: "white",
    resource: "重置点",
    type: "normal", 
    requires:new ExpantaNum(1e308),
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
        if(hasUpgrade("i","Instability-Upgrade-2-1"))
        {
            player.i.has_ins_2_1=n(1)
        }
        if(player.points.lte(0))
        {
            console.log(1)
            player.i.shield_time=player.i.shield_time.sub(n(1).mul(diff))
            player.points=n(0)
            if(player.i.shield_time.lte(0))
            {
                player.i.shield_time=player.i.explode_time.pow(0.5)
                player.points=n(20)
                player.i.white_num=n(0)
                player.i.extra_white=n(1)
                player.i.red_num=n(0)
                player.i.extra_red=n(0)
                player.i.yellow_num=n(0)
                player.i.extra_yellow=n(0)
                player.i.blue_num=n(0)
                player.i.extra_blue=n(0)
                player.i.orange_num=n(0)
                player.i.green_num=n(0)
                player.i.purple_num=n(0)
                player.i.infinity_white_energy=n(0)
                player.i.infinity_red_energy=n(0)
                player.i.infinity_yellow_energy=n(0)
                player.i.infinity_blue_energy=n(0)
                player.i.infinity_time=n(0)
                player.i.infinity_white_num=n(0)
                player.i.extra_infinity_white=n(0)
                player.i.infinity_red_num=n(0)
                player.i.infinity_yellow_num=n(0)
                player.i.infinity_blue_num=n(0)
                player.i.total_infinity_points=n(0)
                player.i.infinity_points=n(0)
                player.i.infinity_upgrade_1_num=n(0)
                player.i.infinity_unlocked=n(0)
                var upg=player.i.upgrades
                var nwupg=[]
                for(var i=0;i<upg.length;i++)
                {
                    if(
                        upg[i]=='Instability-Upgrade-1-1' ||
                        upg[i]=='Instability-Upgrade-1-2' ||
                        upg[i]=='Instability-Upgrade-1-3' ||
                        upg[i]=='Instability-Upgrade-2-1' ||
                        upg[i]=='Instability-Upgrade-2-2' ||
                        upg[i]=='Instability-Upgrade-2-3' ||
                        upg[i]=='Instability-Upgrade-3-1' ||
                        upg[i]=='Instability-Upgrade-3-2' ||
                        upg[i]=='Instability-Upgrade-3-3'
                    )
                    {
                        nwupg.push(upg[i])
                    }
                }
                player.i.upgrades=nwupg

                player.i.explode_time=player.i.explode_time.add(1)
                player.i.time=n(0)
            }
        }
        if(player.i.instability_unlocked.gte(0.5))
        {
            player.i.best_points=player.i.best_points.max(player.points)
            player.i.best_white=player.i.best_white.max(player.i.white_num)
            player.i.best_red=player.i.best_red.max(player.i.red_num)
            player.i.best_yellow=player.i.best_yellow.max(player.i.yellow_num)
            player.i.best_blue=player.i.best_blue.max(player.i.blue_num)
            player.i.best_orange=player.i.best_orange.max(player.i.orange_num)
            player.i.best_green=player.i.best_green.max(player.i.green_num)
            player.i.best_purple=player.i.best_purple.max(player.i.purple_num)
        }
        player.i.time=player.i.time.add(n(1).mul(diff))
        player.i.instability_power=n(Math.sin(player.i.time))
        if(player.i.instability_power.gte(0))
        {
            if(hasUpgrade("i","Instability-Upgrade-1-1"))
            player.i.instability_power=player.i.instability_power.mul(1.5)
            if(hasUpgrade("i","Instability-Upgrade-1-3"))
            player.i.instability_power=player.i.instability_power.mul(player.i.time.pow(0.5))
        }
        if(player.i.instability_power.lte(0))
        {
            if(hasUpgrade("i","Instability-Upgrade-1-2"))
            player.i.instability_power=player.i.instability_power.div(1.5)
            if(hasUpgrade("i","Instability-Upgrade-1-3"))
            player.i.instability_power=player.i.instability_power.mul(player.i.time.pow(0.5))
        }

	    player.i.shiftAlias=shiftDown
        if(player.points.gte(1e15))
        {
            player.i.infinity_unlocked=n(1)
        }
        player.i.colorcolor=player.i.colorcolor.add(n(3).mul(diff))
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

        player.i.infinity_white_energy=player.i.infinity_white_energy.add(layers.i.clickables["Infinity-Tube-White"].PRODUCE().mul(diff))
        player.i.extra_infinity_white=player.i.extra_infinity_white.add(player.i.Ib.mul(diff))
        player.i.infinity_red_energy=player.i.infinity_red_energy.add(layers.i.clickables["Infinity-Tube-Red"].PRODUCE().mul(diff))
        player.i.infinity_yellow_energy=player.i.infinity_yellow_energy.add(layers.i.clickables["Infinity-Tube-Yellow"].PRODUCE().mul(diff))
        player.i.infinity_blue_energy=player.i.infinity_blue_energy.add(layers.i.clickables["Infinity-Tube-Blue"].PRODUCE().mul(diff))
        player.i.infinity_white_power=n(2).mul(player.i.infinity_blue_power)
                    .pow(player.i.infinity_white_energy.pow(n(0.2).add(hasUpgrade("i","Infinity-Upgrade-2-2")?0.05:0)
                    .div(player.i.infinity_white_energy.add(1).logBase(10).add(1).logBase(6).max(1))))
        player.i.infinity_red_power=n(1.2).pow(player.i.infinity_red_energy.pow(0.25)).div(10)
        player.i.infinity_yellow_power=n(10).pow(player.i.infinity_yellow_energy.pow(0.2))
        player.i.infinity_blue_power=n(1.05).pow(player.i.infinity_blue_energy.pow(0.2))

        player.i.infinity_time=player.i.infinity_time.add(n(1).mul(diff))
        player.i.infinity_per_s=layers.i.clickables["Infinity"].GAIN(player.points).div(player.i.infinity_time)
        
        player.i.infinity_points_power=player.i.total_infinity_points.add(1).pow(n(0.2).add(player.i.infinity_red_power))
        player.i.points_to_points=n(1.25).pow(player.points.add(1).logBase(10))
    },
    tooltip(){return '我就不'},
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
                var eff=n(player.i.white_num).mul(player.i.extra_white).pow(player.i.f).mul(player.i.c).mul(player.i.infinity_white_power)
                if(hasUpgrade("i","Infinity-Upgrade-3-2"))
                eff=eff.mul(player.i.points_to_points)
                if(player.i.instability_unlocked.gte(0.5))
                {
                    eff=eff.mul(player.i.instability_power)
                }
                return eff
            },
            display()
            {
                var formula_1='<br>价格公式:10*1.1<sup>x'
                if(hasUpgrade("i","Color-Orange"))formula_1=formula_1+'<sup>d</sup>'
                if(hasUpgrade("i","Color-Red"))formula_1=formula_1+'*a</sup>'
                if(player.i.total_infinity_points.gte(0.5))formula_1=formula_1+'/IPP'
                var formula_2='<br>效率公式:x'
                if(hasUpgrade("i","Color-Green"))formula_2=formula_2+'<sup>f</sup>'
                if(hasUpgrade("i","Color-Blue"))formula_2=formula_2+'*c'
                if(hasUpgrade("i","Infinity-Color-White"))formula_2=formula_2+'*IWP'
                if(hasUpgrade("i","Infinity-Upgrade-3-2"))formula_2=formula_2+'*PTP'
                var extra=''
                if(hasUpgrade("i","Color-Yellow"))extra=extra+'+(额外 x'+format(player.i.extra_white)+')'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',huanhang='<br>'
                return '白色 Tube<br>生产基础能源'+formula_1+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-White"].COST())+huanhang
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
                var formula_1='<br>价格公式:50*1.2<sup>x</sup>'
                if(player.i.total_infinity_points.gte(0.5))formula_1=formula_1+'/IPP'
                var formula_2='<br>a公式:1/(1+x<sup>0.75'
                if(hasUpgrade("i","Color-Purple"))formula_2=formula_2+'*e'
                formula_2=formula_2+'</sup>/2)'
                var extra=''
                if(hasUpgrade("i","Color-Orange"))extra=extra+'+(额外的:'+format(player.i.extra_red)+')'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',huanhang='<br>'
                return '红色 Tube<br>降低白色 Tube 的价格'+formula_1+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-Red"].COST())+huanhang
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
                let eff=n(player.i.yellow_num).add(1).add(player.i.extra_yellow)
                eff=eff.logBase(10)
                if(hasUpgrade("i","Infinity-Upgrade-2-1"))eff=eff.div(3)
                else eff=eff.div(10)
                eff=eff.mul(player.i.infinity_yellow_power)
                player.i.b=eff
                return eff
            },
            display()
            {
                var formula_1='<br>价格公式:50*1.2<sup>x</sup>'
                if(player.i.total_infinity_points.gte(0.5))formula_1=formula_1+'/IPP'
                var formula_2='<br>b公式:log<sub>10</sub>x'
                if(hasUpgrade("i","Infinity-Upgrade-2-1"))formula_2=formula_2+'/3'
                else formula_2=formula_2+'/10'
                if(hasUpgrade("i","Infinity-Upgrade-2-1"))formula_2=formula_2+'*IYP'
                var extra=''
                if(hasUpgrade("i","Color-Purple"))extra=extra+'+(额外的:'+format(player.i.extra_yellow)+')'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',huanhang='<br>'
                return '黄色 Tube<br>缓慢生产白色 Tube'+formula_1+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-Yellow"].COST())+huanhang
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
                var formula_1='<br>价格公式:50*1.2<sup>x</sup>'
                if(player.i.total_infinity_points.gte(0.5))formula_1=formula_1+'/IPP'
                var formula_2='<br>c公式:(x+1)<sup>0.5'
                if(hasUpgrade("i","Color-Purple"))formula_2=formula_2+'*e'
                var extra=''
                if(hasUpgrade("i","Color-Green"))extra=extra+'+(额外的:'+format(player.i.extra_blue)+')'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',huanhang='<br>'
                return '蓝色 Tube<br>增幅白色 Tube 的效率'+formula_1+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Tube-Blue"].COST())+huanhang
                        +'<br>c='+format(layers.i.clickables["Tube-Blue"].EFFECT())
                        +'<br>已购买:'+format(player.i.blue_num)+extra
            },
            unlocked(){return hasUpgrade("i","Color-Blue")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"lightblue","height":"150px"}},
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
                var formula_1='<br>价格公式:100000*2<sup>x<sup>1.25</sup></sup>'
                if(player.i.total_infinity_points.gte(0.5))formula_1=formula_1+'/IPP'
                var formula_2='<br>d公式:1/((1+x)<sup>0.1</sup>)'
                var formula_3='<br>生产公式:0.1x'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',formula_3='',huanhang='<br>'
                return '橙色 Tube<br>缓慢生产 红色 Tube<br>减少 白色 Tube 的价格指数'+formula_1+formula_2+formula_3
                        +'<br>价格:'+format(layers.i.clickables["Tube-Orange"].COST())+huanhang
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
                var formula_1='<br>价格公式100000*2<sup>x<sup>1.25</sup></sup>'
                if(player.i.total_infinity_points.gte(0.5))formula_1=formula_1+'/IPP'
                var formula_2='<br>e公式:1+0.05*x'
                var formula_3='<br>生产公式:0.1x'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',formula_3='',huanhang='<br>'
                return '紫色 Tube<br>缓慢生产 黄色 Tube<br>提高 红色和蓝色 Tube 的效率指数'+formula_1+formula_2+formula_3
                        +'<br>价格:'+format(layers.i.clickables["Tube-Purple"].COST())+huanhang
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
                var formula_1='<br>价格公式:100000*2<sup>x<sup>1.25</sup></sup>'
                if(player.i.total_infinity_points.gte(0.5))formula_1=formula_1+'/IPP'
                var formula_2='<br>f公式:1+log<sub>10</sub>(1+x)/5'
                var formula_3='<br>生产公式:0.1x'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',formula_3='',huanhang='<br>'
                return '绿色 Tube<br>缓慢生产 蓝色 Tube<br>提高 白色 Tube 的效率指数'+formula_1+formula_2+formula_3
                        +'<br>价格:'+format(layers.i.clickables["Tube-Green"].COST())+huanhang
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
                var xx=n(10)
                if(hasUpgrade("i","Infinity-Upgrade-2-3"))xx=n(2)
                gain=gain.div(1e14).logBase(xx).mul(layers.i.clickables["Infinity-Upgrade-1"].EFFECT())
                gain=gain.max(0).floor()
                return gain
            },
            NEED(x)
            {
                var need=n(1e14)
                var xx=n(10)
                if(hasUpgrade("i","Infinity-Upgrade-2-3"))xx=n(2)
                need=need.mul(xx.pow(n(x).div(layers.i.clickables["Infinity-Upgrade-1"].EFFECT())))
                return need
            },
            display()
            {
                var formula_1='无尽点 获取 公式:floor(log<sub>'
                if(hasUpgrade("i","Infinity-Upgrade-2-3"))formula_1=formula_1+'2'
                else formula_1=formula_1+'10'
                formula_1=formula_1+'</sub>(p/1e14))<br><br>'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',huanhang='<br>'
                return formula_1+'重置你的 普通 Tube<br>获得: + '+format(layers.i.clickables["Infinity"].GAIN(player.points))+' 无尽点'
                        +'<br>下一个无尽点在 '+format(layers.i.clickables["Infinity"].NEED(layers.i.clickables["Infinity"].GAIN(player.points).add(1)))+' 能源'
                        +'<br>当前每秒获得 : +'+format(player.i.infinity_per_s)+'无尽点'
            },
            unlocked(){return true},
            style(){return {"width":"300px","border-radius":"0px","background-color":player.i.sss,"height":"100px",}},
            canClick(){return layers.i.clickables["Infinity"].GAIN(player.points).gte(1)},
            onClick(){
                player.i.infinity_points=player.i.infinity_points.add(layers.i.clickables["Infinity"].GAIN(player.points))
                player.i.total_infinity_points=player.i.total_infinity_points.add(layers.i.clickables["Infinity"].GAIN(player.points))
                player.points=n(20)
                player.i.white_num=n(0)
                player.i.extra_white=n(1)
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
                if(hasUpgrade("i","Infinity-Upgrade-3-1"))
                {
                    nwupg=upg
                }
                else
                {
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
                }
                player.i.upgrades=nwupg

                player.i.infinity_white_energy=n(0)
                player.i.infinity_red_energy=n(0)
                player.i.infinity_yellow_energy=n(0)
                player.i.infinity_blue_energy=n(0)
                player.i.infinity_time=n(0)
            }
        },
        "Infinity-Tube-White":
        {
            COST()
            {
                var need=n(1)
                need=need.mul(n(1.1).pow(player.i.infinity_white_num.mul(player.i.Ia)))
                return need
            },
            PRODUCE()
            {
                var eff=n(player.i.infinity_white_num).mul(player.i.extra_infinity_white)
                eff=eff.pow(2).mul(player.i.Ic)
                return eff
            },
            display()
            {
                var formula_1='<br>价格公式:1.1<sup>x</sup>'
                var formula_2='<br>生产公式:x<sup>2</sup>'
                if(hasUpgrade("i","Infinity-Color-Blue"))
                formula_2=formula_2+'*Ic'
                if(hasUpgrade("i","Infinity-Upgrade-3-2"))
                formula_2=formula_2+'*PTIW'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',huanhang='<br>'
                var extra=''
                if(hasUpgrade("i","Infinity-Color-Yellow"))extra=extra+'+(额外 x'+format(player.i.extra_infinity_white)+')'
                return '无尽 白色 Tube<br>生产无尽能源-白'+formula_1+formula_2
                        +'<br>价格:'+format(layers.i.clickables["Infinity-Tube-White"].COST())+huanhang
                        +'<br>生产:'+format(layers.i.clickables["Infinity-Tube-White"].PRODUCE())
                        +'<br>已购买:'+format(player.i.infinity_white_num)+extra
            },
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
            style(){
                return {"width":"600px","border-radius":"0px","background-color":"white","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
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
                    var x=player.i.infinity_points.div(1).logBase(1.1)
                    var y=x.sub(player.i.infinity_white_num).div(10).ceil()
                    player.i.infinity_white_num=player.i.infinity_white_num.add(y)
                    player.i.infinity_points=player.i.infinity_points.div(10).mul(7)
                }
            }
        },
        "Infinity-Tube-Red":
        {
            COST()
            {
                var need=n(10)
                need=need.mul(n(1.2).pow(player.i.infinity_red_num))
                return need
            },
            PRODUCE()
            {
                var eff=n(player.i.infinity_red_num)
                eff=eff.pow(1.5)
                return eff
            },
            EFFECT()
            {
                let eff=n(player.i.infinity_red_num)
                eff=eff.pow(n(0.6)).div(2.5).add(1)
                eff=n(1).div(eff)
                player.i.Ia=eff
                return eff
            },
            display()
            {
                var formula_1='<br>价格公式:10*1.2<sup>x</sup>'
                var formula_2='<br>生产公式:x<sup>1.5</sup>'
                var formula_3='<br>Ia公式:1/(1+x<sup>0.6'
                formula_3=formula_3+'</sup>/2.5)'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',formula_3='',huanhang='<br>'
                return '无尽 红色 Tube<br>生产无尽能源-红<br>降低 无尽 白色 Tube 的价格'+formula_1+formula_2
                        +formula_3
                        +'<br>价格:'+format(layers.i.clickables["Infinity-Tube-Red"].COST())+huanhang
                        +'<br>生产:'+format(layers.i.clickables["Infinity-Tube-Red"].PRODUCE())
                        +'<br>Ia='+format(player.i.Ia)
                        +'<br>已购买:'+format(player.i.infinity_red_num)
            },
            unlocked(){return hasUpgrade("i","Infinity-Color-Red")},
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"red","height":"200px",
                        "border-width":"10px","border-color":player.i.sss}},
            canClick(){return player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-Red"].COST())},
            onClick(){
                if(player.i.infinity_points.div(layers.i.clickables["Infinity-Tube-Red"].COST()).lte(100))
                {
                    while(player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-Red"].COST()))
                    {
                        player.i.infinity_points=player.i.infinity_points.sub(layers.i.clickables["Infinity-Tube-Red"].COST())
                        player.i.infinity_red_num=player.i.infinity_red_num.add(1)
                    }
                }
                else
                {
                    var x=player.i.infinity_points.div(10).logBase(1.2)
                    var y=x.sub(player.i.infinity_red_num).div(10).ceil()
                    player.i.infinity_red_num=player.i.infinity_red_num.add(y)
                    player.i.infinity_points=player.i.infinity_points.div(10).mul(7)
                }
            }
        },
        "Infinity-Tube-Yellow":
        {
            COST()
            {
                var need=n(10)
                need=need.mul(n(1.2).pow(player.i.infinity_yellow_num))
                return need
            },
            PRODUCE()
            {
                var eff=n(player.i.infinity_yellow_num)
                eff=eff.pow(1.5)
                return eff
            },
            EFFECT()
            {
                let eff=n(player.i.infinity_yellow_num).add(1)
                eff=eff.logBase(5).div(5)
                player.i.Ib=eff
                return eff
            },
            display()
            {
                var formula_1='<br>价格公式:10*1.2<sup>x</sup>'
                var formula_2='<br>生产公式:x<sup>1.5</sup>'
                var formula_3='<br>Ib公式:log<sub>5</sub>x/5'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',formula_3='',huanhang='<br>'
                return '无尽 黄色 Tube<br>生产无尽能源-黄<br>缓慢生产 无尽 白色 Tube'+formula_1+formula_2
                        +formula_3
                        +'<br>价格:'+format(layers.i.clickables["Infinity-Tube-Yellow"].COST())+huanhang
                        +'<br>生产:'+format(layers.i.clickables["Infinity-Tube-Yellow"].PRODUCE())
                        +'<br>Ib='+format(player.i.Ib)
                        +'<br>已购买:'+format(player.i.infinity_yellow_num)
            },
            unlocked(){return hasUpgrade("i","Infinity-Color-Yellow")},
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"yellow","height":"200px",
                        "border-width":"10px","border-color":player.i.sss}},
            canClick(){return player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-Yellow"].COST())},
            onClick(){
                if(player.i.infinity_points.div(layers.i.clickables["Infinity-Tube-Yellow"].COST()).lte(100))
                {
                    while(player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-Yellow"].COST()))
                    {
                        player.i.infinity_points=player.i.infinity_points.sub(layers.i.clickables["Infinity-Tube-Yellow"].COST())
                        player.i.infinity_yellow_num=player.i.infinity_yellow_num.add(1)
                    }
                }
                else
                {
                    var x=player.i.infinity_points.div(10).logBase(1.2)
                    var y=x.sub(player.i.infinity_yellow_num).div(10).ceil()
                    player.i.infinity_yellow_num=player.i.infinity_yellow_num.add(y)
                    player.i.infinity_points=player.i.infinity_points.div(10).mul(7)
                }
            }
        },
        "Infinity-Tube-Blue":
        {
            COST()
            {
                var need=n(10)
                need=need.mul(n(1.2).pow(player.i.infinity_blue_num))
                return need
            },
            PRODUCE()
            {
                var eff=n(player.i.infinity_blue_num)
                eff=eff.pow(1.5)
                return eff
            },
            EFFECT()
            {
                var eff=n(player.i.infinity_blue_num)
                eff=eff.add(1).pow(n(0.4))
                player.i.Ic=eff
                return eff
            },
            display()
            {
                var formula_1='<br>价格公式:10*1.2<sup>x</sup>'
                var formula_2='<br>生产公式:x<sup>1.5</sup>'
                var formula_3='<br>Ic公式:(x+1)<sup>0.4'
                var huanhang=''
                if(!player.i.shiftAlias)formula_1='',formula_2='',formula_3='',huanhang='<br>'
                return '无尽 蓝色 Tube<br>生产无尽能源-蓝<br>增幅 无尽 白色 Tube 的效率'+formula_1+formula_2
                        +formula_3
                        +'<br>价格:'+format(layers.i.clickables["Infinity-Tube-Blue"].COST())+huanhang
                        +'<br>生产:'+format(layers.i.clickables["Infinity-Tube-Blue"].PRODUCE())
                        +'<br>Ic='+format(player.i.Ic)
                        +'<br>已购买:'+format(player.i.infinity_blue_num)
            },
            unlocked(){return hasUpgrade("i","Infinity-Color-Blue")},
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"lightblue","height":"200px",
                        "border-width":"10px","border-color":player.i.sss}},
            canClick(){return player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-Blue"].COST())},
            onClick(){
                if(player.i.infinity_points.div(layers.i.clickables["Infinity-Tube-Blue"].COST()).lte(100))
                {
                    while(player.i.infinity_points.gte(layers.i.clickables["Infinity-Tube-Blue"].COST()))
                    {
                        player.i.infinity_points=player.i.infinity_points.sub(layers.i.clickables["Infinity-Tube-Blue"].COST())
                        player.i.infinity_blue_num=player.i.infinity_blue_num.add(1)
                    }
                }
                else
                {
                    var x=player.i.infinity_points.div(10).logBase(1.2).div(player.i.a).root(player.i.d)
                    var y=x.sub(player.i.infinity_blue_num).div(10).ceil()
                    player.i.infinity_blue_num=player.i.infinity_blue_num.add(y)
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
            canClick(){return player.i.infinity_points.gte(layers.i.clickables["Infinity-Upgrade-1"].COST())},
            onClick(){
                player.i.infinity_points=player.i.infinity_points.sub(layers.i.clickables["Infinity-Upgrade-1"].COST())
                player.i.infinity_upgrade_1_num=player.i.infinity_upgrade_1_num.add(1)
            }
        },
        "BUTTON!!!":
        {
            display()
            {
                if(player.i.button_click_time.gte(18.5))return '<h2>Do you understand?<br>(HAHA)I will keep my eyes on you<br>And,Good Luck<br>Hope you will not let me down'
                if(player.i.button_click_time.gte(17.5))return '<h2>Do you understand?<br>(HAHA)I will keep my eyes on you'
                if(player.i.button_click_time.gte(16.5))return '<h2>Do you understand?'
                if(player.i.button_click_time.gte(15.5))return "<h2>You won't receive the things that you want<br>Now,listen to me<br>You can add _____________"
                if(player.i.button_click_time.gte(14.5))return "<h2>You won't receive the things that you want<br>Now,listen to me"
                if(player.i.button_click_time.gte(13.5))return "<h2>You won't receive the things that you want"
                if(player.i.button_click_time.gte(12.5))return "<h2>So,If you keep doing your tree like this<br>Then it's just another shit"
                if(player.i.button_click_time.gte(11.5))return '<h2>So,If you keep doing your tree like this'
                if(player.i.button_click_time.gte(10.5))return '<h2>So,'
                if(player.i.button_click_time.gte(9.5))return '<h2>You know,kid?<br>People like new things<br>Not the similar things over and over again!'
                if(player.i.button_click_time.gte(8.5))return '<h2>You know,kid?<br>People like new things.'
                if(player.i.button_click_time.gte(7.5))return '<h2>You know,kid?'
                if(player.i.button_click_time.gte(6.5))return '<h2>And I tell you that your game is too NORMAL!<br>Nobody wants to play it!'
                if(player.i.button_click_time.gte(5.5))return '<h2>And I tell you that your game is too NORMAL!'
                if(player.i.button_click_time.gte(4.5))return '<h2>Do you hear me?<br>I AM THE GOD!!'
                if(player.i.button_click_time.gte(3.5))return '<h2>Do you hear me?'
                if(player.i.button_click_time.gte(2.5))return '<h1>HEY!!!!!!!!!!!!!!!!!!!!'
                if(player.i.button_click_time.gte(1.5))return '<h2>Hey!Hey!Hey!'
                if(player.i.button_click_time.gte(0.5))return '<h3>Hey!Hey!'
                return '<h4>Hey!'
            },
            unlocked(){return hasUpgrade("i","Infinity-Color-Orange") ||
                              hasUpgrade("i","Infinity-Color-Green") ||
                              hasUpgrade("i","Infinity-Color-Purple") && player.i.button_click_time.lte(19)},
            style(){return {"width":"600px","border-radius":"0px","background-color":"white","height":"150px",}},
            canClick(){return true},
            onClick(){
                player.i.button_click_time=player.i.button_click_time.add(1)
            }
        },
        "Button-to-unlock":
        {
            display()
            {
                return '解锁 Instability-不稳定性<br><br>注意:这会重置你之前所有的东西但是<br>你会解锁更多很有趣的玩法'
            },
            unlocked(){return player.i.button_click_time.gte(19) && player.i.instability_unlocked.lte(0.5)},
            style(){return {"width":"600px","border-radius":"0px","background-color":"#6AA121","height":"150px",}},
            canClick(){return true},
            onClick(){
                player.points=n(20)
                player.i.white_num=n(0)
                player.i.extra_white=n(1)
                player.i.red_num=n(0)
                player.i.extra_red=n(0)
                player.i.yellow_num=n(0)
                player.i.extra_yellow=n(0)
                player.i.blue_num=n(0)
                player.i.extra_blue=n(0)
                player.i.orange_num=n(0)
                player.i.green_num=n(0)
                player.i.purple_num=n(0)
                player.i.infinity_white_energy=n(0)
                player.i.infinity_red_energy=n(0)
                player.i.infinity_yellow_energy=n(0)
                player.i.infinity_blue_energy=n(0)
                player.i.infinity_time=n(0)
                player.i.infinity_white_num=n(0)
                player.i.extra_infinity_white=n(0)
                player.i.infinity_red_num=n(0)
                player.i.infinity_yellow_num=n(0)
                player.i.infinity_blue_num=n(0)
                player.i.total_infinity_points=n(0)
                player.i.infinity_points=n(0)
                player.i.infinity_upgrade_1_num=n(0)
                player.i.infinity_unlocked=n(0)
                player.i.upgrades=[]

                player.i.instability_unlocked=n(1)
                player.i.time=n(0)
            }
        },
        "Button-To-Reset":
        {
            display()
            {
                return '强制重置<br><br>注:没有任何收益'
            },
            unlocked(){return true},
            style(){return {"width":"600px","border-radius":"0px","background-color":"#6AA121","height":"150px",}},
            canClick(){return true},
            onClick(){
                player.i.shield_time=player.i.explode_time.pow(0.5)
                player.points=n(20)
                player.i.white_num=n(0)
                player.i.extra_white=n(1)
                player.i.red_num=n(0)
                player.i.extra_red=n(0)
                player.i.yellow_num=n(0)
                player.i.extra_yellow=n(0)
                player.i.blue_num=n(0)
                player.i.extra_blue=n(0)
                player.i.orange_num=n(0)
                player.i.green_num=n(0)
                player.i.purple_num=n(0)
                player.i.infinity_white_energy=n(0)
                player.i.infinity_red_energy=n(0)
                player.i.infinity_yellow_energy=n(0)
                player.i.infinity_blue_energy=n(0)
                player.i.infinity_time=n(0)
                player.i.infinity_white_num=n(0)
                player.i.extra_infinity_white=n(0)
                player.i.infinity_red_num=n(0)
                player.i.infinity_yellow_num=n(0)
                player.i.infinity_blue_num=n(0)
                player.i.total_infinity_points=n(0)
                player.i.infinity_points=n(0)
                player.i.infinity_upgrade_1_num=n(0)
                player.i.infinity_unlocked=n(0)
                var upg=player.i.upgrades
                var nwupg=[]
                for(var i=0;i<upg.length;i++)
                {
                    if(
                        upg[i]=='Instability-Upgrade-1-1' ||
                        upg[i]=='Instability-Upgrade-1-2' ||
                        upg[i]=='Instability-Upgrade-1-3' ||
                        upg[i]=='Instability-Upgrade-2-1' ||
                        upg[i]=='Instability-Upgrade-2-2' ||
                        upg[i]=='Instability-Upgrade-2-3' ||
                        upg[i]=='Instability-Upgrade-3-1' ||
                        upg[i]=='Instability-Upgrade-3-2' ||
                        upg[i]=='Instability-Upgrade-3-3'
                    )
                    {
                        nwupg.push(upg[i])
                    }
                }
                player.i.upgrades=nwupg

                player.i.time=n(0)
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
            },
            unlocked(){return hasUpgrade("i","Color-Red")},
            style(){return {"width":"200px","border-radius":"0px","background-color":"red","height":"150px"}},
            canClick(){return player.points.gte(layers.i.clickables["Tube-Red"].COST())},
            onClick(){
            }
        },
    },
    upgrades:
    {
        "Color-White":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Color-White"))
                return '<img src="js/img/背刺qwq.png" alt="">'
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
                if(hasUpgrade("i","Color-Red"))
                return '已解锁'
                return "解锁 - 红色 Tube<br><br>花费:"+format(player.i.cost_1.div(player.i.infinity_points_power))+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(player.i.cost_1.div(player.i.infinity_points_power))
                if(player.i.cost_1.gte(300.5) && player.i.cost_1.lte(2000.5))
                {
                    player.i.cost_1=n(50000)
                }
                if(player.i.cost_1.lte(300.5))
                {
                    player.i.cost_1=n(2000)
                }
            },
            canAfford()
            {
                return player.points.gte(player.i.cost_1.div(player.i.infinity_points_power))
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"red","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-White")},
            branches:["Color-Orange","Color-Purple"],
        },
        "Color-Yellow":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Color-Yellow"))
                return '已解锁'
                return "解锁 - 黄色 Tube<br><br>花费:"+format(player.i.cost_1.div(player.i.infinity_points_power))+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(player.i.cost_1.div(player.i.infinity_points_power))
                if(player.i.cost_1.gte(300.5) && player.i.cost_1.lte(2000.5))
                {
                    player.i.cost_1=n(50000)
                }
                if(player.i.cost_1.lte(300.5))
                {
                    player.i.cost_1=n(2000)
                }
            },
            canAfford()
            {
                return player.points.gte(player.i.cost_1.div(player.i.infinity_points_power))
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"yellow","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-White")},
            branches:["Color-Orange","Color-Green"],
        },
        "Color-Blue":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Color-Blue"))
                return '已解锁'
                return "解锁 - 蓝色 Tube<br><br>花费:"+format(player.i.cost_1.div(player.i.infinity_points_power))+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(player.i.cost_1.div(player.i.infinity_points_power))
                if(player.i.cost_1.gte(300.5) && player.i.cost_1.lte(2000.5))
                {
                    player.i.cost_1=n(50000)
                }
                if(player.i.cost_1.lte(300.5))
                {
                    player.i.cost_1=n(2000)
                }
            },
            canAfford()
            {
                return player.points.gte(player.i.cost_1.div(player.i.infinity_points_power))
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"lightblue","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-White")},
            branches:["Color-Green","Color-Purple"],
        },
        "Color-Orange":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Color-Orange"))
                return '已解锁'
                return "解锁 - 橙色 Tube<br><br>花费:"+format(player.i.cost_2.div(player.i.infinity_points_power))+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(player.i.cost_2.div(player.i.infinity_points_power))
                if(player.i.cost_2.gte(1e7+1) && player.i.cost_2.lte(1e8+1))
                {
                    player.i.cost_2=n(5e10)
                }
                if(player.i.cost_2.lte(1e7+1))
                {
                    player.i.cost_2=n(1e8)
                }
            },
            canAfford()
            {
                return player.points.gte(player.i.cost_2.div(player.i.infinity_points_power))
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"orange","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-Red") && hasUpgrade("i","Color-Yellow")},
        },
        "Color-Purple":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Color-Purple"))
                return '已解锁'
                return "解锁 - 紫色 Tube<br><br>花费:"+format(player.i.cost_2.div(player.i.infinity_points_power))+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(player.i.cost_2.div(player.i.infinity_points_power))
                if(player.i.cost_2.gte(1e7+1) && player.i.cost_2.lte(1e8+1))
                {
                    player.i.cost_2=n(5e10)
                }
                if(player.i.cost_2.lte(1e7+1))
                {
                    player.i.cost_2=n(1e8)
                }
            },
            canAfford()
            {
                return player.points.gte(player.i.cost_2.div(player.i.infinity_points_power))
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"purple","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-Red") && hasUpgrade("i","Color-Blue")},
        },
        "Color-Green":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Color-Green"))
                return '已解锁'
                return "解锁 - 绿色 Tube<br><br>花费:"+format(player.i.cost_2.div(player.i.infinity_points_power))+"能源"
            },
            onPurchase()
            {
                player.points=player.points.sub(player.i.cost_2.div(player.i.infinity_points_power))
                if(player.i.cost_2.gte(1e7+1) && player.i.cost_2.lte(1e8+1))
                {
                    player.i.cost_2=n(5e10)
                }
                if(player.i.cost_2.lte(1e7+1))
                {
                    player.i.cost_2=n(1e8)
                }
            },
            canAfford()
            {
                return player.points.gte(player.i.cost_2.div(player.i.infinity_points_power))
            },
            style(){return {"width":"200px","border-radius":"0px","background-color":"green","height":"150px"}},
            unlocked(){return hasUpgrade("i","Color-Blue") && hasUpgrade("i","Color-Yellow")},
        },
        "Infinity-Color-White":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Infinity-Color-White"))
                return '已解锁'
                return "解锁 - 无尽 白色 Tube<br><br>花费:0无尽点"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return player.i.total_infinity_points.gte(0.5)
            },
            style(){
                return {"width":"600px","border-radius":"0px","background-color":"white","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return true},
        },
        "Infinity-Color-Red":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Infinity-Color-Red"))
                return '已解锁'
                return "解锁 - 无尽 红色 Tube<br><br>花费:"+format(player.i.cost_infinity_1)+"无尽点"
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(player.i.cost_infinity_1)
                if(player.i.cost_infinity_1.gte(30.5) && player.i.cost_infinity_1.lte(5000.5))
                {
                    player.i.cost_infinity_1=n(20000)
                }
                if(player.i.cost_infinity_1.lte(30.5))
                {
                    player.i.cost_infinity_1=n(5000)
                }
            },
            canAfford()
            {
                return player.i.infinity_points.gte(player.i.cost_infinity_1)
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"red","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
            branches:["Infinity-Color-Orange","Infinity-Color-Purple"],
        },
        "Infinity-Color-Yellow":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Infinity-Color-Yellow"))
                return '已解锁'
                return "解锁 - 无尽 黄色 Tube<br><br>花费:"+format(player.i.cost_infinity_1)+"无尽点"
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(player.i.cost_infinity_1)
                if(player.i.cost_infinity_1.gte(30.5) && player.i.cost_infinity_1.lte(5000.5))
                {
                    player.i.cost_infinity_1=n(20000)
                }
                if(player.i.cost_infinity_1.lte(30.5))
                {
                    player.i.cost_infinity_1=n(5000)
                }
            },
            canAfford()
            {
                return player.i.infinity_points.gte(player.i.cost_infinity_1)
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"yellow","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
            branches:["Infinity-Color-Orange","Infinity-Color-Green"],
        },
        "Infinity-Color-Blue":
        {
            fullDisplay()
            {
                if(hasUpgrade("i","Infinity-Color-Blue"))
                return '已解锁'
                return "解锁 - 无尽 蓝色 Tube<br><br>花费:"+format(player.i.cost_infinity_1)+"无尽点"
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(player.i.cost_infinity_1)
                if(player.i.cost_infinity_1.gte(30.5) && player.i.cost_infinity_1.lte(5000.5))
                {
                    player.i.cost_infinity_1=n(20000)
                }
                if(player.i.cost_infinity_1.lte(30.5))
                {
                    player.i.cost_infinity_1=n(5000)
                }
            },
            canAfford()
            {
                return player.i.infinity_points.gte(player.i.cost_infinity_1)
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"lightblue","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-White")},
            branches:["Infinity-Color-Green","Infinity-Color-Purple"],
        },
        "Infinity-Color-Orange":
        {
            fullDisplay()
            {
                return "解锁 - 无尽 橙色 Tube<h1>?</h1><br><br>Try to click it?"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return true
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"orange","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-Red") && 
                              hasUpgrade("i","Infinity-Color-Yellow") &&
                              hasUpgrade("i","Infinity-Color-Blue") &&
                              !hasUpgrade("i","Infinity-Color-Orange") &&
                              !hasUpgrade("i","Infinity-Color-Green") &&
                              !hasUpgrade("i","Infinity-Color-Purple")},
        },
        "Infinity-Color-Green":
        {
            fullDisplay()
            {
                return "解锁 - 无尽 绿色 Tube<h1>?</h1><br><br>Try to click it?"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return true
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"green","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-Red") && 
                              hasUpgrade("i","Infinity-Color-Yellow") &&
                              hasUpgrade("i","Infinity-Color-Blue") &&
                              !hasUpgrade("i","Infinity-Color-Orange") &&
                              !hasUpgrade("i","Infinity-Color-Green") &&
                              !hasUpgrade("i","Infinity-Color-Purple")},
        },
        "Infinity-Color-Purple":
        {
            fullDisplay()
            {
                return "解锁 - 无尽 紫色 Tube<h1>?</h1><br><br>Try to click it?"
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return true
            },
            style(){
                return {"width":"200px","border-radius":"0px","background-color":"purple","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Color-Red") && 
                              hasUpgrade("i","Infinity-Color-Yellow") &&
                              hasUpgrade("i","Infinity-Color-Blue") &&
                              !hasUpgrade("i","Infinity-Color-Orange") &&
                              !hasUpgrade("i","Infinity-Color-Green") &&
                              !hasUpgrade("i","Infinity-Color-Purple")},
        },
        "Infinity-Upgrade-2-1":
        {
            fullDisplay()
            {
                var formula='log<sub>10</sub>x/10 => log<sub>10</sub>x/3'
                var huanhang=''
                if(!player.i.shiftAlias)formula='',huanhang='<br>'
                return '无尽 升级 2-1<br>优化 黄色 Tube 公式<br>'+formula+'<br>花费:20无尽点'
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(20)
            },
            canAfford()
            {
                return player.i.infinity_points.gte(20)
            },
            style(){
                return {"width":"200px","border-radius":"0px","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return player.i.infinity_upgrade_1_num.gte(0.5)},
        },
        "Infinity-Upgrade-2-2":
        {
            fullDisplay()
            {
                var formula='2<sup>IWE<sup>0.2</sup></sup> => 2<sup>IWE<sup>0.25</sup></sup>'
                var huanhang=''
                if(!player.i.shiftAlias)formula='',huanhang='<br>'
                return "无尽 升级 2-2<br>优化 IWP 公式<br>"+formula+"<br>花费:30无尽点"
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(30)
            },
            canAfford()
            {
                return player.i.infinity_points.gte(30)
            },
            style(){
                return {"width":"200px","border-radius":"0px","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return player.i.infinity_upgrade_1_num.gte(0.5)},
        },
        "Infinity-Upgrade-2-3":
        {
            fullDisplay()
            {
                var formula='floor(log<sub>10</sub>(p/1e14))<br>=><br>floor(log<sub>5</sub>(p/1e14))'
                var huanhang=''
                if(!player.i.shiftAlias)formula='',huanhang='<br>'
                return "无尽 升级 2-3<br>优化 无尽点获取 公式<br>"+formula+"<br>花费:50无尽点"
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(50)
            },
            canAfford()
            {
                return player.i.infinity_points.gte(50)
            },
            style(){
                return {"width":"200px","border-radius":"0px","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return player.i.infinity_upgrade_1_num.gte(0.5)},
        },
        "Infinity-Upgrade-3-1":
        {
            fullDisplay()
            {
                // var formula='log<sub>10</sub>x/10 => log<sub>10</sub>x/3'
                // var huanhang=''
                // if(!player.i.shiftAlias)formula='',huanhang='<br>'
                return '无尽 升级 3-1<br>无尽重置将不再重置你的色彩升级<br><br>花费:3000无尽点'
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(3000)
            },
            canAfford()
            {
                return player.i.infinity_points.gte(3000)
            },
            style(){
                return {"width":"200px","border-radius":"0px","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Upgrade-2-1") && hasUpgrade("i","Infinity-Upgrade-2-2") && hasUpgrade("i","Infinity-Upgrade-2-3")},
        },
        "Infinity-Upgrade-3-2":
        {
            fullDisplay()
            {
                // var formula='log<sub>10</sub>x/10 => log<sub>10</sub>x/3'
                // var huanhang=''
                // if(!player.i.shiftAlias)formula='',huanhang='<br>'
                return '无尽 升级 3-2<br>能源 反向增幅 无尽能源-白 的获取<br><br>花费:5000无尽点'
            },
            onPurchase()
            {
                player.i.infinity_points=player.i.infinity_points.sub(5000)
            },
            canAfford()
            {
                return player.i.infinity_points.gte(5000)
            },
            style(){
                return {"width":"200px","border-radius":"0px","height":"150px",
                        "border-width":"10px","border-color":player.i.sss}},
            unlocked(){return hasUpgrade("i","Infinity-Upgrade-2-1") && hasUpgrade("i","Infinity-Upgrade-2-2") && hasUpgrade("i","Infinity-Upgrade-2-3")},
        },
        "Instability-Upgrade-1-1":
        {
            fullDisplay()
            {
                if(player.i.explode_time.lte(1.5))
                return '解锁于 爆炸次数2次'
                return '哦天,这不稳定试剂几乎吃掉了我的所有能源<br>我的实验室已经被弄的一团糟<br>是时候优化一下了<br><br>当你的不稳定能量为正数时,额外获得一个1.5倍数'
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return player.i.explode_time.gte(1.5)
            },
            style(){return {"width":"200px","border-radius":"0px","height":"150px",}},
            unlocked(){return true},
        },
        "Instability-Upgrade-1-2":
        {
            fullDisplay()
            {
                if(player.i.best_white.lte(3.5))
                return '解锁于 最好 白色 Tube 大于4'
                return '嗯...<br>它已经能为我提供增益了<br>但是我想继续优化,它吃的太多了<br><br>当你的不稳定能量为负数时,将除以1.5'
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return player.i.best_white.gte(3.5)
            },
            style(){return {"width":"200px","border-radius":"0px","height":"150px",}},
            unlocked(){return true},
        },
        "Instability-Upgrade-1-3":
        {
            fullDisplay()
            {
                if(player.i.best_white.lte(9.5))
                return '解锁于 最好 白色 Tube 大于10'
                return '膨大<br>随着时间的流逝,不稳定试剂的力量逐渐强大<br><br>不稳定力量乘以时间的平方根'
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return player.i.best_white.gte(9.5)
            },
            style(){return {"width":"200px","border-radius":"0px","height":"150px",}},
            unlocked(){return true},
        },
        "Instability-Upgrade-2-1":
        {
            fullDisplay()
            {
                if(player.i.explode_time.lte(19.5))
                return '解锁于 爆炸次数20次'
                return '可恶,它的力量太强了,我难以掌控<br>我需要一个护盾防止可能的危机<br><br>获得一个护盾,持续时间基于你的爆炸次数<br>当你的能源为负数时,会优先消耗护盾<br>如果你的护盾也破了,你的实验室仍然会爆炸'
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return player.i.explode_time.gte(19.5)
            },
            style(){return {"width":"300px","border-radius":"0px","height":"150px",}},
            unlocked(){return true},
        },
        "Instability-Upgrade-2-2":
        {
            fullDisplay()
            {
                if(player.i.best_points.lte(50000))
                return '解锁于 最佳能源 50000点'
                return '可恶,它的力量太强了,我难以掌控<br>我需要一个护盾防止可能的危机<br><br>获得一个护盾,持续时间基于你的爆炸次数<br>当你的能源为负数时,会优先消耗护盾<br>如果你的护盾也破了,你的实验室仍然会爆炸'
            },
            onPurchase()
            {
            },
            canAfford()
            {
                return player.i.best_points.gte(50000)
            },
            style(){return {"width":"300px","border-radius":"0px","height":"150px",}},
            unlocked(){return true},
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
            "Number":{
                buttonStyle()
                {
                    return {"border-radius":"0px"}
                },
                content:[
                    "blank",
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
                ]
            }
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
                    ["row",[["clickable","BUTTON!!!"],]],
                    ["row",[["clickable","Button-to-unlock"],]],
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
                    ["row",[["upgrade","Infinity-Upgrade-2-1"],["upgrade","Infinity-Upgrade-2-2"],["upgrade","Infinity-Upgrade-2-3"],]],
                    ["row",[["upgrade","Infinity-Upgrade-3-1"],["upgrade","Infinity-Upgrade-3-2"],["upgrade","Infinity-Upgrade-3-3"],]],
				]
			},
            "Number":{
                buttonStyle()
                {
                    return {"border-radius":"0px"}
                },
                content:[
                    "blank",
                    ["display-text",
                        function() {
                            var formula_2=' , IPP=(TIP+1)<sup>0.2'
                            if(hasUpgrade("i","Infinity-Color-Red"))formula_2=formula_2+'+IRP'
                            formula_2=formula_2+'</sup>'
                            if(!player.i.shiftAlias)formula_2=''
                            if(player.i.total_infinity_points.gte(0.5))
                            return 'TIP='+format(player.i.total_infinity_points)
                                    +formula_2
                                    +' , IPP='+format(player.i.infinity_points_power)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            var formula_2=' , PTP=1.25<sup>log<sub>10</sub>P</sup>'
                            if(!player.i.shiftAlias)formula_2=''
                            if(hasUpgrade("i","Infinity-Upgrade-3-2"))
                            return 'P='+format(player.points)
                                    +formula_2
                                    +' , PTP='+format(player.i.points_to_points)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            var formula_2=' , IWP='
                            if(hasUpgrade("i","Infinity-Color-Blue"))
                            formula_2=formula_2+'('
                            formula_2=formula_2+'2'
                            if(hasUpgrade("i","Infinity-Color-Blue"))
                            formula_2=formula_2+'*IBP)'
                            formula_2=formula_2+'<sup>IWE<sup>'
                            if(hasUpgrade("i","Infinity-Upgrade-2-2"))formula_2=formula_2+'0.25/log<sub>6</sub>(log<sub>10</sub>IWE)</sup></sup>'
                            else formula_2=formula_2+'0.2/log<sub>6</sub>(log<sub>10</sub>IWE)</sup></sup>'
                            if(!player.i.shiftAlias)formula_2=''
                            if(hasUpgrade("i","Infinity-Color-White"))
                            return 'IWE='+format(player.i.infinity_white_energy)
                                    +formula_2
                                    +' , IWP='+format(player.i.infinity_white_power)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            var formula_2=' , IRP=1.2<sup>IRE<sup>0.25</sup></sup>/10'
                            if(!player.i.shiftAlias)formula_2=''
                            if(hasUpgrade("i","Infinity-Color-Red"))
                            return 'IRE='+format(player.i.infinity_red_energy)
                                    +formula_2
                                    +' , IRP='+format(player.i.infinity_red_power)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            var formula_2=' , IYP=10<sup>IYE<sup>0.1</sup></sup>'
                            if(!player.i.shiftAlias)formula_2=''
                            if(hasUpgrade("i","Infinity-Color-Yellow"))
                            return 'IYE='+format(player.i.infinity_yellow_energy)
                                    +formula_2
                                    +' , IYP='+format(player.i.infinity_yellow_power)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            var formula_2=' , IBP=1.05<sup>IBE<sup>0.2</sup></sup>'
                            if(!player.i.shiftAlias)formula_2=''
                            if(hasUpgrade("i","Infinity-Color-Blue"))
                            return 'IBE='+format(player.i.infinity_blue_energy)
                                    +formula_2
                                    +' , IBP='+format(player.i.infinity_blue_power)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            if(hasUpgrade("i","Infinity-Color-Red"))
                            return 'Ia='+format(player.i.Ia)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            if(hasUpgrade("i","Infinity-Color-Yellow"))
                            return 'Ib='+format(player.i.Ib)},
                        { "color": "white", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() {
                            if(hasUpgrade("i","Infinity-Color-Blue"))
                            return 'Ic='+format(player.i.Ic)},
                        { "color": "white", "font-size": "20px",}
                    ],
                ]
            }
		},
        "Instability":
        {
            "Upgrade":{
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"#6AA121"}
                },
                content:[
                    "blank",
                    ["row",[["upgrade","Instability-Upgrade-1-1"],
                            ["upgrade","Instability-Upgrade-1-2"],
                            ["upgrade","Instability-Upgrade-1-3"],]],
                    ["row",[["upgrade","Instability-Upgrade-2-1"],
                            ["upgrade","Instability-Upgrade-2-2"],
                            ["upgrade","Instability-Upgrade-2-3"],]],
                    ["row",[["upgrade","Instability-Upgrade-3-1"],
                            ["upgrade","Instability-Upgrade-3-2"],
                            ["upgrade","Instability-Upgrade-3-3"],]],
                ]
            },
            "Number":{
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"#6AA121"}
                },
                content:[
                    "blank",
                    ["display-text",
                        function() {
                            return '你的实验室已经爆炸了 '+format(player.i.explode_time)+' 次'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的能源是 '+format(player.i.best_points)+' 点'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的 白色 Tube 是 '+format(player.i.best_white)+' 个'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的 红色 Tube 是 '+format(player.i.best_red)+' 个'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的 黄色 Tube 是 '+format(player.i.best_yellow)+' 个'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的 蓝色 Tube 是 '+format(player.i.best_blue)+' 个'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的 橙色 Tube 是 '+format(player.i.best_orange)+' 个'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的 紫色 Tube 是 '+format(player.i.best_purple)+' 个'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() {
                            return '你最好的 绿色 Tube 是 '+format(player.i.best_green)+' 个'
                        },
                        { "color": "white", "font-size": "24px",}
                    ],
                ]
            },
            "Reset":{
                buttonStyle()
                {
                    return {"border-radius":"0px","border-color":"#6AA121"}
                },
                content:[
                    "blank",
                    ["row",[["clickable","Button-To-Reset"]]],
                ]
            },
		},
	},
    hotkeys: [
        {
            key: "m", 
            description: "m:最大购买所有 普通 Tube",
            onPress() {
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
            },
            unlocked() {return true}
        },
    ],
    tabFormat:
    {
        "Idle Research":
        {
            buttonStyle()
            {
                return {"border-radius":"0px"}
            },
            content:[
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
                "blank",
                ["display-text",
                    function() {
                        return '无尽点 : '+format(player.i.infinity_points)
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                "blank",
                "blank",
                ["row",[["clickable","Infinity"]]],
                "blank",
                ["microtabs","Infinity",{'border-width':'0px'}],
            ],
        },
        "Instability":
        {
            unlocked(){return player.i.instability_unlocked.gte(0.5)},
            buttonStyle()
            {
                return {"border-radius":"0px","border-color":"#6AA121"}
            },
            content:[
                "blank",
                ["display-text",
                    function() {
                        return '到现在,已经过去了 T = '+format(player.i.time)+' s'
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() {
                        return '因为<text style="color:#6AA121">不稳定</text>,你的能源生产获得一个倍数<br>当前 : x'+format(player.i.instability_power)
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                "blank",
                ["display-text",
                    function() {
                        var formula_1='sin(T)',formula_2='sin(T)'
                        if(hasUpgrade("i","Instability-Upgrade-1-1"))formula_1=formula_1+'*1.5'
                        if(hasUpgrade("i","Instability-Upgrade-1-3"))formula_1=formula_1+'*T<sup>0.5</sup>'
                        if(hasUpgrade("i","Instability-Upgrade-1-2"))formula_2=formula_2+'/1.5'
                        if(hasUpgrade("i","Instability-Upgrade-1-3"))formula_2=formula_2+'*T<sup>0.5</sup>'
                        return     '当你的不稳定能量为正数时 , 公式 : '+formula_1
                              +'<br>当你的不稳定能量为负数时 , 公式 : '+formula_2
                    },
                    { "color": "white", "font-size": "24px",}
                ],
                "blank",
                ["display-text",
                    function() {
                        return '如果,你的能源变成了负数,那么...'
                    },
                    { "color": "red", "font-size": "24px",}
                ],
                "blank",
                ["microtabs","Instability",{'border-width':'0px'}],
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