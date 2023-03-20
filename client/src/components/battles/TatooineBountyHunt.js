import { useEffect, useState } from "react"
import '../css/TatooineBountyHunt.css'

const TatooineBountyHunt=({messages,partyMembers,enemies,updateLog,updatePlayer})=>{

    const[player,setPlayer]=useState({})
    const[missionEnemies,setMissionEnemies]=useState([])
    const[companions,setCompanions]=useState([])
    const[targetedEnemy,setTargetEnemy]=useState({})

    useEffect(()=>{
        loadEnemies()
    },[])

    const onFireClick=()=>{
        const newMessages = [...messages[0].messages]
        //Player Attack
        for(let i=0;i<missionEnemies.length;i++){
            if(targetedEnemy._id===missionEnemies[i]._id){
                const didhitInt = randomChanceToHit()
                let damageDealt=0
                if(player.weapon.chance_to_hit>didhitInt){
                    damageDealt=player.weapon.damage
                    //logUpdate
                }
                
                const newEnemies=[...missionEnemies]
                newEnemies[i].health-=damageDealt
                setMissionEnemies(newEnemies)
            }
        }

        //Companion Attack with delay

        //Enemy Attack with delay
    }
    const randomChanceToHit = () => {
        const min = 1
        const max = 100
        const randomNum= Math.trunc(Math.random()*(max - min) + min)
        return randomNum
    }
    const onAbilityClick=()=>{

    }
    const onHealClick=()=>{

    }
    const onRetreatClick=()=>{

    }
    const onChange=(enemy)=>{
        let currentTarget = enemy
        console.log("this is the new target",currentTarget.name)
        // setTargetEnemy(currentTarget)
        let newTarget = Object.assign({}, targetedEnemy)
        newTarget = currentTarget
        setTargetEnemy(newTarget)
    }

    const loadEnemies=()=>{
        const filterLevel1Enemies=enemies.filter(enemy=>enemy.level===1)
        setMissionEnemies(filterLevel1Enemies)
        const findPlayer=partyMembers.find(player=>player.is_player)
        setPlayer(findPlayer)
        const filterCompanions=partyMembers.filter(member=>!member.is_player)
        setCompanions(filterCompanions)
    }
    const logMessages=messages.map((message)=>{
        return message.messages.map((logMessage)=>{
            return (
                <p> Message:{logMessage.message}</p>
            )
        })
    })

    const displayEnemiesForm=missionEnemies.map((enemy)=>{
        return(
            <div id="display-enemies">
                <p>Name: {enemy.name}</p>
                {enemy.name==="Thug"?<p>Health: {enemy.health}/150</p>:<p>Health: {enemy.health}/250</p>}
                <p>Target Enemy</p>
                <input onChange={()=>onChange(enemy)} type="radio" id="enemy-radio" name="enemy" value={enemy}/>  
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
            <div id="middle">
                <br></br>
                <br></br>
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
                    {logMessages}
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