import { useEffect, useState } from "react"

const TatooineBountyHunt=({messages,partyMembers,enemies,updateLog,updatePlayer})=>{

    const[player,setPlayer]=useState({})
    const[missionEnemies,setMissionEnemies]=useState([])
    const[companions,setCompanions]=useState([])
    const[targetedEnemy,setTargetEnemy]=useState({})

    useEffect(()=>{
        loadEnemies()
    },[])

    const onFireClick=()=>{

    }
    const onAbilityClick=()=>{

    }
    const onHealClick=()=>{

    }
    const onRetreatClick=()=>{

    }
    const onChange=()=>{

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
    // loadEnemies()

    const displayEnemies=missionEnemies.map((enemy)=>{
        return(
            <div id="display-enemies">
                <p>Name: {enemy.name}</p>
                {enemy.name==="Thug"?<p>Health: {enemy.health}/150</p>:<p>Health: {enemy.health}/250</p>}
                {/* <form>
                    <input onChange={onChange} type="radio" id="enemy-radio" name="enemy" value={targetedEnemy===enemy}/>
                    <label for="enemy-radio">Target Enemy</label>
                </form> */}
            </div>
            
        )
    })
    const displayEnemiesForm=missionEnemies.map((enemy)=>{
        return(
            <div id="display-enemies">
                <p>Name: {enemy.name}</p>
                {enemy.name==="Thug"?<p>Health: {enemy.health}/150</p>:<p>Health: {enemy.health}/250</p>}
                <p>Target Enemy</p>
                <input onChange={onChange} type="radio" id="enemy-radio" name="enemy" value={enemy}/>  
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
        <section>
            <div id="enemies">
                    {displayEnemiesForm}
            </div>
            <div id="middle">

            </div>
            <div id="players">
                <div>
                    <button onClick={onFireClick}>Fire</button>
                    <button onClick={onAbilityClick}>Ability</button>
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