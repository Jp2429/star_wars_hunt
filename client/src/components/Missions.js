import { useState } from "react"
import "./css/missions.css"

const Missions=()=>{
    const[selectedTatooineMission,setSelectedTatooineMission]=useState("")

    const onLvl1Change=(evt)=>{
        let curSelectedMission = evt.target.value
        setSelectedTatooineMission(curSelectedMission)
    }
    const onClick=()=>{
        setSelectedTatooineMission("")
    }

    return(
        <section id="missions-section">
            <div id='tatooine'>
                <p>Tatooine - Level 1</p>
                <form>
                    <select onChange={onLvl1Change} name='tatooine-select' value={selectedTatooineMission}>
                        <option value = "" selected disabled>Select a mission</option>
                        <option value="/tatooine-bounty-hunt">Hunt a Bounty</option>
                    </select>
                    {selectedTatooineMission ?<a onClick={onClick} href={selectedTatooineMission}>Launch Mission</a>:<p>Please select a mission</p>}
                </form>
            </div>
            <div>

            </div>


        </section>
    )
}
export default Missions