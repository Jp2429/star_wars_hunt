const MainMenu = () =>{
    return(
        <section id="main-menu">
            <div id="exit-button">
                <a href="/">Exit</a>
            </div>
            <div className="main-menu-div">
                <a href="/missions">Missions</a>
                <a href="/cantina">Cantina</a>
                <a href="/store">Store</a>
                <a href="/inventory">Inventory</a>
            </div>
        </section>
    )
}
export default MainMenu