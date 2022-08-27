var coins = 0
var gems = 0
var damage = 1
var multiplier = 1
var autoMultiplier = 1
var autoMiningDamage = 0
var miningPowerCost = 1
var autoMiningCost = 35
var upgradeToolCost = 100
var upgradeLuckCost = 50

var autoMinLvl = 0
var autoMinPow = 0
var autoMinPow2 = 1

var luck = 100
var luckLvl = 1

var mineral = {
    name: [
        "dirt",
        "sand",
        "limestone",
        "coal",
        "marble",
        "quartz",
        "bronze"
    ],
    hp: [
        10,
        34,
        87,
        253,
        616,
        2352,
        7984
    ],
}

function damageDirt()
    {
        if (document.getElementById("dirt").style.display = "block")
        {
            mineral.hp[0] = mineral.hp[0] - damage
            
            updateNumbers()
        }
    }

function damageSand()
    {
        if (document.getElementById("sand").style.display = "block")
        {
            mineral.hp[1] = mineral.hp[1] - damage
            updateNumbers()
        }
    }    
    
function damageLimestone()
    {
        if (document.getElementById("limestone").style.display = "block")
        {
            mineral.hp[2] = mineral.hp[2] - damage
            updateNumbers()
        }
    }    
    
function damageCoal()
    {
        if (document.getElementById("coal").style.display = "block")
        {
            mineral.hp[3] = mineral.hp[3] - damage
            updateNumbers()
        }
    }   
    
function damageMarble()
    {
        if (document.getElementById("marble").style.display = "block")
        {
            mineral.hp[4] = mineral.hp[4] - damage
            updateNumbers()
        }
    }      

function damageQuartz()
    {
        if (document.getElementById("quartz").style.display = "block")
        {
            mineral.hp[5] = mineral.hp[5] - damage
            updateNumbers()
        }
    }        
    
function upgradeMiningPower()
{
    if (gems >= miningPowerCost)
    {
        gems = gems - miningPowerCost
        var power = Math.round(Math.random()*luck)
        updateNumbers()

        if (power < 60)
        {
            if (document.getElementById("toolStatus").innerText == "")
                {
                    document.getElementById("toolStatus").innerHTML = "Broken "
                    damage+= (power / 100) * multiplier
                    autoMiningDamage+= (power / 65) * multiplier
                    updateNumbers()
                }
        }
        
        if (power >= 60 && power < 85)
        {
            if (document.getElementById("toolStatus").innerText == "" ||
                document.getElementById("toolStatus").innerHTML == "Broken ")
                {
                    document.getElementById("toolStatus").innerHTML = "Average "
                    damage+= (damage / 100) * multiplier
                    autoMiningDamage+= (power / 65) * multiplier
                    updateNumbers()
                }
        }

        if (power >= 85 && power < 100)
        {
            if (document.getElementById("toolStatus").innerText == "" ||
                document.getElementById("toolStatus").innerHTML == "Broken " ||
                document.getElementById("toolStatus").innerHTML == "Average ")
                {
                    document.getElementById("toolStatus").innerHTML = "Good "
                    damage+= (power / 100) * multiplier
                    autoMiningDamage+= (power / 65) * multiplier
                    updateNumbers()
                }
        }

        if (power >= 100)
        {
            if (document.getElementById("toolStatus").innerText == "" ||
                document.getElementById("toolStatus").innerHTML == "Broken " ||
                document.getElementById("toolStatus").innerHTML == "Average " ||
                document.getElementById("toolStatus").innerHTML == "Good ")
                {
                    document.getElementById("toolStatus").innerHTML = "Excellent "
                    damage+= (power / 100) * multiplier
                    autoMiningDamage+= (power / 65) * multiplier
                    updateNumbers()
                }
        }
    }
}

function upgradeAutoMiningPower()
{
    if (autoMiningDamage == 0)
    {
        if (coins >= autoMiningCost)
        {
            coins = coins - autoMiningCost
            autoMiningCost = autoMiningCost * 1.45
            autoMiningDamage++
            autoMinLvl++
            autoMinPow++
            autoMinPow2++
            updateNumbers()
        }
    } else if (autoMiningDamage != 0)
    if (coins >= autoMiningCost)
        {
            coins = coins - autoMiningCost
            autoMiningCost = autoMiningCost * 1.45
            autoMiningDamage*= 1.2
            autoMinLvl++
            autoMinPow++
            autoMinPow2++
            updateNumbers()
        }
}

