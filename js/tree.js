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
    tabFormat: [
        ["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}],
        // ["display-text",
        //     function() {
        //         return (hasUpgrade("i","Instability-Upgrade-2-1")?'你的护盾还剩 : '+format(player.i.shield_time)+'s':'')
        //     },
        //     { "color": "white", "font-size": "24px",}
        // ],
    ],
    previousTab: "",
    leftTab: true,
})