import { useEffect, useState } from "react"
import { redirect } from "react-router-dom"
import '../css/CoruscantBountyHunt.css'

const CoruscantBountyHunt=({messages,partyMembers,enemies,updateLog,updatePlayer})=>{

    const[player,setPlayer]=useState({})
    const[missionEnemies,setMissionEnemies]=useState([])
    const[companions,setCompanions]=useState([])
    const[targetedEnemy,setTargetEnemy]=useState({})
    const[battleLog,setBattleLog]=useState([])
    const[checked,setChecked]=useState("")


    useEffect(()=>{
        loadData()
    },[])
    
    const getTheCurrentDate=()=>{
        const curDate=new Date()
        let newMonth=curDate.getMonth()+1
        newMonth.toString()
        if(newMonth<10){
            newMonth="0"+newMonth
        }
        let newMinutes=curDate.getMinutes()
        newMinutes.toString()
        if(newMinutes<10){
            newMinutes="0"+newMinutes
        }
        let newDay=curDate.getDate()
        newDay.toString()
        if(newDay<10){
            newDay="0"+newDay
        }
        let newHours=curDate.getHours()
        newHours.toString()
        if(newHours<10){
            newHours="0"+newHours
        }
        
        const formattedDate =newDay+"/"+newMonth+"/"+curDate.getFullYear()+" "+newHours+":"+newMinutes+" : "
        return formattedDate.toString()
    }

    const onFireClick=()=>{
        const newMessages = [...battleLog[0].messages]

        //Player Attack
        for(let i=0;i<missionEnemies.length;i++){
            if(targetedEnemy._id===missionEnemies[i]._id){
                const didhitInt = randomChanceToHit()
                let damageDealt=0
                if(player.weapon.chance_to_hit>didhitInt){
                    damageDealt=player.weapon.damage-missionEnemies[i].armour.defense
                    if(damageDealt<=0){
                        damageDealt=2
                    }
                    //logUpdate
                    const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                    newMessages.push(newMessage)
                    const newLogMessage = [{
                        _id: messages[0]._id,
                        messages: newMessages
                    }]
                    setBattleLog(newLogMessage)
                }else{
                    //logUpdate
                    const newMessage = { message: getTheCurrentDate()+"You missed"}
                    newMessages.push(newMessage)
                    const newLogMessage = [{
                        _id: messages[0]._id,
                        messages: newMessages
                    }]
                    setBattleLog(newLogMessage)
                }
                
                const newEnemies=[...missionEnemies]
                newEnemies[i].health-=damageDealt
                setMissionEnemies(newEnemies)
            }
            // 
        }
        //Companion Attack with delay
        setTimeout(() => alliesTurn(newMessages),1000)
        //Enemy Attack with delay
        let healthToBeReturned  
        
        healthToBeReturned = enemiesTurn(newMessages)
        
            
        console.log(healthToBeReturned)
        // enemiesTurn()
        //Delete dead companions from state
        setTimeout(checkIfCompanionsAreAlive,1000)
        //Delete dead enemies from state
        setTimeout(checkIfEnemiesAreAlive,1000)
        //Check if Player has won
        setTimeout(checkIfPlayerHasWon,1000)
        //Regain Action Points
        setTimeout(regainAP(healthToBeReturned.health),1000)
        // regainAP()
        const newLogMessage = [{
            _id: messages[0]._id,
            messages: newMessages
        }]
        setBattleLog(newLogMessage)
    }
    const onAbilityClick=()=>{
        const newMessages = [...battleLog[0].messages]
        let apToUse=10
        if(player.level>=1 && player.level<5){
            apToUse=10
        }else if(player.level>=5 && player.level<10){
            apToUse=15
        }else if(player.level>=10 && player.level<15){
            apToUse=20
        }else if(player.level>=15){
            apToUse=25
        }
        if(player.weapon.ability==="Snipe" && player.action_points>=apToUse){
            for(let i=0;i<missionEnemies.length;i++){
                if(targetedEnemy._id===missionEnemies[i]._id){
                    let damageDealt=0
                    if(player.level>=1 && player.level<5){
                        damageDealt=Math.trunc(player.weapon.damage*1.5)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    else if(player.level>=5 && player.level<10){
                        damageDealt=Math.trunc(player.weapon.damage*2)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    
                    else if(player.level>=10 && player.level<15){
                        damageDealt=Math.trunc(player.weapon.damage*2.5)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    else if(player.level>=15){
                        damageDealt=Math.trunc(player.weapon.damage*3)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    const newEnemies=[...missionEnemies]
                    newEnemies[i].health-=damageDealt
                    setMissionEnemies(newEnemies)
                }
            }
        }
        else if(player.weapon.ability==="Burst" && player.action_points>=apToUse){
            for(let i=0;i<missionEnemies.length;i++){
                if(targetedEnemy._id===missionEnemies[i]._id){
                    let damageDealt=0
                    let firstEnemyToHit=0
                    let secondEnemyToHit=0

                    if(player.level>=1 && player.level<5){
                        firstEnemyToHit=i
                        secondEnemyToHit=randomAiToHit(missionEnemies.length)
                        damageDealt=Math.trunc(player.weapon.damage*0.75)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newSecondMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[secondEnemyToHit].name+" for "+damageDealt+" damage" }
                        newMessages.push(newSecondMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    else if(player.level>=5 && player.level<10){
                        firstEnemyToHit=randomAiToHit(missionEnemies.length)
                        secondEnemyToHit=randomAiToHit(missionEnemies.length)
                        damageDealt=Math.trunc(player.weapon.damage*1)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newSecondMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[secondEnemyToHit].name+" for "+damageDealt+" damage" }
                        newMessages.push(newSecondMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    
                    else if(player.level>=10 && player.level<15){
                        firstEnemyToHit=i
                        secondEnemyToHit=randomAiToHit(missionEnemies.length)
                        damageDealt=Math.trunc(player.weapon.damage*1.25)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newSecondMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[secondEnemyToHit].name+" for "+damageDealt+" damage" }
                        newMessages.push(newSecondMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    else if(player.level>=15){
                        firstEnemyToHit=i
                        secondEnemyToHit=randomAiToHit(missionEnemies.length)
                        damageDealt=Math.trunc(player.weapon.damage*1.5)
                        damageDealt=damageDealt-missionEnemies[i].armour.defense
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                        newMessages.push(newMessage)
                        const newSecondMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[secondEnemyToHit].name+" for "+damageDealt+" damage" }
                        newMessages.push(newSecondMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    const newEnemies=[...missionEnemies]
                    newEnemies[firstEnemyToHit].health-=damageDealt
                    newEnemies[secondEnemyToHit].health-=damageDealt
                    setMissionEnemies(newEnemies)
                }
            }
            
        }
        else if(player.weapon.ability==="Flurry" && player.action_points>=apToUse){
            let damageDealt=0
            const newEnemies=[...missionEnemies]
            if(player.level>=1 && player.level<5){
                for(let i=0;i<missionEnemies.length;i++){
                    damageDealt=Math.trunc(player.weapon.damage*0.5)
                    damageDealt=damageDealt-missionEnemies[i].armour.defense
                    if(damageDealt<=0){
                        damageDealt=2
                    }
                    
                    //logUpdate
                    const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                    newMessages.push(newMessage)
                    const newLogMessage = [{
                        _id: messages[0]._id,
                        messages: newMessages
                    }]
                    // setBattleLog(newLogMessage)
                    newEnemies[i].health-=damageDealt
                }
            }else if(player.level>=5 && player.level<10){
                for(let i=0;i<missionEnemies.length;i++){
                    damageDealt=Math.trunc(player.weapon.damage*0.75)
                    damageDealt=damageDealt-missionEnemies[i].armour.defense
                    if(damageDealt<=0){
                        damageDealt=2
                    }
                    
                    //logUpdate
                    const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                    newMessages.push(newMessage)
                    const newLogMessage = [{
                        _id: messages[0]._id,
                        messages: newMessages
                    }]
                    // setBattleLog(newLogMessage)
                    newEnemies[i].health-=damageDealt
                }
            }else if(player.level>=10 && player.level<15){
                for(let i=0;i<missionEnemies.length;i++){
                    damageDealt=Math.trunc(player.weapon.damage*1)
                    damageDealt=damageDealt-missionEnemies[i].armour.defense
                    if(damageDealt<=0){
                        damageDealt=2
                    }
                    
                    //logUpdate
                    const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                    newMessages.push(newMessage)
                    const newLogMessage = [{
                        _id: messages[0]._id,
                        messages: newMessages
                    }]
                    // setBattleLog(newLogMessage)
                    newEnemies[i].health-=damageDealt
                }
            }else if(player.level>=15 ){
                for(let i=0;i<missionEnemies.length;i++){
                    damageDealt=Math.trunc(player.weapon.damage*1.25)
                    damageDealt=damageDealt-missionEnemies[i].armour.defense
                    if(damageDealt<=0){
                        damageDealt=2
                    }
                    
                    //logUpdate
                    const newMessage = { message: getTheCurrentDate()+ "You attacked " + missionEnemies[i].name+" for "+damageDealt+" damage" }
                    newMessages.push(newMessage)
                    const newLogMessage = [{
                        _id: messages[0]._id,
                        messages: newMessages
                    }]
                    // setBattleLog(newLogMessage)
                    newEnemies[i].health-=damageDealt
                }
            }

            setMissionEnemies(newEnemies)
        }else{
            //logUpdate
            const newMessage = { message: getTheCurrentDate()+ "You do not have enough AP to use an ability " }
            newMessages.push(newMessage)
        }
        if(player.action_points>=apToUse){
        //Companion Attack with delay
        setTimeout(alliesTurn(newMessages),1000)
        //Enemy Attack with delay
        let healthToBeReturned
        healthToBeReturned = enemiesTurn(newMessages)
        //Delete dead companions from state
        setTimeout(checkIfCompanionsAreAlive,1000)
        //Delete dead enemies from state
        setTimeout(checkIfEnemiesAreAlive,1000)
        //Check if Player has won
        setTimeout(checkIfPlayerHasWon,1000)
        //Remove Action Points
        setTimeout(removeAP(healthToBeReturned.health),1000)
        }
        const newLogMessage = [{
            _id: messages[0]._id,
            messages: newMessages
        }]
        setBattleLog(newLogMessage)
    }
    
    const alliesTurn=(newMessages)=>{
        // const newMessages = [...battleLog[0].messages]
        if(companions.length>0){
            for(let i=0;i<companions.length;i++){
                if(companions[i].health>0){
                    const didhitInt=randomChanceToHit()
                    const numOfEnemies=missionEnemies.length
                    const enemyToHit=randomAiToHit(numOfEnemies)
                    let damageDealt=0
                    if(companions[i].weapon.chance_to_hit>didhitInt){
                        const mitigatedDamage=missionEnemies[enemyToHit].armour.defense
                        damageDealt=companions[i].weapon.damage-mitigatedDamage
                        if(damageDealt<=0){
                            damageDealt=2
                        }
                        //logUpdate
                        const newMessage = { message: getTheCurrentDate()+companions[i].name+" attacked "+missionEnemies[enemyToHit].name+" for "+damageDealt+" damage"}
                        newMessages.push(newMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        // setBattleLog(newLogMessage)
                    }else{
                        const newMessage = { message: getTheCurrentDate()+companions[i].name+" missed"}
                        newMessages.push(newMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        // setBattleLog(newLogMessage)
                    }
                    
                    const newEnemies=[...missionEnemies]
                    newEnemies[enemyToHit].health-=damageDealt
                    setMissionEnemies(newEnemies)
                }

            }
        }
        return newMessages
    }
    const enemiesTurn=(newMessages)=>{
        // const newMessages = [...battleLog[0].messages]
        if(missionEnemies.length>0){
            const newCompanions=[...companions]
            const newPlayer=Object.assign({},player)
            for(let i=0;i<missionEnemies.length;i++){
                if(companions.length>0){
                    const playerOrAI=randInt()
                    if(playerOrAI<25){
                        //Player gets attacks
                        if(missionEnemies[i].health>0){
                            console.log("gets to here")
                            const didhitInt=randomChanceToHit()
                            let damageDealt=0
                            if(missionEnemies[i].weapon.chance_to_hit>didhitInt){
                                const mitigatedDamage=player.armour.defense
                                damageDealt=missionEnemies[i].weapon.damage-mitigatedDamage
                                if(damageDealt<=0){
                                    damageDealt=2
                                }
                                const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" attacked the player for "+damageDealt+" damage"}
                                newMessages.push(newMessage)
                                const newLogMessage = [{
                                    _id: messages[0]._id,
                                    messages: newMessages
                                }]
                                // setBattleLog(newLogMessage)
                            }else{
                                const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" missed"}
                                newMessages.push(newMessage)
                                const newLogMessage = [{
                                    _id: messages[0]._id,
                                    messages: newMessages
                                }]
                                // setBattleLog(newLogMessage)
                            }
                            
                            // const newPlayer=Object.assign({},player)
                            newPlayer.health-=damageDealt
                            // setPlayer(newPlayer)
                        }
                    }
                    else{
                        //AI gets attacked
                        if(missionEnemies[i].health>0){
                            const didhitInt=randomChanceToHit()
                            const numOfCompanions=companions.length
                            const companionToHit=randomAiToHit(numOfCompanions)
                            let damageDealt=0
                            if(missionEnemies[i].weapon.chance_to_hit>didhitInt){
                                const mitigatedDamage=companions[companionToHit].armour.defense
                                damageDealt=missionEnemies[i].weapon.damage-mitigatedDamage
                                if(damageDealt<=0){
                                    damageDealt=2
                                }
                                //logUpdate
                                const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" attacked "+companions[companionToHit].name+ " for "+damageDealt+" damage"}
                                newMessages.push(newMessage)
                                const newLogMessage = [{
                                    _id: messages[0]._id,
                                    messages: newMessages
                                }]
                                // setBattleLog(newLogMessage)
                            }else{
                                const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" missed"}
                                newMessages.push(newMessage)
                                const newLogMessage = [{
                                    _id: messages[0]._id,
                                    messages: newMessages
                                }]
                                // setBattleLog(newLogMessage)
                            }
                            // const newCompanions=[...companions]
                            newCompanions[companionToHit].health-=damageDealt
                            // setCompanions(newCompanions)
                        }
                    }
                }        
                else{
                    //Just attacks player
                    if(missionEnemies[i].health>0){
                        console.log("gets to here")
                        const didhitInt=randomChanceToHit()
                        let damageDealt=0
                        if(missionEnemies[i].weapon.chance_to_hit>didhitInt){
                            console.log("gets to here to hit")
                            const mitigatedDamage=player.armour.defense
                            damageDealt=missionEnemies[i].weapon.damage-mitigatedDamage
                            if(damageDealt<=0){
                                damageDealt=2
                            }
                            //logUpdate
                            const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" attacked the player for "+damageDealt+" damage"}
                            newMessages.push(newMessage)
                            const newLogMessage = [{
                                _id: messages[0]._id,
                                messages: newMessages
                            }]
                            // setBattleLog(newLogMessage)
                        }else{
                            console.log("gets to here miss")
                            const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" missed"}
                            newMessages.push(newMessage)
                            const newLogMessage = [{
                                _id: messages[0]._id,
                                messages: newMessages
                            }]
                            setBattleLog(newLogMessage)
                        }
                        console.log("gets to here end")
                        // const newPlayer=Object.assign({},player)
                        newPlayer.health-=damageDealt
                        // setPlayer(newPlayer)
                    }
                }
            }
            // setPlayer(newPlayer)
            setCompanions(newCompanions)
            return {newMessages, health: newPlayer.health}
        }
    }
    const regainAP=(healthToSet)=>{
        const newMessages = [...battleLog[0].messages]
        const newPlayer=Object.assign({},player) // {... plyaer}
        console.log("health",newPlayer.health)
        newPlayer.health=healthToSet
        if(newPlayer.action_points<newPlayer.max_ap){
            newPlayer.action_points+=5
            if(newPlayer.action_points>=newPlayer.max_ap){
                newPlayer.action_points=newPlayer.max_ap
            }
            const newMessage = { message: getTheCurrentDate()+"You have regained 5 AP"}
            newMessages.push(newMessage) // TODO: what are we doing with this
            
        }
        setPlayer(newPlayer)
    }
    const removeAP=(healthToSet)=>{
        if(player.level>=1 && player.level<5){
            const newMessages = [...battleLog[0].messages]
            const newPlayer=Object.assign({},player)
            newPlayer.health=healthToSet
            
            newPlayer.action_points-=10
            
            if(newPlayer.action_points<=0){
                    newPlayer.action_points=0
            }
            const newMessage = { message: getTheCurrentDate()+"You have used 10 AP"}
            newMessages.push(newMessage)
            setPlayer(newPlayer)
            
        }else if(player.level>=5 && player.level<10){
            const newMessages = [...battleLog[0].messages]
            const newPlayer=Object.assign({},player)
            
            newPlayer.health=healthToSet

            newPlayer.action_points-=15
            if(newPlayer.action_points<=0){
                    newPlayer.action_points=0
            }
            const newMessage = { message: getTheCurrentDate()+"You have used 15 AP"}
            newMessages.push(newMessage)
            setPlayer(newPlayer)
        }else if(player.level>=10 && player.level<15){
            const newMessages = [...battleLog[0].messages]
            const newPlayer=Object.assign({},player)
            
            newPlayer.health=healthToSet

            newPlayer.action_points-=20
            if(newPlayer.action_points<=0){
                    newPlayer.action_points=0
            }
            const newMessage = { message: getTheCurrentDate()+"You have used 20 AP"}
            newMessages.push(newMessage)
            setPlayer(newPlayer)
        }else if(player.level>=15){
            const newMessages = [...battleLog[0].messages]
            const newPlayer=Object.assign({},player)
            
            newPlayer.health=healthToSet

            newPlayer.action_points-=25
            if(newPlayer.action_points<=0){
                    newPlayer.action_points=0
            }
            const newMessage = { message: getTheCurrentDate()+"You have used 25 AP"}
            newMessages.push(newMessage)
            setPlayer(newPlayer)
        }
    }

    const checkIfCompanionsAreAlive=()=>{
        if(companions.length>0){
            for(let i=0;i<companions.length;i++){
                if(companions[i].health<=0){
                    const newCompanions=[...companions]
                    newCompanions.splice(i,1)
                    setCompanions(newCompanions)
                }
            }
        }
    }
    const checkIfEnemiesAreAlive=()=>{
        const newEnemies=[...missionEnemies]
        if(missionEnemies.length>0){
            for(let i=0;i<missionEnemies.length;i++){
                if(missionEnemies[i].health<=0){
                    newEnemies.splice(i,1)
                    
                }
            }
            if(targetedEnemy.health<=0){
                setTargetEnemy({})
            }
            setMissionEnemies(newEnemies)
        }
    }

    const checkIfPlayerHasWon=()=>{
        const newMessages = [...battleLog[0].messages]
        if(player.health>0 && missionEnemies.length===0){

            const newPlayer=Object.assign({},player)
            const newMessage = { message: getTheCurrentDate()+"You have won the battle"}
            newMessages.push(newMessage)
            newPlayer.credits+=1000
            const newCreditMessage = { message: getTheCurrentDate()+"You have gained 1000 credits"}
            newMessages.push(newCreditMessage)
            newPlayer.cur_xp+=150
            const newXpMessage = { message: getTheCurrentDate()+"150 XP gained"}
            newMessages.push(newXpMessage)
            newPlayer.action_points=newPlayer.max_ap


            if(newPlayer.cur_xp>=newPlayer.xp_to_level_up){
                newPlayer.level+=1
                const newMessage = { message: getTheCurrentDate()+"You have leveled up to level "+newPlayer.level+", your basic stats has increased"}
                newMessages.push(newMessage)
                newPlayer.cur_xp=0
                newPlayer.xp_to_level_up*=2
                newPlayer.max_health+=25
                newPlayer.max_ap+=5
                newPlayer.credits+=250
                newPlayer.health=newPlayer.max_health
                newPlayer.action_points=newPlayer.max_ap
                
            }
            
            
            const newLogMessage = {
                _id: messages[0]._id,
                messages: newMessages
            }
            const newStateLogMessage = [{
                _id: messages[0]._id,
                messages: newMessages
            }]
            setBattleLog(newStateLogMessage)
            updateLog(newLogMessage)
            setPlayer(newPlayer)
            updatePlayer(newPlayer)

            setTimeout(delayMove,1000)
        }
    }
    const checkIfEnemiesHaveWon=()=>{
        const newMessages = [...battleLog[0].messages]
        if(player.health<=0){
            const newPlayer=Object.assign({},player)
            const newMessage = { message: getTheCurrentDate()+"You have been defeated, you wake up later at the hideout"}
            newMessages.push(newMessage)
            newPlayer.health=1
            newPlayer.action_points=newPlayer.max_ap

            const newLogMessage = {
                _id: messages[0]._id,
                messages: newMessages
            }
            const newStateLogMessage = [{
                _id: messages[0]._id,
                messages: newMessages
            }]
            setBattleLog(newStateLogMessage)
            updateLog(newLogMessage)
            setPlayer(newPlayer)
            updatePlayer(newPlayer)

            setTimeout(delayMove,1000)
        }

    }

    const delayMove=()=>{
        window.location.href = "/main-menu"
    }


    const randInt =()=>{
        const min = 1
        const max = 100
        const randomNum= Math.trunc(Math.random()*(max - min) + min)
        return randomNum
    }
    const randomChanceToHit = () => {
        const min = 1
        const max = 100
        const randomNum= Math.trunc(Math.random()*(max - min) + min)
        return randomNum
    }
    const randomAiToHit=(int)=>{
        const min = 0
        const max = int
        const randomNum= Math.trunc(Math.random()*(max - min) + min)
        return randomNum
    }
    
    const onHealClick=()=>{
        const newMessages = [...battleLog[0].messages]
        const newPlayer=Object.assign({},player)
        if(newPlayer.stim_count>0 && newPlayer.health<newPlayer.max_health && newPlayer.action_points>=5){
            console.log("gets to here")
            newPlayer.stim_count-=1
            newPlayer.health+=75
            newPlayer.action_points-=5
            if(newPlayer.health>=newPlayer.max_health){
                newPlayer.health=newPlayer.max_health
            }
            console.log("healing gets to here")
            const newMessage = { message: getTheCurrentDate()+"You have used a stim pack and 5 AP to heal 75 HP"}
            newMessages.push(newMessage)
            const newLogMessage = [{
                _id: messages[0]._id,
                messages: newMessages
            }]
            setBattleLog(newLogMessage)
            setPlayer(newPlayer)
        }
    }
    const onRetreatClick=()=>{
        const newMessages = [...battleLog[0].messages]
        const newPlayer=Object.assign({},player)
        newPlayer.action_points=newPlayer.max_ap
        const newMessage = { message: getTheCurrentDate()+"The enemy is too powerful, you have retreated back to the hideout"}
        newMessages.push(newMessage)
        updatePlayer(newPlayer)
        setTimeout(delayMove,1000)
    }
    const onVictoryClick=()=>{
        checkIfPlayerHasWon()
    }
    const onDefeatClick=()=>{
        checkIfEnemiesHaveWon()
    }
    const onChange=(enemy)=>{
        let currentTarget = enemy
        let newTarget = Object.assign({}, targetedEnemy)
        newTarget = currentTarget
        setTargetEnemy(newTarget)
    }

    const loadData=()=>{
        const filterLevel1Enemies=enemies.filter(enemy=>enemy.level===5)
        setMissionEnemies(filterLevel1Enemies)
        const findPlayer=partyMembers.find(player=>player.is_player)
        setPlayer(findPlayer)
        const filterCompanions=partyMembers.filter(member=>!member.is_player)
        setCompanions(filterCompanions)
        const filterLog=messages.filter(log=>log._id!==null)
        setBattleLog(filterLog)
    }
    
    const displayBattleLogMessages=battleLog.map((message)=>{
        return message.messages.map((logMessage)=>{
            return (
                <p> {logMessage.message}</p>
            )
        })
    })
    
    const getApCost=()=>{
        let apCost=10
        if(player.level>=1 && player.level<5){
            return apCost=10
        }else if(player.level>=5 && player.level<10){
            return apCost=15
        }else if(player.level>=10 && player.level<15){
            return apCost=20
        }else if(player.level>=15){
            return apCost=25
        }
        return apCost
    }
    const apCost=getApCost()

    const displayEnemiesForm=missionEnemies.map((enemy)=>{
        return(
            <section>
                {enemy.name==="Black Sun Gangster"?<div id="display-enemies">
                    <p>{enemy.name}</p>
                    <p >HP: {enemy.health}/250</p>
                    <p>Target Enemy</p>
                    <input onChange={()=>onChange(enemy)} type="radio" id="enemy-radio" name="enemy" checked={targetedEnemy._id===enemy._id} value={enemy._id}/>  
                </div>:
                <div id="display-enemies-elite">
                    <p>{enemy.name}</p>
                    <p id="thug-elite">HP: {enemy.health}/300</p>
                    <p>Target Enemy</p>
                    <input onChange={()=>onChange(enemy)} type="radio" id="enemy-radio" name="enemy" checked={targetedEnemy._id===enemy._id} value={enemy._id}/>  
                </div>
                }
            </section>
        
            
        )
    })

    const displayCompanions=companions.map((companion)=>{
        return(
            <div id="party-stats">
                <p className="name">{companion.name}</p>
                <p>HP: {companion.health}/{companion.max_health}</p>
            </div>
        )
    })
    const isComplete=()=>{
        if(player.health<=0 || missionEnemies.length===0 ){
            return true
        }
        return false
    }

    return(
        <section id="battle-section">
            {!isComplete()?<section>
                <div id="enemies">
                        {displayEnemiesForm}
                </div>
                <div id="defeat-or-victory">
                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <br></br>
                </div>
                <div id="player">
                    <div id="action-buttons">
                        {!targetedEnemy.name?
                        <div id="not-selected">
                            <p id="target-p">Select a Target</p>
                        </div>:
                        <div >
                            <button className="selected-buttons" onClick={onFireClick}>Fire</button>
                            <button className="selected-buttons" onClick={onAbilityClick}>Ability (AP Cost: {apCost})</button>
                        </div>
                        }
                        <div >
                            <button className="selected-buttons" id="heal-button" onClick={onHealClick}>Heal</button>
                            <button className="selected-buttons" onClick={onRetreatClick}>Retreat</button>
                        </div>
                        
                    </div>
                    <div id="battle-log">
                        {displayBattleLogMessages}
                        
                    </div>
                    <div id="party-details">
                        {player&&
                            <div id="player-stats">
                                <p className="name">{player.name}</p>
                                <p>HP: {player.health}/{player.max_health}</p>
                                <p>AP: {player.action_points}/{player.max_ap}</p>
                                <p>Stim Packs: {player.stim_count}</p>
                            </div>
                        }
                            {displayCompanions}
                        
                    </div>
                </div>
            </section>:
            <section>
                {player.health<=0?<button id="end-battle" onClick={onDefeatClick}>You have defeated. Return to hideout</button>:null}
                {missionEnemies.length===0?<button id="end-battle" onClick={onVictoryClick}>You are victorious. Return to hideout</button>:null}
            </section>
            }
        </section>
    
    )
}
export default CoruscantBountyHunt