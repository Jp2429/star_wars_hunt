const baseUrl=("http://localhost:9000/api/store/")

export const getItems=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneItem=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneItem=(item)=>{
    return fetch(baseUrl+item._id,{
        method:'PUT',
        body:JSON.stringify(item),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetStore=()=>{
    return fetch(baseUrl+"reset")
    .then(res=>res.json())
}
export const postItem=(item)=>{
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteItem=(id)=>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}