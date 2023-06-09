import './css/mainmenu.css'



const MainMenu = ({messages}) =>{
    
    const logMessages=messages.map((message)=>{
        return message.messages.map((logMessage)=>{
            return (
                <p>{logMessage.message}</p>
            )
        })
    })
    
    return(
        <section id="main-menu">
            <div id="exit-button">
                <a href="/">Exit</a>
            </div>
            <div id="main-menu-div">
                    <a id ="missions" href="/missions">Missions</a>
                    <a id ="cantina" href="/cantina">Cantina</a>
                    <a id ="store" href="/store">Store</a>
                    <a id ="inventory" href="/inventory">Inventory</a>
            </div>
            <div id="log">
                {logMessages}
            </div>
        </section>
    )
}
export default MainMenu