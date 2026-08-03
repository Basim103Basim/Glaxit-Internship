import Field from "./field"
import { useState } from "react"
function Box(){
    const [formData,setData]=useState({
        email:"",
        password:"",
        message:""
    })
    function handleSubmit(e){
        e.preventDefault()
        if(formData.email.includes("@") && formData.password.trim()!=="" && formData.message.trim()!==""){
            e.currentTarget.submit()
        }
    }
    return(
        <form id="box" onSubmit={handleSubmit}>
            <Field value={formData.email} type="text" name="Email" onChange={(e)=>setData({...formData,email:e.target.value})}/>
            <Field value={formData.password} type="password" name="Password" onChange={(e)=>setData({...formData,password:e.target.value})}/>
            <textarea placeholder="Your Message" value={formData.message} onChange={(e)=>setData({...formData,message:e.target.value})}/>
            <button type="submit">Sumbit</button>
        </form>
    )
}
export default Box