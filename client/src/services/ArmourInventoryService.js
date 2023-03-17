const baseUrl=("http://localhost:9000/api/armour-inventory/")

export const getArmours=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneArmour=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneArmour=(item)=>{
    return fetch(baseUrl+item._id,{
        method:'PUT',
        body:JSON.stringify(item),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetArmourInventory=()=>{
    return fetch(baseUrl+"reset", {method:'POST'})
    .then(res=>res.json())
}
export const postArmour=(item)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteArmour=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}