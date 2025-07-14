import { useEffect, useState } from "react";
import { useParams } from "react-router";

function UpdateData(){
   const [name, setName] =useState();
   const [phone, setPhone] = useState();
   const {id} = useParams();
  

   useEffect(()=>{
    getData();

   },[])

   async function getData() {

     const url = `https://mongo-backend-4aaf.vercel.app/api/students/${id}`;
      let response = await fetch(url);
      response = await response.json();
      setName(response.name);
      setPhone(response.phone);
    
   }
   
   async function eidtData() {
    const url = `https://mongo-backend-4aaf.vercel.app/api/students/${id}`;
     let response = await fetch(url, {
        method:"put",
         headers: {
            "Content-Type": "application/json"
            },
        body:JSON.stringify({name, phone})
     })
     response = await response.json();
     if(response){
        alert("data updated")
     }
    
   }
   
    return(
        <div>
            <h1>Update Data</h1>
            <label>Name</label>
            <input type="text" value={name} placeholder="name" onChange={(event)=>setName(event.target.value)} />
           <br/><br/>
            <label>Phone</label>
           <input type="txt" value={phone} placeholder="phone" onChange={(event)=>setPhone(event.target.value)} />
           <br/><br/>
           <button onClick={eidtData}>update</button>
        </div>
    )
}
export default UpdateData;