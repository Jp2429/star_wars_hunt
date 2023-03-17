import { updateOneStoreItem } from '../services/StoreService'
import './css/store.css'

const Store=({messages,partyMembers, armourInventory, weaponInventory, storeWeapons, storeArmours,removeFromStoreWeapons,addToWeaponInventory, updatePlayer, updateLog,removeFromStoreArmour,addToArmourInventory})=>{


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
            const newMessage={message:"You have bought a: "+item.wepon.name }
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }else{
            const newMessage={message:"You could not buy that item " }
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }

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
            const newMessage={message:"You have bought a: "+item.wepon.name }
            const newMessages=[...messages[0].messages]
            newMessages.push(newMessage)
            const newLogMessage={
                _id:messages[0]._id,
                messages:newMessages
            }
            updateLog(newLogMessage)
        }
    }

    const player=partyMembers.find(player=>player.is_player)

    const storeWeaponData=storeWeapons.map((weapon)=>{
            return(
                <div className="weapons">
                    <p>Weapon: {weapon.weapon.name}</p>
                    <p>Cost: {weapon.weapon.cost} credits</p>
                    <button onClick={()=>onWeaponBuyClick(weapon)}>Buy</button>
                    <hr></hr>
                </div>
            )
        })
    
    const storeArmourData=storeArmours.map((armour)=>{
            return(
                <div className="armours">
                    <p>Armour: {armour.armour.name}</p>
                    <p>Cost: {armour.armour.cost} credits</p>
                    <button onClick={()=>onArmourClick(armour)}>Buy</button>
                    <hr></hr>
                </div>
            )
        })

    const playerWeaponData=weaponInventory.map((weapon)=>{
            const isEquippedWeapon=()=>{
                if(player.weapon==weapon.weapon){
                    return true
                }
                return false
            }
            const isEquipped=isEquippedWeapon()
            return(
                <div className="weapons">
                    <p>{weapon.weapon.name}</p>
                    {isEquipped?<button>Sell</button>:null}
                </div>
            )
        })
    
    const playerArmourData=armourInventory.map((armour)=>{
            const isEquippedArmour=()=>{
                if(player.armour==armour.armour){
                    return true
                }
                return false
            }
            const isEquipped=isEquippedArmour()
            return(
                <div className="armours">
                    <p>{armour.armour.name}</p>
                    {isEquipped?<button>Sell</button>:null}
                </div>
            )
        })

    const filterPlayer=partyMembers.find(player=>player.is_player)

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
            <div id="inventories">
                <div id="store-inventory">
                    {storeWeaponData}
                    {storeArmourData}
                </div>
                <div id="player-inventory">
                    {playerWeaponData}
                    {playerArmourData}
                </div>
            </div>
            <div id="buy-stims">
                <button>Buy Stim Pack</button>
                {filterPlayer?<p>Credits: {filterPlayer.credits}</p>:null}
            </div>
            <div id="log">
                {logMessages}
            </div>
        </section>
    )
}
export default Store