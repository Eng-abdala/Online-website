import { useState } from "react"


function Contact(){
    const [name,setName] = useState("")
    const [Password,setPassword] = useState("")
    const [confirm,setConfirm] = useState("")

    const [error,setError] = useState("")

    // validation function
    const Validation =(event)=>{
        event.preventDefault()
        if (name.trim()=="" || Password.trim()=="" || confirm.trim()==""){
            setError("Please fill the form")
        }

        else if(Password.length<6){
            setError("password Must Contain atleast 6 characters ")
        }

        else if(Password.trim() != confirm.trim()){
            setError("Passwords do not match ")
        }
        else{
            setError("")
        }
    }

    return <div className="flex justify-center mt-[10%]">
        <form className="border-[3px] border-green-400 w-[500px] text-center h-[400px] py-[80px]" action="">
            <p className="text-[20px] text-red-600">{error}</p>
            <input value={name} onChange={(event)=> setName(event.target.value)} className="w-[300px] rounded-md   h-[40px] border-green-500 border-[2px] outline-none" type="text" placeholder="Enter your Name:" />
            <br/>
            <input value={Password} onChange={(event)=> setPassword(event.target.value)} className="w-[300px] rounded-md my-[15px]  h-[40px] border-green-500 border-[2px] outline-none" type="text" placeholder="Enter New Password:" />
            <br/>
            
        
        <input value={confirm} onChange={(Event)=> setConfirm(Event.target.value)} className="w-[300px] rounded-md  h-[40px] border-green-500 border-[2px] outline-none" type="text" placeholder="Confirm Pssword:" />
        <br/>
        <button onClick={Validation} className="bg-green-500 text-[30px] px-[20px] h- text-white rounded-md mt-[12px]">Save</button>
        
        </form>
    </div>
}
export default Contact