var toolCounter = 0

function upgradeTool()
{
    if (toolCounter == 0)
    {
        if (autoMiningDamage == 0)
        {
            if (coins >= upgradeToolCost)
            {
                coins = coins - upgradeToolCost
                upgradeToolCost = upgradeToolCost * 7.35
                multiplier+= 3
                autoMultiplier+= 2
                damage = damage * multiplier
                autoMiningDamage = (autoMiningDamage + 1) * autoMultiplier
                toolCounter++
                document.getElementById("toolStatus").innerText = ""
                document.getElementById("shovelImg").style.display = "none"
                document.getElementById("drillImg").style.display = "block"
                document.getElementById("toolName").innerHTML = "Drill"
                document.getElementById("upgradeToolName").innerHTML = "Drill"
                document.getElementById("upgradeTool").innerHTML = "Drill -> Excavator"
                updateNumbers()
            }
        } else if (autoMiningDamage != 0)
        {
            if (coins >= upgradeToolCost)
            {
                coins = coins - upgradeToolCost
                upgradeToolCost = upgradeToolCost * 7.35
                multiplier+= 3
                autoMultiplier+= 2
                damage = damage * multiplier
                autoMiningDamage = autoMiningDamage * autoMultiplier
                toolCounter++
                document.getElementById("toolStatus").innerText = ""
                document.getElementById("shovelImg").style.display = "none"
                document.getElementById("drillImg").style.display = "block"
                document.getElementById("toolName").innerHTML = "Drill"
                document.getElementById("upgradeToolName").innerHTML = "Drill"
                document.getElementById("upgradeTool").innerHTML = "Drill -> Excavator"
                updateNumbers()
            }
        }

    } else if (toolCounter == 1)
    {
        if (coins >= upgradeToolCost)
        {
            coins = coins - upgradeToolCost
            upgradeToolCost = upgradeToolCost * 7.35
            multiplier+= 2
            autoMultiplier+= 2
            damage = damage * multiplier
            autoMiningDamage = autoMiningDamage * autoMultiplier
            toolCounter++
            document.getElementById("toolStatus").innerText = ""
            document.getElementById("drillImg").style.display = "none"
            document.getElementById("excavatorImg").style.display = "block"
            document.getElementById("toolName").innerHTML = "Excavator"
            document.getElementById("upgradeToolName").innerHTML = "Excavator"
            document.getElementById("upgradeTool").innerHTML = "Excavator -> Mining Phasor"
            updateNumbers()
        }

    } else if (toolCounter == 2)
    {
        if (coins >= upgradeToolCost)
        {
            coins = coins - upgradeToolCost
            upgradeToolCost = upgradeToolCost * 7.35
            multiplier+= 2
            autoMultiplier+= 2
            damage = damage * multiplier
            autoMiningDamage = autoMiningDamage * autoMultiplier
            toolCounter++
            document.getElementById("toolStatus").innerText = ""
            document.getElementById("excavatorImg").style.display = "none"
            document.getElementById("miningPhasorImg").style.display = "block"
            document.getElementById("toolName").innerHTML = "Mining Phasor"
            document.getElementById("toolName").style.left = "42%"
            document.getElementById("upgradeToolName").innerHTML = "Mining Phasor"
            document.getElementById("upgradeTool").innerHTML = "Mining Phasor -> ???"
            updateNumbers()
        }
    }
}

function upgradeLuck()
{
    if (coins >= upgradeLuckCost)
    {
        coins = coins - upgradeLuckCost
        upgradeLuckCost*= 1.45
        luck*= 1.1
        luckLvl++
        updateNumbers()
    }
}

