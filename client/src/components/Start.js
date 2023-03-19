import './css/start.css'

const Start = ({listOfPartyMembers}) =>{
    const playerData = listOfPartyMembers.filter((member => member.is_player = true))
    
    
    return(
        <section id="start-menu">
        <div id="start-menu-div">
            <a href='/new-character'> New Character </a>
        </div>
        <div>
            {listOfPartyMembers.length !== 0?<a href='/main-menu'> Load Character</a> : <p>No save found</p>}
        </div>
        </section>
    )
    }
export default Start