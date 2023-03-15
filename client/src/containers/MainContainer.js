import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import NewCharacter from '../components/NewCharacter'
import Start from '../components/Start'
import {getEnemies, getOneEnemy, updateOneEnemy, resetEnemies} from "../services/EnemyService"
import {getMembers, getOneMember, updateOneMember, deleteMember ,resetParty, postMember} from "../services/PartyService"
import {getMessages, getOneMessage, updateOneMessage, resetLog, postMessage, deleteMessage } from "../services/LogService"
import {getStoreItems, getOneStoreItem, updateOneStoreItem, resetStore, postStoreItem, deleteStoreItem} from "../services/StoreService"
import {getItems, getOneItem, updateOneItem, resetInventory, postItem, deleteItem} from "../services/InventoryService"
import {getHunters, getOneHunter, updateOneHunter, resetHunters, postHunter, deleteHunter} from "../services/BountyHunterService"


const MainContainer = () =>{
    const [listOfEnemies, setEnemies] = useState([])
    const [listOfStoreInventory, setStoreInventory] = useState([])
    const [listOfBountyHunters, setBountyHunters] = useState([])
    const [listOfLogMessages, setLogMessages] = useState([])
    const [listOfPlayerItems, setPlayerItems] = useState([])
    const [listOfPartyMembers, setPartyMembers] = useState([])

    useEffect( () => {
        getEnemies()
        .then((allEnemies) => { 
            setEnemies(allEnemies)
        })
        getHunters()
        .then((allHunters) => {
            setBountyHunters(allHunters)
        })
        getStoreItems()
        .then((allStoreItems) => {
            setStoreInventory(allStoreItems)
        })
        getMessages()
        .then((allLogMessages) => {
            setLogMessages(allLogMessages)
        })
        getItems()
        .then((allItems) => {
            setPlayerItems(allItems)
        })
        getMembers()
        .then((allMembers) => {
            setPartyMembers(allMembers)
        })

    },[])
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Start  listOfPartyMembers = {listOfPartyMembers}/>}/>
                <Route path='/new-character' element={<NewCharacter/>}/>
                <Route path='/main-menu' element={<MainMenu/>}/>
            </Routes>
        </Router>
    )

}

export default MainContainer

