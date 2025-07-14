import { Button } from "bootstrap";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ShowData(){

   const [userData , setUserData]=useState([]);
   const [myid, setMyid]=useState('')

    const navigateTo = useNavigate();

   useEffect(()=>{
    getData() 

   }, [])

   
    async function getData() {
        const url = "https://mongo-backend-4aaf.vercel.app/api/students";
        try {
            
            let response = await fetch(url);
            response = await response.json();
          
            setUserData(response);
           

        } catch (error) {
            console.log("data not found");
        }
        
    }
  
    //******** Delete Data *********//
   async function deleteData(id) {

     const url = "https://mongo-backend-4aaf.vercel.app/api/students";
     let response = await fetch(url+"/"+id,{
        method:"delete"
     })
     response =  await response.json();
     if(response){
       navigateTo('/showdata'); 
     }
   }

   //update data
   function updateData(id){

        navigateTo("/eidt/"+id); 
   }


    return(
        <div>
            <h2>Show Data</h2>
            <table border="1px solid" width="100%">
                <thead>
                    <tr>
                        <td style={{backgroundColor:"gray"}}>Name</td>
                        <td style={{backgroundColor:"gray"}}>Phone</td>
                        <td style={{backgroundColor:"gray"}}>Delete</td>
                        <td style={{backgroundColor:"gray"}}>Update</td>
                    </tr>
                </thead>
           {
            userData.map((item)=>(
                <tbody key={item._id}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td><button  onClick={()=>deleteData(item._id)}>Delete</button></td>
                        <td><button  onClick={()=>updateData(item._id)}>Modify</button></td>
                    </tr>
                </tbody>
            ))
           
           }
           </table>
        </div>
    )
}
export default ShowData;