import { useState } from "react"


const NewCharacter = ({createPlayer, listOfPartyMembers,updateStartingEquipment}) =>{

    const [formData, setFormData] = useState({
        name:"",
        species:"",
        health:250,
        max_health:250,
        action_points:20,
        credits:3500,
        level:1,
        xp_to_level_up:100,
        cur_xp:0,
        is_player:true,
        stim_count:0,
        weapon:{
            name:"",
            damage:55,
            chance_to_hit:75,
            cost:550,
            ability:"Snipe"
        },
        armour:{
            name:"Fatigues",
            cost:250,
            defense:0
    }})

    const [selectedSpecies, setSelectedSpecies] = useState("")

    const [selectedWeapon, setSelectedWeapon] = useState("")

    const onChange = (evt) =>{
        const newFormData = Object.assign({}, formData)
        newFormData[evt.target.name] = evt.target.value
        setFormData(newFormData)
    }

    const onSpeciesChange = (evt) => {
        let currentSpecies = evt.target.value
        const newFormData = Object.assign({}, formData)
        newFormData[evt.target.name] = currentSpecies
        setSelectedSpecies (currentSpecies)
        setFormData(newFormData)
    }

    const onWeaponChange = (evt) => {
        let currentWeapon = evt.target.value
        const newFormData = Object.assign({}, formData)
        if (currentWeapon === "sniper"){
            const newWeapon = {
                name:"IQA-11 Blaster Rifle",
                damage:60,
                chance_to_hit:75,
                cost:550,
                ability:"Snipe"
            }

            newFormData[evt.target.name] = newWeapon
            setSelectedWeapon (currentWeapon)
            setFormData (newFormData)
        }
        if (currentWeapon === "pistol"){
            const newWeapon = {
                name:"DH-17 Blaster Pistol",
                damage:30,
                chance_to_hit:60,
                cost:550,
                ability:"Flurry"
            }
            newFormData[evt.target.name] = newWeapon
            setSelectedWeapon (currentWeapon)
            setFormData (newFormData)
        }
        if (currentWeapon === "rifle"){
            const newWeapon = {
                name:"A280 Blaster Rifle",
                damage:45,
                chance_to_hit:60,
                cost:550,
                ability:"Burst"
            }
            newFormData[evt.target.name] = newWeapon
            setSelectedWeapon (currentWeapon)
            setFormData (newFormData)
        }}

        const onSubmit = (evt) => {
            evt.preventDefault()
            if(formData.name !== "" && formData.weapon.name !== "" && formData.species !== ""){
                createPlayer(formData)
            } else {
                alert("Please fill in all fields")
            }
            setFormData({        
                name:"",
                species:"",
                health:250,
                max_health:250,
                action_points:20,
                credits:3500,
                level:1,
                xp_to_level_up:100,
                cur_xp:0,
                is_player:true,
                stim_count:0,
                weapon:{
                    name:"",
                    damage:55,
                    chance_to_hit:75,
                    cost:550,
                    ability:"Snipe"
                },
                armour:{
                    name:"Fatigues",
                    cost:250,
                    defense:0
                }
        })
        setSelectedSpecies ("")
        setSelectedWeapon ("")
        
        setTimeout(delayMove,2000)

        }
        const delayMove=()=>{
            window.location.href = "/main-menu"
        }


    return(
        <form className="form" onSubmit={onSubmit}>
            <input onChange={onChange} type = "text" id = "name" name = "name" value = {formData.name}/>
            <select onChange={onSpeciesChange} name = "species" value = {selectedSpecies}>
                <option value = "" selected disabled>Select Species</option>
                <option value = "Human">Human</option>
                <option value = "Rodian">Rodian</option>
                <option value = "Twi'lek">Twi'lek</option>
                <option value = "Duros">Duros</option>
                <option value = "Trandoshan">Trandoshan</option>
                <option value = "Wookiee">Wookiee</option>
            </select>
            <select onChange={onWeaponChange} name = "weapon" value = {selectedWeapon}>
            <option value = "" selected disabled>Select Starting Weapon</option>
                <option value = "pistol">Blaster Pistol</option>
                <option value = "rifle">Blaster Rifle</option>
                <option value = "sniper">Sniper Rifle</option>
            </select>
            <input type = "submit" value = "Create Character"/>
        </form>
    )
}
export default NewCharacter