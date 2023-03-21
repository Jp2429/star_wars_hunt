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
                        <option value="/tatooine-bounty-hunt">Bounty Hunt</option>
                    </select>
                    {selectedTatooineMission ?<a id="launch" onClick={onClick} href={selectedTatooineMission}>Launch Mission</a>:<p id="select">Please select a mission</p>}
                </form>
                <div id="planet-description">
                    Tatooine is harsh desert world orbiting twin suns in the galaxy's Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Many legends once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.
                </div>
            </div>
            <div>

            </div>

            <div id='coruscant'>
                <p>Coruscant - Level 5</p>
                <p>Coming soon to a galaxy far, far away!</p>
                <form>
                </form>
                <div id="planet-description">
                Coruscant is the vibrant heart and capital of the galaxy during the age of the Empire, featuring a diverse mix of cultures and citizens spread over hundreds of levels. Once the home of the main Jedi Temple -- the central hub of Jedi training and learning for over a thousand generations and the repository of the Jedi Archives -- these traditions ended when the planet bore witness to Order 66.
                </div>

            </div>
            <div id='naboo'>
            <p>Naboo - Level 10</p>
                <p>Coming soon to a galaxy far, far away!</p>
                <form>
                </form>
                <div id="planet-description">
                An idyllic world close to the border of the Outer Rim Territories, Naboo is inhabited by peaceful humans known as the Naboo, and an indigenous species of intelligent amphibians called the Gungans. Naboo's surface consists of swampy lakes, rolling plains and green hills. Its population centers are beautiful -- Naboo's river cities are filled with classical architecture and greenery.
                </div>
            </div>
            <div id="kashyyyk">
            <p>Kashyyyk - Level 15</p>
                <p>Coming soon to a galaxy far, far away!</p>
                <form>
                </form>
                <div id="planet-description">
                Kashyyyk is the Wookiee homeworld, covered in dense forest. While Wookiees build their homes in the planet's trees, they are not a primitive species, and Kashyyyk architecture incorporates sophisticated technology. One of the last battles of the Clone Wars was fought here. The landscape is extremely dangerous to even the most hardened of adventurers.
                </div>
            </div>
            </div>


        </section>
    )
}
export default Missions