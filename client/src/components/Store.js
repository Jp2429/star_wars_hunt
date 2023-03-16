import './css/store.css'

const Store=({storeInventory,inventory,messages,partyMembers})=>{

    const storeWeaponData=storeInventory.map((items)=>{
        return items.weapons.map((weapon)=>{
            return(
                <div className="weapons">
                    <p>{weapon.name}</p>
                </div>
            )
        })
        
    })
    const storeArmourData=storeInventory.map((items)=>{
        return items.armours.map((armour)=>{
            return(
                <div className="armours">
                    <p>{armour.name}</p>
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
                    
                </div>
            </div>
            <div id="buy-stims">
                
                {filterPlayer?<p>Credits: {filterPlayer.credits}</p>:null}
            </div>
            <div id="log">
                {logMessages}
            </div>
        </section>
    )
}
export default Store