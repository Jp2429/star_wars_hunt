import { updateOneStoreItem } from '../services/StoreService'
import './css/store.css'

const Store=({messages,partyMembers, armourInventory, weaponInventory, storeWeapons, storeArmours,removeFromStoreWeapons,addToWeaponInventory, updatePlayer, updateLog,removeFromStoreArmour,addToArmourInventory, removeFromWeaponInventory, addToStoreWeapons, removeFromArmourInventory, addToStoreArmours})=>{


    const onWeaponBuyClick=(item)=>{
        if(player.credits>=item.weapon.cost){
            const newCredits=player.credits-item.weapon.cost
            removeFromStoreWeapons(item._id)
            addToWeaponInventory(item)
            
            const updatedPlayer={
                _id:player._id,
                name:player.name,
                species:player.species,
                health:player.health,
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
            const newMessage={message:getTheCurrentDate()+"Black Market Vendor: You won't be disapointed, I use that model myself ("+item.weapon.name+" has been added to your inventory)"}
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }else{
            const newMessage={message:getTheCurrentDate()+"Black Market Vendor: This isn't a charity. No credits, no sale ("+item.weapon.name+" could not be purchased)" }
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }

    }
    const onStoreWeaponClick=(item)=>{
        const newCredits =player.credits+item.weapon.cost
        removeFromWeaponInventory(item._id)
        addToStoreWeapons(item)

        const updatedPlayer={
            _id:player._id,
            name:player.name,
            species:player.species,
            health:player.health,
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
        const newMessage={message:getTheCurrentDate()+"Black Market Vendor: I'll take that off your hands. Might make a small profit too ("+item.weapon.name+" has been removed from your inventory)"}
        const newMessages=[...messages[0].messages]
        newMessages.push(newMessage)
        const newLogMessage={
            _id:messages[0]._id,
            messages:newMessages
        }
        updateLog(newLogMessage)
    }
    const onStoreArmourClick=(item)=>{
        const newCredits=player.credits+item.armour.cost
        removeFromArmourInventory(item._id)
        addToStoreArmours(item)

        const updatedPlayer={
            _id:player._id,
            name:player.name,
            species:player.species,
            health:player.health,
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

        const newMessage={message:getTheCurrentDate()+"Black Market Vendor: I'll take that off your hands. Might make a small profit too ("+item.armour.name+" has been removed from your inventory)"}
        const newMessages=[...messages[0].messages]
        newMessages.push(newMessage)
        const newLogMessage={
            _id:messages[0]._id,
            messages:newMessages
        }
        updateLog(newLogMessage)
    }

    const onArmourClick=(item)=>{
        if(player.credits>= item.armour.cost){
            const newCredits=player.credits-item.armour.cost
            removeFromStoreArmour(item._id)
            addToArmourInventory(item)

            const updatedPlayer={
                _id:player._id,
                name:player.name,
                species:player.species,
                health:player.health,
                max_health:player.max_health,
                action_points:player.action_points,
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
            const newMessage={message:"Black Market Vendor: You won't be disapointed, I use that model myself ("+item.armour.name+" has been added to your inventory)"}
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }else{
            const newMessage={message:"Black Market Vendor: This isn't a charity. No credits, no sale ("+item.armour.name+" could not be purchased)" }
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }
    }
    const onStimBuyClick=()=>{
        const newCredits=player.credits-50
        const newStimCount=player.stim_count+1

        const updatedPlayer={
            _id:player._id,
            name:player.name,
            species:player.species,
            health:player.health,
            max_health:player.max_health,
            action_points:player.action_points,
            max_ap:player.max_ap,
            credits:newCredits,
            level:player.level,
            xp_to_level_up:player.xp_to_level_up,
            cur_xp:player.cur_xp,
            is_player:player.is_player,
            stim_count:newStimCount,
            weapon:player.weapon,
            armour:player.armour
        }
        updatePlayer(updatedPlayer)

        const newMessage={message:getTheCurrentDate()+"A stimpack has been added to your healing pouch"}
        const newMessages=[...messages[0].messages]
        newMessages.push(newMessage)
        const newLogMessage={
            _id:messages[0]._id,
            messages:newMessages
        }
        updateLog(newLogMessage)
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

    const player=partyMembers.find(player=>player.is_player)

    const storeWeaponData=storeWeapons.map((weapon)=>{
            return(
                <div className="weapons">
                    <p className="name">Weapon: {weapon.weapon.name}</p>
                    <p>Damage: {weapon.weapon.damage}</p>
                    <p>Ability: {weapon.weapon.ability}</p>
                    <p>Cost: {weapon.weapon.cost} credits</p>
                    <button onClick={()=>onWeaponBuyClick(weapon)}>Buy</button>
                    
                </div>
            )
        })
    
    const storeArmourData=storeArmours.map((armour)=>{
            return(
                <div className="armours">
                    <p className="name">Armour: {armour.armour.name}</p>
                    <p>Defense: {armour.armour.defense}</p>
                    <p>Cost: {armour.armour.cost} credits</p>
                    <button onClick={()=>onArmourClick(armour)}>Buy</button>
                    
                </div>
            )
        })

    const playerWeaponData=weaponInventory.map((weapon)=>{
        const filterByPlayer=partyMembers.find(player=>player.is_player)
            const isEquippedWeapon=()=>{
                if(filterByPlayer.weapon.name==weapon.weapon.name){
                    return true
                }
                return false
            }
            const isEquipped=isEquippedWeapon()
            return(
                <div className="weapons">
                    <p className="name">{weapon.weapon.name}</p>
                    <p>Damage: {weapon.weapon.damage}</p>
                    <p>Ability: {weapon.weapon.ability}</p>
                    {isEquipped?<p>Equipped</p>:null}
                    {isEquipped?null:<button onClick={()=>onStoreWeaponClick(weapon)}>Sell</button>}
                </div>
            )
        })
    
    const playerArmourData=armourInventory.map((armour)=>{
        const filterByPlayer=partyMembers.find(player=>player.is_player)
            const isEquippedArmour=()=>{
                if(filterByPlayer.armour.name==armour.armour.name){
                    return true
                }
                return false
            }
            const isEquipped=isEquippedArmour()
            return(
                <div className="armours">
                    <p className="name">{armour.armour.name}</p>
                    <p>Defense: {armour.armour.defense}</p>
                    {isEquipped?<p>Equipped</p>:null}
                    {isEquipped?null:<button onClick={()=>onStoreArmourClick(armour)}>Sell</button>}
                </div>
            )
        })

    const filterPlayer=partyMembers.find(player=>player.is_player)

    const logMessages=messages.map((message)=>{
        return message.messages.map((logMessage)=>{
            return (
                <p>{logMessage.message}</p>
            )
        })
    })
    return(
        <section id="store-section">
            <div id="main-menu-button">
                <a href='/main-menu'>Main Menu</a>
            </div>
            <div id="inventories">
                <div id="store-inventory">
                    {storeWeaponData}
                    {storeArmourData}
                </div>
                <div id="player-inventory">
                    {player?playerWeaponData:null}
                    {player?playerArmourData:null}
                </div>
            </div>
            <div id="stims-and-credits">
                <button id="buy-stim"onClick={onStimBuyClick}>Buy Stim Pack</button>
                {filterPlayer?<p id="credits">Credits: {filterPlayer.credits}</p>:null}
            </div>
            <div id="log">
                {logMessages}
            </div>
        </section>
    )
}
export default Store