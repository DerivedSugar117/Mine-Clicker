var coins = 0
var damage = 1
var miningPowerCost = 10
var minLvl = 1
var minPow = 1
var minPow2 = 2

var mineral = {
    name: [
        "dirt",
        "sand",
        "limestone",
        "coal"
    ],
    hp: [
        10,
        34,
        87,
        253
    ],
}

function damageDirt()
    {
        mineral.hp[0] = mineral.hp[0] - damage
        updateNumbers()
    }

function damageSand()
    {
        mineral.hp[1] = mineral.hp[1] - damage
        updateNumbers()
    }    
    
function upgradeMiningPower()
{
    if (coins >= miningPowerCost)
    {
        coins = coins - miningPowerCost
        miningPowerCost = miningPowerCost * 1.85
        damage++
        minLvl++
        minPow++
        minPow2++
        updateNumbers()
    }
}

setInterval(function()
{
    if (mineral.hp[0] <= 0)
    {
        coins = coins + 10
        mineral.hp[0] = 10
        updateNumbers()
    }

    if (mineral.hp[1] <= 0)
    {
        coins = coins + 34
        mineral.hp[1] = 34
        updateNumbers()
    }
},10)

function showTooltip()
{
    document.getElementById("tooltip").style.display = "block"
}

function hideTooltip()
{
    document.getElementById("tooltip").style.display = "none"
}

function updateNumbers()
{
    document.getElementById("Coins").innerHTML = coins.toFixed(0)
    document.getElementById("dirtHP").innerHTML = mineral.hp[0].toFixed(0)
    document.getElementById("sandHP").innerHTML = mineral.hp[1].toFixed(0)
    document.getElementById("minLvl").innerHTML = minLvl
    document.getElementById("minPow").innerHTML = minPow + " -> " + minPow2
    document.getElementById("minCost").innerHTML = miningPowerCost.toFixed(1)
    document.getElementById("damage").innerHTML = damage
}

function checkMiningPower()
{
    
    if (coins >= miningPowerCost)
    {
        document.getElementById("pickaxeImg").style.opacity = 1
    } else if (coins < miningPowerCost)
    {
        document.getElementById("pickaxeImg").style.opacity = 0.5
    }
}

var counter = 0
rightArrowImg.onclick = function(){
    if(counter == 0){
        document.getElementById("dirt").style.display = "none"
        document.getElementById("sand").style.display = "block"
        counter++
        updateNumbers()
    }
    else if(counter == 1){
       
    }
    else if(counter == 2){
       
    }
};

leftArrowImg.onclick = function(){
    if(counter == 1){
        document.getElementById("sand").style.display = "none"
        document.getElementById("dirt").style.display = "block"
        counter--
        updateNumbers()
    }
    else if(counter == 2){
       
    }
};

setInterval(function()
{
    checkMiningPower()
},10)

setInterval(function()
{
    checkMineral()
},10)