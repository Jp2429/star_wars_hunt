const baseUrl=("http://localhost:9000/api/weapon-inventory/")

export const getWeapons=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneWeapon=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneWeapon=(item)=>{
    return fetch(baseUrl+item._id,{
        method:'PUT',
        body:JSON.stringify(item),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetWeaponInventory=(item)=>{
    return fetch(baseUrl+"reset", {
        method:'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res=>res.json())
}
export const postWeapon=(item)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteWeapon=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}