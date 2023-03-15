const Start = ({listOfPartyMembers}) =>{
    console.log("This is the party",listOfPartyMembers)
    const playerData = listOfPartyMembers.map((member)=>{
        return(
            {member}
        )
    })
    
    
    return(
        <div>
            <a href='/new-character'> New Character </a>
            {playerData.name != null?<a href='/main-menu'> Load Character</a> : <p>You do not currently have a save</p>}
        </div>
    )
    }
export default Start