import { updateOneStoreItem } from '../services/StoreService'
import './css/store.css'

const Store=({storeInventory,inventory,messages,partyMembers})=>{


    const onWeaponBuyClick=(weapon)=>{
        if(player.credits>=weapon.cost){
            const getShopWeapons=storeInventory.map((weaponData)=>{
                return weaponData.weapons
           })
           console.log("whole shop",getShopWeapons)
           let newWeapons = getShopWeapons[0].filter(weaponData=>weaponData.name!==weapon.name)
        //    newWeapons=newWeapons[0].weapons
           console.log("This should be 8",newWeapons)
           const newStore={
                _id:storeInventory[0]._id,
                weapons:newWeapons,
                armours:storeInventory[0].armours
           }
           console.log("Store: ",newStore)
        //    updateStore(newStore)

           const newPlayerWeapons=inventory.map((weaponData)=>{
                return weaponData.weapons
           })
           newPlayerWeapons.push(weapon)
           const newInventory={
                _id:inventory[0]._id,
                weapons:newPlayerWeapons,
                armours:inventory[0].armours
           }
           console.log("Inventory: ",newInventory)
        }
    }

    const player=partyMembers.find(player=>player.is_player)

    const storeWeaponData=storeInventory.map((items)=>{
        return items.weapons.map((weapon)=>{
            return(
                <div className="weapons">
                    <p>{weapon.name}</p>
                    <button onClick={()=>onWeaponBuyClick(weapon)}>Buy</button>
                </div>
            )
        })
        
    })
    const storeArmourData=storeInventory.map((items)=>{
        return items.armours.map((armour)=>{
            return(
                <div className="armours">
                    <p>{armour.name}</p>
                    <button>Buy</button>
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
                    {/* {storeArmourData} */}
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