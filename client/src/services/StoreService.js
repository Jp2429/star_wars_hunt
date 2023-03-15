const baseUrl=("http://localhost:9000/api/store/")

export const getStoreItems=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneStoreItem=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneStoreItem=(item)=>{
    return fetch(baseUrl+item._id,{
        method:'PUT',
        body:JSON.stringify(item),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetStore=()=>{
    return fetch(baseUrl+"reset", {method:'POST'})
    .then(res=>res.json())
}
export const postStoreItem=(item)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteStoreItem=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}