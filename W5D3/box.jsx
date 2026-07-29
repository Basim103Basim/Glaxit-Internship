import { useEffect } from "react"
import { useState } from "react"

function Box(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        async function getUsers(){
            let response=await fetch("https://jsonplaceholder.typicode.com/users")
            let data=await response.json()
            setUsers(data)
        }
        getUsers()
    },[])
    return(
        <main>
            {
            users.map(user=>(
                <div className="box">
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))
            }
        </main>
    )
}
export default Box