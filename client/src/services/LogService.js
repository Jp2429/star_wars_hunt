const baseUrl=("http://localhost:9000/api/log/")

export const getMessages=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneItem=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneMessage=(message)=>{
    return fetch(baseUrl+message._id,{
        method:'PUT',
        body:JSON.stringify(message),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetLog=()=>{
    return fetch(baseUrl+"reset")
    .then(res=>res.json())
}
export const postMessage=(message)=>{
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteMessage=(id)=>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}