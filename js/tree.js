var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)


addLayer("tree-tab", {
    clickables:{
        "Enter_Night":
        {
            display()
            {
                return '跳过白天'
            },
            unlocked(){return player.r.reality_unlocked.gte(0.5) && player.r.in_day.gte(0.5)},
            style(){return {"width":"100px","border-radius":"0px","background-color":"white","height":"100px","min-height":"100px"}},
            canClick(){return player.r.reality_unlocked.gte(0.5) && player.r.in_day.gte(0.5)},
            onClick(){
                player.r.in_day=n(0)
                player.r.in_night=n(1)
                showTab('none')
            }   
        },
        "Enter_Day":
        {
            display()
            {
                return '跳过黑夜'
            },
            unlocked(){return player.r.reality_unlocked.gte(0.5) && player.r.in_night.gte(0.5)},
            style(){return {"width":"100px","border-radius":"0px","background-color":"white","height":"100px","min-height":"100px"}},
            canClick(){return player.r.reality_unlocked.gte(0.5) && player.r.in_night.gte(0.5)},
            onClick(){
                var x=player.r.days
                layerDataReset("r")
                player.r.in_day=n(1)
                player.r.in_night=n(0)
                player.r.reality_unlocked=n(1)
                player.r.days=x.add(1)
                player.r.player_x=n(10)
                player.r.player_y=n(11)
                showTab('none')
            }   
        },
    },
    tabFormat: [
        ["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}],
        ["display-text",
            function() {
                var s=''
                if(player.r.in_day.gte(0.5))s='Day '+format(player.r.days)
                if(player.r.in_night.gte(0.5))s='Night '+format(player.r.days)
                if(player.r.reality_unlocked.gte(0.5))
                return s
                return ''
            },
            { "color": "white", "font-size": "24px",}
        ],
        ["display-text",
            function() {
                if(player.r.reality_unlocked.gte(0.5))
                return ''
                if(player.i.complete_times[1].gte(1) && player.i.complete_times[2].gte(1) && player.i.complete_times[4].gte(1))
                return 'Reach 1e3080 to $%^&I*$#%^&^@%'
                return ''
            },
            { "color": "white", "font-size": "24px",}
        ],
        "blank",
        ["row",[["clickable","Enter_Night"],["clickable","Enter_Day"],]],
    ],
    previousTab: "",
    leftTab: true,
})