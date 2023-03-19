import './css/mainmenu.css'

const MainMenu = () =>{
    return(
        <section id="main-menu">
            <div id="exit-button">
                <a href="/">Exit</a>
            </div>
            <div id="main-menu-div">
                <ul>
                    <li><a href="/missions">Missions</a></li>
                    <li><a href="/cantina">Cantina</a></li>
                    <li><a href="/store">Store</a></li>
                    <li><a href="/inventory">Inventory</a></li>
                </ul>
            </div>
        </section>
    )
}
export default MainMenu