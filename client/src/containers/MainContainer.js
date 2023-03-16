import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import NewCharacter from '../components/NewCharacter'
import Start from '../components/Start'
import Missions from '../components/Missions'
import Inventory from '../components/Inventory'
import Store from '../components/Store'
import Cantina from '../components/Cantina'
import {getEnemies, getOneEnemy, updateOneEnemy, resetEnemies} from "../services/EnemyService"
import {getMembers, getOneMember, updateOneMember, deleteMember ,resetParty,deleteParty, postMember} from "../services/PartyService"
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

    const createPlayer = (player) =>{
        const newWeapon=player.weapon
        const newArmour=player.armour
        const newItem=
            {
                weapons:[
                    {
                        weapon:newWeapon
                    }
                ],
                armours:[
                    {
                        armour:newArmour
                    }
                ]
            }
        const newMessage="You have created a character: "+player.name
        const newLog=
        {
            messages:[
                {
                    message:newMessage
                }        
            ]
        }

        resetEnemies()
        resetHunters()
        resetInventory()
        .then(
            postItem(newItem)
            .then(itemData=>setPlayerItems([...listOfPlayerItems,newItem]))
        )
        resetLog()
        .then(
            postMessage(newLog)
            .then(logData=>setLogMessages([...listOfLogMessages,newLog]))
        )
        resetParty()
        .then(
            postMember(player)
            .then(playerData => setPartyMembers([...listOfPartyMembers, playerData]))
        )
        resetStore()
        
        
        

    }

    const removeFromAvailable=(id)=>{
        deleteHunter(id)
        .then(()=>{
            setBountyHunters(listOfBountyHunters.filter(hunter => hunter._id !== id))
          })
    }
    const removeFromParty=(id)=>{
        deleteMember(id)
        .then(()=>{
            setPartyMembers(listOfPartyMembers.filter(member=>member._id !== id))
        })
    }
    const addToParty=(member)=>{
        postMember(member)
        .then(memberData=>setPartyMembers(listOfPartyMembers => [...listOfPartyMembers,memberData]))
    }
    const addToAvailable=(hunter)=>{
        postHunter(hunter)
        .then(hunterData=>setBountyHunters(listOfBountyHunters=>[...listOfBountyHunters,hunterData]))
    }
    const updatePlayer=(player)=>{
        updateOneMember(player)
        const updatedPlayerIndex=listOfPartyMembers.findIndex(playerData=>playerData._id===player._id)
        console.log(updatedPlayerIndex)
        const updatedListOfMembers=[...listOfPartyMembers]
        updatedListOfMembers[updatedPlayerIndex]=player
        setPartyMembers(updatedListOfMembers)
    }
    const updateLog=(newLog)=>{
        updateOneMessage(newLog)
        const updatedLogIndex=listOfLogMessages.findIndex(log=>log._id===newLog._id)
        const updatedListOfLogs=[...listOfLogMessages]
        updatedListOfLogs[updatedLogIndex]=newLog
        setLogMessages(updatedListOfLogs)
    }

    const updateStartingEquipment=(player)=>{
        const newWeapon=player.weapon
        const newArmour=player.armour

        const newItem=[
            {
                _id:listOfPlayerItems[0]._id,
                weapons:[
                    {
                        weapon:newWeapon
                    }
                ],
                armours:[
                    {
                        armour:newArmour
                    }
                ]
            }
        ]
        updateOneItem(newItem)
        const updatedItemIndex=listOfPlayerItems.findIndex(playerItem=>playerItem._id===newItem._id)
        const updatedListOfItems=[...listOfPlayerItems]
        updatedListOfItems[updatedItemIndex]=newItem
        setPlayerItems(updatedListOfItems)
    }

    
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Start  listOfPartyMembers = {listOfPartyMembers} />}/>
                <Route path='/new-character' element={<NewCharacter createPlayer = {createPlayer} listOfPartyMembers = {listOfPartyMembers} updateStartingEquipment={updateStartingEquipment}/>}/>
                <Route path='/main-menu' element={<MainMenu/>}/>
                <Route path='/missions' element={<Missions/>}/>
                <Route path='/cantina' element={<Cantina bountyHunters={listOfBountyHunters} partyMembers={listOfPartyMembers} messages={listOfLogMessages} removeFromAvailable={removeFromAvailable} addToParty={addToParty} updatePlayer={updatePlayer} updateLog={updateLog} removeFromParty={removeFromParty} addToAvailable={addToAvailable}/>}/>
                <Route path='/store' element={<Store storeInventory={listOfStoreInventory} inventory={listOfPlayerItems} messages={listOfLogMessages} partyMembers={listOfPartyMembers}/>}/>
                <Route path='/inventory' element={<Inventory/>}/>
            </Routes>
        </Router>
    )

}

export default MainContainer

