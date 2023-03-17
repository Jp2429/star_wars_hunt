import { updateOneStoreItem } from '../services/StoreService'
import './css/store.css'

const Store=({storeInventory,inventory,messages,partyMembers, updateStore, updateInventory})=>{


    const onWeaponBuyClick=(weapon)=>{
        console.log(inventory)
        if(player.credits>=weapon.cost){
            const getShopWeapons=storeInventory.map((weaponData)=>{
                return weaponData.weapons
           })
           let newWeapons = getShopWeapons[0].filter(weaponData=>weaponData.name!==weapon.name)

           const newStore={
                _id:storeInventory[0]._id,
                weapons:newWeapons,
                armours:storeInventory[0].armours
           }

           updateStore(newStore)

           const newPlayerWeapons=inventory.map((weaponData)=>{
                return weaponData.weapons
           })
           const weaponObject={
            weapon:weapon
           }
           console.log(inventory[0].armours)
           newPlayerWeapons.push("sdfvdfs",weaponObject)
           console.log(newPlayerWeapons)
           const newInventory={
                _id:inventory[0]._id,
                weapons:newPlayerWeapons,
                armours:inventory[0].armours
           }
           updateInventory(newInventory)
        }
    }

    const player=partyMembers.find(player=>player.is_player)

    const storeWeaponData=storeInventory.map((items)=>{
        return items.weapons.map((weapon)=>{
            return(
                <div className="weapons">
                    <p>Weapon: {weapon.name}</p>
                    <p>Cost: {weapon.cost} credits</p>
                    <button onClick={()=>onWeaponBuyClick(weapon)}>Buy</button>
                    <hr></hr>
                </div>
            )
        })
        
    })
    const storeArmourData=storeInventory.map((items)=>{
        return items.armours.map((armour)=>{
            return(
                <div className="armours">
                    <p>Armour: {armour.name}</p>
                    <p>Cost: {armour.cost} credits</p>
                    <button>Buy</button>
                    <hr></hr>
                </div>
            )
        })
        
    })
    const playerWeaponData=inventory.map((items)=>{
        return items.weapons.map((weapon)=>{
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
        
    })
    
    const playerArmourData=inventory.map((items)=>{
        return items.armours.map((armour)=>{
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