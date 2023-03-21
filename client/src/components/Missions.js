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

            <div id="main-menu-button-mission">
                <a href='/main-menu'>Main Menu</a>
           </div>
           <div id="missions-select">
            <div id='tatooine'>
                <p>Tatooine - Level 1</p>
                <form>
                    <select onChange={onLvl1Change} name='tatooine-select' value={selectedTatooineMission}>
                        <option value = "" selected disabled>Select a mission</option>
                        <option value="/tatooine-bounty-hunt">Hunt a Bounty</option>
                    </select>
                    {selectedTatooineMission ?<a id="launch" onClick={onClick} href={selectedTatooineMission}>Launch Mission</a>:<p id="select">Please select a mission</p>}
                </form>
            </div>
            <div>

            </div>

            <div id='coruscant'>
                <p>Coruscant - Level 5</p>
                <p>Coming soon to a galaxy far, far away!</p>
                <form>
                   
                </form>
            </div>
            <div id='naboo'>
            <p>Naboo - Level 10</p>
                <p>Coming soon to a galaxy far, far away!</p>
                <form>
                   
                </form>
            </div>
            <div id="kashyyyk">
            <p>Kashyyyk - Level 15</p>
                <p>Coming soon to a galaxy far, far away!</p>
                <form>
                   
                </form>
            </div>
            </div>


        </section>
    )
}
export default Missions