setInterval(function()
{
    if (document.getElementById("dirt").style.display == "block")
    {
        mineral.hp[0] = mineral.hp[0] - autoMiningDamage
    }

    if (document.getElementById("sand").style.display == "block")
    {
        mineral.hp[1] = mineral.hp[1] - autoMiningDamage
    }

    if (document.getElementById("limestone").style.display == "block")
    {
        mineral.hp[2] = mineral.hp[2] - autoMiningDamage
    }

    if (document.getElementById("coal").style.display == "block")
    {
        mineral.hp[3] = mineral.hp[3] - autoMiningDamage
    }

    if (document.getElementById("marble").style.display == "block")
    {
        mineral.hp[4] = mineral.hp[4] - autoMiningDamage
    }

    if (document.getElementById("quartz").style.display == "block")
    {
        mineral.hp[5] = mineral.hp[5] - autoMiningDamage
    }
    updateNumbers()
},1000)


setInterval(function()
{
    if (mineral.hp[0] <= 0)
    {
        coins = coins + 10
        mineral.hp[0] = 10

        var rng = Math.random()

        if (rng >= 0.99) {
            gems++
        }

        updateNumbers()
    }

    if (mineral.hp[1] <= 0)
    {
        coins = coins + 34
        mineral.hp[1] = 34

        var rng = Math.random()

        if (rng >= 0.99) {
            gems++
        }

        updateNumbers()
    }

    if (mineral.hp[2] <= 0)
    {
        coins = coins + 87
        mineral.hp[2] = 87

        var rng = Math.random()

        if (rng >= 0.99) {
            gems++
        }

        updateNumbers()
    }

    if (mineral.hp[3] <= 0)
    {
        coins = coins + 253
        mineral.hp[3] = 253

        var rng = Math.random()

        if (rng >= 0.99) {
            gems++
        }

        updateNumbers()
    }

    if (mineral.hp[4] <= 0)
    {
        coins = coins + 616
        mineral.hp[4] = 616

        var rng = Math.random()

        if (rng >= 0.99) {
            gems++
        }

        updateNumbers()
    }

    if (mineral.hp[5] <= 0)
    {
        coins = coins + 2352
        mineral.hp[5] = 2352

        var rng = Math.random()

        if (rng >= 0.99) {
            gems++
        }

        updateNumbers()
    }
},1)

function showMiningPowerTooltip()
{
    document.getElementById("miningPowerTooltip").style.display = "block"
}

function hideMiningPowerTooltip()
{
    document.getElementById("miningPowerTooltip").style.display = "none"
}

function showAutoMiningTooltip()
{
    document.getElementById("autoMiningTooltip").style.display = "block"
}

function hideAutoMiningTooltip()
{
    document.getElementById("autoMiningTooltip").style.display = "none"
}

function showUpgradeToolTooltip()
{
    document.getElementById("upgradeToolTooltip").style.display = "block"
}

function hideUpgradeToolTooltip()
{
    document.getElementById("upgradeToolTooltip").style.display = "none"
}

function showUpgradeLuckTooltip()
{
    document.getElementById("luckTooltip").style.display = "block"
}

function hideUpgradeLuckTooltip()
{
    document.getElementById("luckTooltip").style.display = "none"
}


function checkCost()
{
    
    if (coins >= upgradeToolCost)
    {
        document.getElementById("pickaxeImg").style.opacity = 1
    } else if (coins < upgradeToolCost)
    {
        document.getElementById("pickaxeImg").style.opacity = 0.5
    }


    if (coins >= autoMiningCost)
    {
        document.getElementById("cursorImg").style.opacity = 1
    } else if (coins < autoMiningCost)
    {
        document.getElementById("cursorImg").style.opacity = 0.5
    }

    if (coins >= upgradeLuckCost)
    {
        document.getElementById("upgradeLuckImg").style.opacity = 1
    } else if (coins < upgradeLuckCost)
    {
        document.getElementById("upgradeLuckImg").style.opacity = 0.5
    }

    if (gems >= miningPowerCost)
    {
        document.getElementById("upgradeToolImg").style.opacity = 1
    } else if (gems < miningPowerCost)
    {
        document.getElementById("upgradeToolImg").style.opacity = 0.5
    }
}

