import { useEffect, useState } from "react"
import { redirect } from "react-router-dom"
import '../css/TatooineBountyHunt.css'

const TatooineBountyHunt=({messages,partyMembers,enemies,updateLog,updatePlayer})=>{

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
        
        const formattedDate =curDate.getDate()+"/"+newMonth+"/"+curDate.getFullYear()+" "+curDate.getHours()+":"+newMinutes+" : "
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
        setTimeout(alliesTurn,1000)
        //Enemy Attack with delay
        setTimeout(enemiesTurn,1000)
        //Delete dead companions from state
        setTimeout(checkIfCompanionsAreAlive,1000)
        //Delete dead enemies from state
        setTimeout(checkIfEnemiesAreAlive,1000)
        //Check if Player has won
        setTimeout(checkIfPlayerHasWon,1000)
        //Regain Action Points
        setTimeout(regainAP,1000)
    }
    const onAbilityClick=()=>{
        const newMessages = [...battleLog[0].messages]
        if(player.weapon.ability==="Snipe"){
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
        else if(player.weapon.ability==="Burst"){
            for(let i=0;i<missionEnemies.length;i++){
                if(targetedEnemy._id===missionEnemies[i]._id){
                    let damageDealt=0
                    let firstEnemyToHit=0
                    let secondEnemyToHit=0

                    if(player.level>=1 && player.level<5){
                        firstEnemyToHit=randomAiToHit(missionEnemies.length)
                        secondEnemyToHit=randomAiToHit(missionEnemies.length)
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
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    
                    else if(player.level>=10 && player.level<15){
                        firstEnemyToHit=randomAiToHit(missionEnemies.length)
                        secondEnemyToHit=randomAiToHit(missionEnemies.length)
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
                        setBattleLog(newLogMessage)
                    }
                    else if(player.level>=15){
                        firstEnemyToHit=randomAiToHit(missionEnemies.length)
                        secondEnemyToHit=randomAiToHit(missionEnemies.length)
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
                    const newEnemies=[...missionEnemies]
                    newEnemies[firstEnemyToHit].health-=damageDealt
                    newEnemies[secondEnemyToHit].health-=damageDealt
                    setMissionEnemies(newEnemies)
                }
            }
            
        }
        else if(player.weapon.ability==="Flurry"){
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
                    setBattleLog(newLogMessage)
                    newEnemies[i].health-=damageDealt
                }
            }else if(player.level>=1 && player.level<5){

            }
            setMissionEnemies(newEnemies)
        }
    }
    
    const alliesTurn=()=>{
        const newMessages = [...battleLog[0].messages]
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
                        setBattleLog(newLogMessage)
                    }else{
                        const newMessage = { message: getTheCurrentDate()+companions[i].name+" missed"}
                        newMessages.push(newMessage)
                        const newLogMessage = [{
                            _id: messages[0]._id,
                            messages: newMessages
                        }]
                        setBattleLog(newLogMessage)
                    }
                    
                    const newEnemies=[...missionEnemies]
                    newEnemies[enemyToHit].health-=damageDealt
                    setMissionEnemies(newEnemies)
                }
            }
        }
    }
    const enemiesTurn=()=>{
        const newMessages = [...battleLog[0].messages]
        if(missionEnemies.length>0){
            for(let i=0;i<missionEnemies.length;i++){
                if(companions.length>0){
                    const playerOrAI=randInt()
                    if(playerOrAI<25){
                        //Player gets attacks
                        if(missionEnemies[i].health>0){
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
                                setBattleLog(newLogMessage)
                            }else{
                                const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" missed"}
                                newMessages.push(newMessage)
                                const newLogMessage = [{
                                    _id: messages[0]._id,
                                    messages: newMessages
                                }]
                                setBattleLog(newLogMessage)
                            }
                            
                            const newPlayer=Object.assign({},player)
                            newPlayer.health-=damageDealt
                            setPlayer(newPlayer)
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
                                const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" attacked "+companions[companionToHit]+ " for "+damageDealt+" damage"}
                                newMessages.push(newMessage)
                                const newLogMessage = [{
                                    _id: messages[0]._id,
                                    messages: newMessages
                                }]
                                setBattleLog(newLogMessage)
                            }else{
                                const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" missed"}
                                newMessages.push(newMessage)
                                const newLogMessage = [{
                                    _id: messages[0]._id,
                                    messages: newMessages
                                }]
                                setBattleLog(newLogMessage)
                            }
                            const newCompanions=[...companions]
                            newCompanions[companionToHit].health-=damageDealt
                            setCompanions(newCompanions)
                        }
                    }
                }        
                else{
                    //Just attacks player
                    if(missionEnemies[i].health>0){
                        const didhitInt=randomChanceToHit()
                        let damageDealt=0
                        if(missionEnemies[i].weapon.chance_to_hit>didhitInt){
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
                            setBattleLog(newLogMessage)
                        }else{
                            const newMessage = { message: getTheCurrentDate()+missionEnemies[i].name+" missed"}
                            newMessages.push(newMessage)
                            const newLogMessage = [{
                                _id: messages[0]._id,
                                messages: newMessages
                            }]
                            setBattleLog(newLogMessage)
                        }
                        const newPlayer=Object.assign({},player)
                        newPlayer.health-=damageDealt
                        setPlayer(newPlayer)
                    }
                }
            }
        }
    }
    const regainAP=()=>{
        const newMessages = [...battleLog[0].messages]
        const newPlayer=Object.assign({},player)
        if(newPlayer.action_points<newPlayer.max_ap){
            newPlayer.action_points+=5
            if(newPlayer.action_points>=newPlayer.max_ap){
                newPlayer.action_points=newPlayer.max_ap
            }
            const newMessage = { message: getTheCurrentDate()+"You have regained 5 AP"}
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
            newPlayer.credits+=500
            const newCreditMessage = { message: getTheCurrentDate()+"You have gained 500 credits"}
            newMessages.push(newCreditMessage)
            newPlayer.cur_xp+=50
            const newXpMessage = { message: getTheCurrentDate()+"50 XP gained"}
            newMessages.push(newXpMessage)


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
        if(newPlayer.stim_count>0 && newPlayer.health<newPlayer.max_health){
            newPlayer.stim_count-=1
            newPlayer.health+=50
            if(newPlayer.health>=newPlayer.max_health){
                newPlayer.health=newPlayer.max_health
            }
            const newMessage = { message: getTheCurrentDate()+"You have healed 50 HP"}
            newMessages.push(newMessage)
            setPlayer(newPlayer)
        }
    }
    const onRetreatClick=()=>{
        const newMessages = [...battleLog[0].messages]
        const newPlayer=Object.assign({},player)
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
        const filterLevel1Enemies=enemies.filter(enemy=>enemy.level===1)
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
    

    const displayEnemiesForm=missionEnemies.map((enemy)=>{
        return(
            <div id="display-enemies">
                <p>Name: {enemy.name}</p>
                {enemy.name==="Thug"?<p>Health: {enemy.health}/150</p>:<p>Health: {enemy.health}/250</p>}
                <p>Target Enemy</p>
                <input onChange={()=>onChange(enemy)} type="radio" id="enemy-radio" name="enemy" checked={targetedEnemy._id===enemy._id} value={enemy._id}/>  
            </div>
            
        )
    })

    const displayCompanions=companions.map((companion)=>{
        return(
            <div>
                <p>Name: {companion.name}</p>
                <p>Health: {companion.health}/{companion.max_health}</p>
            </div>
        )
    })

    return(
        <section id="battle-section">
            <div id="enemies">
                    {displayEnemiesForm}
            </div>
            <div id="defeat-or-victory">
                <br></br>
                <br></br>
                {player.health<=0?<button onClick={onDefeatClick}>You have defeated, return to hideout</button>:null}
                {missionEnemies.length===0?<button onClick={onVictoryClick}>You are Victorious, return to hideout</button>:null}
                <br></br>
                <br></br>
            </div>
            <div id="player">
                <div id="action-buttons">
                    {targetedEnemy.name?<button onClick={onFireClick}>Fire</button>:<p>Select a Target</p>}
                    {targetedEnemy.name?<button onClick={onAbilityClick}>Ability</button>:<p>Select a Target</p>}
                    <button onClick={onHealClick}>Heal</button>
                    <button onClick={onRetreatClick}>Retreat</button>
                </div>
                <div id="battle-log">
                    {displayBattleLogMessages}
                </div>
                <div id="party-details">
                    {player&&
                        <div>
                            <p>Name: {player.name}</p>
                            <p>Health: {player.health}/{player.max_health}</p>
                            <p>Action Points: {player.action_points}/{player.max_ap}</p>
                        </div>
                    }
                    {displayCompanions}
                </div>
            </div>
            
        </section>
    )
}
export default TatooineBountyHunt