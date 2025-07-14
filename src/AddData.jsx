import { useState } from "react";
import { useNavigate } from "react-router";

function AddData(){

   const [name, setName]=useState('');
   const [phone, setPhone]=useState('');
   const navigateTo = useNavigate();

 async function saveData() {

        const url = "https://mongo-backend-4aaf.vercel.app/api/students";
        let response = await fetch(url,{
            method: "POST",
           headers: {
            "Content-Type": "application/json"
           },
           body: JSON.stringify({ name, phone })
        })
        response = await response.json();
        if(response){
            console.log(response);
            setName('');
            setPhone('');
             navigateTo('/'); 
        }

   }

    return(
        <div>
            <h2>Add Data</h2>
            <label htmlFor="name">Name</label>
            <input type="tex" id="name" required  placeholder="Enter Name " onChange={((event)=>setName(event.target.value))} />
            <br/><br/>

            <label htmlFor="phone">Phone</label>
            <input type="tex" id="phone" required  placeholder="Enter Phone "  onChange={((event)=>setPhone(event.target.value))} />
            <br/><br/>

            <button onClick={saveData}>Save</button>
        </div>
    )
}
export default AddData;