import './css/cantina.css'
import PlaySong from './music/playsong'
import ReactAudioPlayer from 'react-audio-player';


const Cantina=({bountyHunters,partyMembers,messages,removeFromAvailable,addToParty,updatePlayer,updateLog,removeFromParty,addToAvailable})=>{
    const onHireClick=(hunter)=>{
        const idToDelete=hunter._id
        const player=partyMembers.filter(playerData=>playerData.is_player)
        if(partyMembers.length<4 && player[0].credits >= hunter.credits){
            removeFromAvailable(idToDelete)
            addToParty(hunter)
            const newCredits = player[0].credits - hunter.credits
            const updatedPlayer={
                _id:player[0]._id,
                name:player[0].name,
                species:player[0].species,
                health:player[0].health,
                max_health:player[0].max_health,
                action_points:player[0].action_points,
                max_ap:player[0].max_ap,
                credits:newCredits,
                level:player[0].level,
                xp_to_level_up:player[0].xp_to_level_up,
                cur_xp:player[0].cur_xp,
                is_player:player[0].is_player,
                stim_count:player[0].stim_count,
                weapon:player[0].weapon,
                armour:player[0].armour
            }
            updatePlayer(updatedPlayer)
            const newMessage={message:getTheCurrentDate()+hunter.name+": Time to make some credits. Let's get hunting("+hunter.name+" has joined your party)"}
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }else{
            const newMessage={message:getTheCurrentDate()+hunter.name+": Get out of here, I'm not interested (Your party is full or you have insufficient credits)"}
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }
        
    }
    const onFireClick=(member)=>{
        const idToDelete=member._id
        removeFromParty(idToDelete)
        addToAvailable(member)
        const newMessage={message:getTheCurrentDate()+member.name+": Let me know if you need my services again ("+member.name+"has been removed from party)"}
        const newMessages=[...messages[0].messages]
        newMessages.push(newMessage)
        const newLogMessage={
            _id:messages[0]._id,
            messages:newMessages
        }
        updateLog(newLogMessage)
    }

    const onHealClick=()=>{
        const player=partyMembers.find(playerData=>playerData.is_player)
        if(player.health<player.max_health && player.credits>=50){
            
            const newCredits=player.credits-50
            const updatedPlayer={
                _id:player._id,
                name:player.name,
                species:player.species,
                health:player.max_health,
                max_health:player.max_health,
                action_points:player.action_points,
                max_ap:player.max_ap,
                credits:newCredits,
                level:player.level,
                xp_to_level_up:player.xp_to_level_up,
                cur_xp:player.cur_xp,
                is_player:player.is_player,
                stim_count:player.stim_count,
                weapon:player.weapon,
                armour:player.armour
            }
            updatePlayer(updatedPlayer)
            const newMessage={message:getTheCurrentDate()+"Bartender: Have a drink and heal your wounds in one of our bacta tanks (You have been healed to full HP)"}
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }else{
            const newMessage={message:getTheCurrentDate()+"Bartender: I have other customers, stop wasting my time (You are at full health or have insufficient credits)"}
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }
        
    }
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

    const filterPlayer=partyMembers.find(player=>player.is_player)

    const bountyHunterData=bountyHunters.map((hunter)=>{
        return(
            <div id="bh">
                <p className='name'>{hunter.name}</p>
                <p>Health: {hunter.health}/{hunter.max_health}</p>
                <p>Level: {hunter.level}</p>
                <p>Cost: {hunter.credits} credits</p>
                <button onClick={()=>onHireClick(hunter)}>Hire</button>
            </div>
        )
    })
    const memberData=partyMembers.map((member)=>{
        return(
            <div id="members">
                {member.is_player?<p className='name'>{member.name} (You)</p>:<p className='name'>{member.name}</p>}
                <p>Health: {member.health}/{member.max_health}</p>
                <p>Action Points: {member.action_points}/{member.max_ap}</p>
                <p>XP: {member.cur_xp}/{member.xp_to_level_up}</p>
                <p>Level: {member.level}</p>
                {member.is_player?null:<button onClick={()=>onFireClick(member)}>Dismiss</button>}
            </div>
        )
    })
    const logMessages=messages.map((message)=>{
        return message.messages.map((logMessage)=>{
            return (
                <p>{logMessage.message}</p>
            )
        })
    })

    return(
        <section id="cantina-section">
            {PlaySong()}
            <div id="main-menu-button">
                <a href='/main-menu'>Main Menu</a>
            </div>
            <div id="bh-party-div">
                <div id="bounty-hunters">
                    {bountyHunterData}
                </div>
                <div id="party">
                    {memberData}
                </div>
            </div>
            <div id="heal-and-credits">
                <button id="heal" onClick={onHealClick}>Heal</button>
                {filterPlayer?<p id="credits">Credits: {filterPlayer.credits}</p>:null}
                
            </div>
            <div id="log">
                {logMessages}
            </div>
        </section>
    )
}
export default Cantina