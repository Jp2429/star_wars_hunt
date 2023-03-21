import "./css/inventory.css"

const Inventory = ({ partyMembers, armourInventory, weaponInventory, updatePlayer, messages, updateLog }) => {

    const onArmourEquipClick = (item) => {
        const newArmour = item.armour

        const updatedPlayer = {
            _id: player._id,
            name: player.name,
            species: player.species,
            health: player.health,
            max_health: player.max_health,
            action_points: player.action_points,
            max_ap:player.max_ap,
            credits: player.credits,
            level: player.level,
            xp_to_level_up: player.xp_to_level_up,
            cur_xp: player.cur_xp,
            is_player: player.is_player,
            stim_count: player.stim_count,
            weapon: player.weapon,
            armour: newArmour
        }
        updatePlayer(updatedPlayer)

        const newMessage = { message:getTheCurrentDate()+newArmour.name+" has been equipped" }
        const newMessages = [...messages[0].messages]
        newMessages.push(newMessage)
        const newLogMessage = {
            _id: messages[0]._id,
            messages: newMessages
        }
        updateLog(newLogMessage)
    }
    const onWeaponEquipClick = (item) => {
        const newWeapon = item.weapon

        const updatedPlayer = {
            _id: player._id,
            name: player.name,
            species: player.species,
            health: player.health,
            max_health: player.max_health,
            action_points: player.action_points,
            max_ap:player.max_ap,
            credits: player.credits,
            level: player.level,
            xp_to_level_up: player.xp_to_level_up,
            cur_xp: player.cur_xp,
            is_player: player.is_player,
            stim_count: player.stim_count,
            weapon: newWeapon,
            armour: player.armour
        }
        updatePlayer(updatedPlayer)

        const newMessage = { message: getTheCurrentDate()+newWeapon.name+" has been equipped"}
        const newMessages = [...messages[0].messages]
        newMessages.push(newMessage)
        const newLogMessage = {
            _id: messages[0]._id,
            messages: newMessages
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

    const player = partyMembers.find(player => player.is_player)

    const playerWeaponData = weaponInventory.map((weapon) => {

        const filterByPlayer = partyMembers.find(player => player.is_player)

        const isEquippedWeapon = () => {
            if (filterByPlayer.weapon.name == weapon.weapon.name) {
                return true
            }
            return false
        }
        const isEquipped = isEquippedWeapon()
        return (
            <div className="weapons">
                <p className="name">{weapon.weapon.name}</p>
                <p>Damage: {weapon.weapon.damage}</p>
                <p>Ability: {weapon.weapon.ability}</p>
                {isEquipped ? <p>Equipped</p> : <button onClick={() => onWeaponEquipClick(weapon)}>Equip</button>}
            </div>
        )
    })

    const playerArmourData = armourInventory.map((armour) => {
        const filterByPlayer = partyMembers.find(player => player.is_player)
        const isEquippedArmour = () => {
            if (filterByPlayer.armour.name == armour.armour.name) {
                return true
            }
            return false
        }
        const isEquipped = isEquippedArmour()
        return (
            <div className="armours">
                <p className="name">{armour.armour.name}</p>
                <p>Defense: {armour.armour.defense}</p>
                
                {isEquipped ? <p>Equipped</p> : <button onClick={() => onArmourEquipClick(armour)}>Equip</button>}
            </div>
        )
    })
    const logMessages = messages.map((message) => {
        return message.messages.map((logMessage) => {
            return (
                <p>{logMessage.message}</p>
            )
        })
    })

    return (
        <section id="inventory-section">
            <div id="main-menu-button">
                <a href='/main-menu'>Main Menu</a>
            </div>
            <div id="inventories">
                <div id="armour-inventory">
                    {player ? playerArmourData : null}
                </div>
                <div id="weapon-inventory">
                    {player ? playerWeaponData : null}
                </div>
            </div>
            <div id="stims-and-credits">
                {player ? <p id="stims" >Stim Packs: {player.stim_count}</p> : null}
                {player ? <p id="credits" >Credits: {player.credits}</p> : null}
            </div>
            <div id="log">
                {logMessages}
            </div>
        </section>
    )
}
export default Inventory