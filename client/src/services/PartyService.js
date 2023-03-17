const baseUrl=("http://localhost:9000/api/party/")

export const getMembers=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneMember=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneMember=(member)=>{
    return fetch(baseUrl+member._id,{
        method:'PUT',
        body:JSON.stringify(member),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetParty=(player)=>{
    return fetch(baseUrl+"reset", {method:'POST',
    body:JSON.stringify(player),
    headers: { 'Content-Type': 'application/json' }})
    .then(res=>res.json())
}
export const deleteParty=()=>{
    return fetch(baseUrl+"reset",{
        method:'DELETE'
    })
}
export const postMember=(member)=>{
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(member),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
export const deleteMember=(id)=>{
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}