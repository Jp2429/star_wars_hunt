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
import TatooineBountyHunt from '../components/battles/TatooineBountyHunt'
import CoruscantBountyHunt from '../components/battles/CoruscantBountyHunt'
import {getEnemies, getOneEnemy, updateOneEnemy, resetEnemies} from "../services/EnemyService"
import {getMembers, getOneMember, updateOneMember, deleteMember ,resetParty,deleteParty, postMember} from "../services/PartyService"
import {getMessages, getOneMessage, updateOneMessage, resetLog, postMessage, deleteMessage } from "../services/LogService"
import {getItems, getOneItem, updateOneItem, resetInventory, postItem, deleteItem} from "../services/InventoryService"
import {getHunters, getOneHunter, updateOneHunter, resetHunters, postHunter, deleteHunter} from "../services/BountyHunterService"
import { getArmours,getOneArmour,updateOneArmour,resetArmourInventory,deleteArmour,postArmour } from '../services/ArmourInventoryService'
import { getWeapons,getOneWeapon,updateOneWeapon,resetWeaponInventory,postWeapon,deleteWeapon } from '../services/WeaponInventoryService'
import { getStoreArmours,getOneStoreArmour,updateOneStoreArmour,resetStoreArmour,deleteStoreArmour,postStoreArmour } from '../services/StoreArmoursServer'
import { getStoreWeapons,getOneStoreWeapon,updateOneStoreWeapon,resetStoreWeapons,deleteStoreWeapon,postStoreWeapon } from '../services/StoreWeaponsService'



