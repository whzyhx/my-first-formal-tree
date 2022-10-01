let modInfo = {
	name: "我没想好名字",
	id: "yhxyhxyhx",
	author: "Ni_Ming",
	pointsName: "能源",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (20), // Used for hard resets and new players
	
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "",
}

let changelog = `<h1>更新记录:</h1><br>
	<h3>v0.0<br><br>
	2022.9.10 9:00</h3><br>
		- 普通 Tube 已完成<br><br>
	<h3>2022.9.10 16:00</h3><br>
		- 无尽 架构 已完成<br><br>
	<h3>2022.9.11 13:30</h3><br>
		- 黄色 Tube 公式 log<sub>3</sub>x/3 => log</sub>10</sub>x/10 但效果从加法变成乘法<br><br>
	<h3>2022.9.11 20:00</h3><br>
		- 是的,我总算学会怎么使用shift了<br>
		- 现在按下shift才可以看到公式<br>
		- 顺便添加了第二排无尽升级 和 无尽 红色 Tube<br><br>
	<h3>2022.9.11 20:30</h3><br>
		- 修复了一个逻辑错误<br><br>
	<h3>2022.9.12 17:00</h3><br>
		- 无尽能量现在将在无尽后重置,但是效果变的无比强大<br>
		- 增加 热键 M - 最大购买所有 普通 Tube<br><br>
	<h3>2022.9.12 23:00</h3><br>
		- 增加无尽 蓝色 Tube 和 第三排的前两个无尽升级<br>
		- 新增sub-sub-tab "Number"用于显示数值,避免过于冗余的界面<br><br>
	<h3>2022.9.12 23:00</h3><br>
		- 大幅修改了公式,重新调了平衡/tuu<br>
		- 增加 无尽 黄色 Tube<br><br>
	<h3>2022.9.15 21:00</h3><br>
		- 更多新内容<br>
		- 增加 不稳定性-Instability<br><br>
	<h3>2022.9.15 22:30</h3><br>
		- 修了几个bug<br><br>
	<h3>2022.9.17 21:00</h3><br>
		- 不稳定性不再重置无尽<br>
		- 为不稳定性增加更多内容<br><br>
	<h3>2022.9.18 23:00</h3><br>
		- 增加 不稳定 Tube<br>
		- 增加6个不稳定能源升级<br><br>
	<h3>2022.9.19 22:00</h3><br>
		- 修bug,修公式,调平衡<br><br>
	<h3>2022.9.19 22:00</h3><br>
		- 蚌埠住了<br>
		- 挑战太没意思了<br>
		- 提前引入现实环节<br><br>
	<h3>2022.10.1 17:00</h3><br>
		- 平衡 and 平衡 and 平衡 over again~~~<br><br>`

let winText = `恭喜通关!您已经完成了这个游戏.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new ExpantaNum(0)
	let gain = new ExpantaNum(0)
	gain=gain.add(layers.i.clickables["Tube-White"].EFFECT())
	var x=n(1)
	if(gain.lte(-0.001))
	x=n(-1),gain=n(0).sub(gain)
	if(player.i.player_in_challenge.gte(0.5))
	{
		if(player.i.player_energy_challenge.gte(0.5) && player.i.player_energy_challenge.lte(1.5))gain=gain.pow(0.5)
		if(player.i.player_energy_challenge.gte(1.5) && player.i.player_energy_challenge.lte(2.5))gain=gain.pow(0.25)
		if(player.i.player_energy_challenge.gte(2.5) && player.i.player_energy_challenge.lte(3.5))gain=gain.pow(0.1)
	}
	gain=gain.mul(x)
	if(player.r.in_day.eq(1))
	{
		gain=n(0)
	}
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}
// Display extra things at the top of the page
var s=()=>{
	return ((player.r.in_night.gte(0.5) && hasUpgrade("i","Instability-Upgrade-2-1"))?'<br><h2>你的护盾还剩 : '+format(player.i.shield_time)+'s</h2><br><br>':'')
	+'Shift - 查看所有公式<br>M - 最大化 普通 Tube'
}
var displayThings = [
	s
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}