import './css/start.css'

const Start = ({listOfPartyMembers}) =>{
    const playerData = listOfPartyMembers.filter((member => member.is_player = true))
    
    
    return(
        <div className="start-menu">
            <a href='/new-character'> New Character </a>
            {listOfPartyMembers.length !== 0?<a href='/main-menu'> Load Character</a> : <p>You do not currently have a save</p>}
        </div>
    )
    }
export default Start