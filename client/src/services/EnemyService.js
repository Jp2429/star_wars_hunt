const baseUrl=("http://localhost:9000/api/enemies/")

export const getEnemies=()=>{
    return fetch(baseUrl)
    .then(res=>res.json())
}
export const getOneEnemy=(id)=>{
    return fetch(baseUrl+id)
    .then(res=>res.json())
}
export const updateOneEnemy=(enemy)=>{
    return fetch(baseUrl+enemy._id,{
        method:'PUT',
        body:JSON.stringify(enemy),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
}
export const resetEnemies=(enemies)=>{
    return fetch(baseUrl+"reset",{
        method:"POST",
        body:JSON.stringify(enemies),
        headers:{'Content-Type':'application/json'}
    })
}
export const deleteEnemies=()=>{
    return fetch(baseUrl,{
        method:"DELETE"
    })
}