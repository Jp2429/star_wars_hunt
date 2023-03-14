const baseUrl=("http://localhost:9000/api/store/")

export const getItems=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneItem=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneItem=(enemy)=>{
    return fetch(baseUrl+enemy._id,{
        method:'PUT',
        body:JSON.stringify(enemy),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetStore=()=>{
    return fetch(baseUrl+"reset")
}