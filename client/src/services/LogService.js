const baseUrl=("http://localhost:9000/api/log/")

export const getMessages=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneMessage=(id)=>{
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
    return fetch(baseUrl+"reset", {method:'POST'})
    .then(res=>res.json())
}
export const postMessage=(message)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteMessage=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}