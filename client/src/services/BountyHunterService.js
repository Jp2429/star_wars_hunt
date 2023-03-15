const baseUrl=("http://localhost:9000/api/bountyHunters/")

export const getHunters=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneHunter=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneHunter=(hunter)=>{
    return fetch(baseUrl+hunter._id,{
        method:'PUT',
        body:JSON.stringify(hunter),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetHunters=()=>{
    return fetch(baseUrl+"reset")
    .then(res=>res.json())
}
export const postHunter=(hunter)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(hunter),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteHunter=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}