const MainContainer = () =>{
    const [listOfEnemies, setEnemies] = useState([])
    // const [listOfStoreInventory, setStoreInventory] = useState([])
    const [storeWeapons,setStoreWeapons]=useState([])
    const [storeArmours,setStoreArmours]=useState([])
    const [weaponInventory,setWeaponInventory]=useState([])
    const [armourInventory,setArmourInventory]=useState([])
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
        getArmours()
        .then((allArmours)=>{
            setArmourInventory(allArmours)
        })
        getWeapons()
        .then((allWeapons)=>{
            setWeaponInventory(allWeapons)
        })
        getStoreArmours()
        .then((allStoreArmours)=>{
            setStoreArmours(allStoreArmours)
        })
        getStoreWeapons()
        .then((allStoreWeapons)=>{
            setStoreWeapons(allStoreWeapons)
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

    const getTheCurrentDate=()=>{
        const curDate=new Date()
        let newMonth=curDate.getMonth()+1
        newMonth.toString()
        if(newMonth<10){
            newMonth="0"+newMonth
        }
        let newMinutes=curDate.getMinutes()
        newMinutes.toString()
        if(newMinutes<10){
            newMinutes="0"+newMinutes
        }
        let newDay=curDate.getDate()
        newDay.toString()
        if(newDay<10){
            newDay="0"+newDay
        }
        let newHours=curDate.getHours()
        newHours.toString()
        if(newHours<10){
            newHours="0"+newHours
        }
        
        const formattedDate =newDay+"/"+newMonth+"/"+curDate.getFullYear()+" "+newHours+":"+newMinutes+" : "
        return formattedDate.toString()
    }

    const isReady = listOfEnemies.length && storeWeapons.length // etc 

    const createPlayer = (player) =>{
        const newWeapon=player.weapon
        const newArmour=player.armour
       
        const newStoreWeapon={
            weapon:newWeapon
        }
        const newStoreArmour={
            armour:newArmour
        }
       
        const newMessage=getTheCurrentDate()+"You have created a character: "+player.name
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
        
        
        resetLog(newLog)

        resetParty(player)
       
       
        resetWeaponInventory(newStoreWeapon)
            
            
        resetArmourInventory(newStoreArmour)
            
        resetStoreArmour()
        resetStoreWeapons()
        
    
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
    const removeFromStoreWeapons=(id)=>{
        deleteStoreWeapon(id)
        .then(()=>{
            setStoreWeapons(storeWeapons.filter(item=>item._id!==id))
        })
    }
    const removeFromStoreArmour=(id)=>{
        deleteStoreArmour(id)
        .then(()=>{
            setStoreArmours(storeArmours.filter(item=>item._id!==id))
        })
    }
    const removeFromWeaponInventory=(id)=>{
        deleteWeapon(id)
        .then(()=>{
            setWeaponInventory(weaponInventory.filter(item=>item._id!==id))
        })
    }
    const removeFromArmourInventory=(id)=>{
        deleteArmour(id)
        .then(()=>{
            setArmourInventory(armourInventory.filter(item=>item._id!==id))
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
    const addToWeaponInventory=(item)=>{
        postWeapon(item)
        .then(itemData=>setWeaponInventory(weaponInventory=>[...weaponInventory,itemData]))
    }
    const addToArmourInventory=(item)=>{
        postArmour(item)
        .then(armourData=>setArmourInventory(armourInventory=>[...armourInventory,armourData]))
    }
    const addToStoreWeapons=(item)=>{
        postStoreWeapon(item)
        .then(storeWeaponData=>setStoreWeapons(storeWeapons=>[...storeWeapons,storeWeaponData]))
    }
    const addToStoreArmours=(item)=>{
        postStoreArmour(item)
        .then(storeArmourData=>setStoreArmours(storeArmours=>[...storeArmours,storeArmourData]))
    }


    const updatePlayer=(player)=>{
        updateOneMember(player)
        const updatedPlayerIndex=listOfPartyMembers.findIndex(playerData=>playerData._id===player._id)
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
    const isBattleReady=()=>{
        if(listOfPartyMembers.length!==0 || listOfLogMessages!=={}){
            return true
        }
        return false
    }

    
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Start  listOfPartyMembers = {listOfPartyMembers} />}/>
                <Route path='/new-character' element={<NewCharacter createPlayer = {createPlayer} listOfPartyMembers = {listOfPartyMembers} />}/>
                {listOfPartyMembers.length&&<Route path='/main-menu' element={<MainMenu messages={listOfLogMessages}/>}/>}
                {listOfPartyMembers.length&&<Route path='/missions' element={<Missions partyMembers={listOfPartyMembers}/>}/>}

                <Route path='/cantina' element={<Cantina bountyHunters={listOfBountyHunters} partyMembers={listOfPartyMembers} messages={listOfLogMessages} removeFromAvailable={removeFromAvailable} addToParty={addToParty} updatePlayer={updatePlayer} updateLog={updateLog} removeFromParty={removeFromParty} addToAvailable={addToAvailable}/>}/>

                {listOfPartyMembers.length &&<Route path='/store'
                 element={<Store messages={listOfLogMessages} partyMembers={listOfPartyMembers} armourInventory={armourInventory} weaponInventory={weaponInventory} storeWeapons = {storeWeapons} storeArmours = {storeArmours} removeFromStoreWeapons={removeFromStoreWeapons} addToWeaponInventory={addToWeaponInventory} updatePlayer={updatePlayer} updateLog={updateLog} removeFromStoreArmour={removeFromStoreArmour} addToArmourInventory={addToArmourInventory} removeFromWeaponInventory={removeFromWeaponInventory} addToStoreWeapons={addToStoreWeapons} removeFromArmourInventory={removeFromArmourInventory} addToStoreArmours={addToStoreArmours}/>}
                />}

                {listOfPartyMembers.length &&<Route path='/inventory' 
                    element={<Inventory 
                    partyMembers={listOfPartyMembers} 
                    armourInventory={armourInventory} 
                    weaponInventory={weaponInventory}
                    updatePlayer={updatePlayer} 
                    messages={listOfLogMessages} 
                    updateLog={updateLog}
                    />}
                />
                    }
                {listOfPartyMembers.length &&
                <Route path='/tatooine-bounty-hunt'
                    element={<TatooineBountyHunt
                    messages={listOfLogMessages} 
                    partyMembers={listOfPartyMembers} 
                    enemies={listOfEnemies}
                    updateLog={updateLog}
                    updatePlayer={updatePlayer}
                    />}
                />
                }
                {listOfPartyMembers.length &&
                <Route path='/coruscant-bounty-hunt'
                    element={<CoruscantBountyHunt
                    messages={listOfLogMessages} 
                    partyMembers={listOfPartyMembers} 
                    enemies={listOfEnemies}
                    updateLog={updateLog}
                    updatePlayer={updatePlayer}
                    />}
                />
                }
            </Routes>
                    
        </Router>
    )

}

export default MainContainer

