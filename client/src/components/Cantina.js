import './css/cantina.css'

const Cantina=({bountyHunters,partyMembers,messages,removeFromAvailable,addToParty,updatePlayer,updateLog})=>{
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
                action_points:player[0].action_points,
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
            const newMessage={message:"You have hired "+hunter.name}
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }else{
            const newMessage={message:"Could not hire "+hunter.name}
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
        
    }


    const filterPlayer=partyMembers.find(player=>player.is_player)

    const bountyHunterData=bountyHunters.map((hunter)=>{
        return(
            <div id="bh">
                <p>{hunter.name} Cost:{hunter.credits}</p>
                <button onClick={()=>onHireClick(hunter)}>Hire</button>
            </div>
        )
    })
    const memberData=partyMembers.map((member)=>{
        return(
            <div id="members">
                <p>{member.name}</p>
                {member.is_player?null:<button onClick={()=>onFireClick(member)}>Dismiss</button>}
            </div>
        )
    })
    const logMessages=messages.map((message)=>{
        return message.messages.map((logMessage)=>{
            return (
                <p> Message:{logMessage.message}</p>
            )
        })
    })

    return(
        <section>
            <div>
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
                <button>Heal</button>
                {filterPlayer?<p>Credits: {filterPlayer.credits}</p>:null}
            </div>
            <div id="log">
                {logMessages}
            </div>
        </section>
    )
}
export default Cantina