var counter = 0
rightArrowImg.onclick = function(){
    if(counter == 0){
        document.getElementById("dirt").style.display = "none"
        document.getElementById("sand").style.display = "block"
        document.getElementById("leftArrowImg").style.display = "flex"
        counter++
        updateNumbers()
    }
    else if(counter == 1){
        document.getElementById("sand").style.display = "none"
        document.getElementById("limestone").style.display = "block"
        counter++
        updateNumbers()
    }
    else if(counter == 2){
        document.getElementById("limestone").style.display = "none"
        document.getElementById("coal").style.display = "block"
        counter++
        updateNumbers()
    }
    else if(counter == 3){
        document.getElementById("coal").style.display = "none"
        document.getElementById("marble").style.display = "block"
        counter++
        updateNumbers()
    }
    else if(counter == 4){
        document.getElementById("marble").style.display = "none"
        document.getElementById("quartz").style.display = "block"
        counter++
        updateNumbers()
    }
};

leftArrowImg.onclick = function(){
    if(counter == 1){
        document.getElementById("sand").style.display = "none"
        document.getElementById("dirt").style.display = "block"
        document.getElementById("leftArrowImg").style.display = "none"
        counter--
        updateNumbers()
    }
    else if(counter == 2){
        document.getElementById("limestone").style.display = "none"
        document.getElementById("sand").style.display = "block"
        counter--
        updateNumbers()
    }
    else if(counter == 3){
        document.getElementById("coal").style.display = "none"
        document.getElementById("limestone").style.display = "block"
        counter--
        updateNumbers()
    }
    else if(counter == 4){
        document.getElementById("marble").style.display = "none"
        document.getElementById("coal").style.display = "block"
        counter--
        updateNumbers()
    }
    else if(counter == 5){
        document.getElementById("quartz").style.display = "none"
        document.getElementById("marble").style.display = "block"
        counter--
        updateNumbers()
    }
};

setInterval(function()
{
    checkCost()
},10)


window.addEventListener("keydown", check1Pressed, false);
window.addEventListener("keydown", check2Pressed, false);
window.addEventListener("keydown", check3Pressed, false);
window.addEventListener("keydown", check4Pressed, false);

function check1Pressed(evt) {
    if (evt.keyCode == "49") {
        upgradeTool()
    }
}

function check2Pressed(evt) {
    if (evt.keyCode == "50") {
        upgradeAutoMiningPower()
    }
}

function check3Pressed(evt) {
    if (evt.keyCode == "51") {
        upgradeLuck()
    }
}

function check4Pressed(evt) {
    if (evt.keyCode == "52") {
        upgradeMiningPower()
    }
}


function updateNumbers()
{
    document.getElementById("Coins").innerHTML = coins.toFixed(0)
    document.getElementById("Gems").innerHTML = gems.toFixed(0)
    document.getElementById("dirtHP").innerHTML = mineral.hp[0].toFixed(0)
    document.getElementById("sandHP").innerHTML = mineral.hp[1].toFixed(0)
    document.getElementById("limestoneHP").innerHTML = mineral.hp[2].toFixed(0)
    document.getElementById("coalHP").innerHTML = mineral.hp[3].toFixed(0)
    document.getElementById("marbleHP").innerHTML = mineral.hp[4].toFixed(0)
    document.getElementById("quartzHP").innerHTML = mineral.hp[5].toLocaleString()

    document.getElementById("autoMinLvl").innerHTML = autoMinLvl
    document.getElementById("autoMinPow").innerHTML = autoMinPow + " -> " + autoMinPow2
    document.getElementById("miningPowerCost").innerHTML = miningPowerCost.toFixed(0)
    document.getElementById("autoMiningCost").innerHTML = autoMiningCost.toFixed(0)
    document.getElementById("upgradeToolCost").innerHTML = upgradeToolCost.toFixed(0)
    document.getElementById("upgradeLuckCost").innerHTML = upgradeLuckCost.toFixed(0)
    document.getElementById("luckLvl").innerHTML = luckLvl.toFixed(0)
    document.getElementById("currentLuck").innerHTML = Math.round((luck / 10)) + "% -> " + Math.round((luck / 10) * 1.1) + "%"
    document.getElementById("damage").innerHTML = damage.toFixed(1)
    document.getElementById("autoDamage").innerHTML = autoMiningDamage.toFixed(1)
}