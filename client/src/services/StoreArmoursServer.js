const baseUrl=("http://localhost:9000/api/store-armours/")

export const getStoreArmours=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneStoreArmour=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneStoreArmour=(item)=>{
    return fetch(baseUrl+item._id,{
        method:'PUT',
        body:JSON.stringify(item),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetStoreArmour=()=>{
    return fetch(baseUrl+"reset", {method:'POST'})
    .then(res=>res.json())
}
export const postStoreArmour=(item)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteStoreArmour=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}