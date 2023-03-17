const baseUrl=("http://localhost:9000/api/store-weapons/")

export const getStoreWeapons=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneStoreWeapon=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneStoreWeapon=(item)=>{
    return fetch(baseUrl+item._id,{
        method:'PUT',
        body:JSON.stringify(item),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetStoreWeapons=()=>{
    return fetch(baseUrl+"reset", {method:'POST'})
    .then(res=>res.json())
}
export const postStoreWeapon=(item)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteStoreWeapon=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}