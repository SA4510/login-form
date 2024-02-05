import React, { useEffect } from 'react'
import { useState } from 'react';
import  './App.css';  

   function App() {
const data= {name:"",email:"",password:""};
const [inputData,setInputData]= useState(data)
const[flag,setFlag] = useState(false)
useEffect(()=>{
  console.log("Registered")
},[flag])


function handledata(e){
setInputData({...inputData,[e.target.name]:e.target.value})
  console.log(inputData) 
}
function handleSubmit(e){
  e.preventDefault();
  if(!inputData.name || !inputData.email ||!inputData.password){
    alert("All fields are Mandotry")
  }
  else{
    setFlag(true)

  }

}
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You've Registered Successfully</h2>:""}</pre>
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
          <h1>Registration Form</h1>
        </div>
        <div>
           <input type='text' placeholder="Enter Your Name"
            name="name" value={inputData.name}onChange={handledata}></input>
        </div>
        <div>
            <input type='text' placeholder="Enter Your email"
            name="email" value={inputData.email}onChange={handledata}></input>
        </div>
        <div>
            <input type='text' placeholder="Enter Your Password"
            name="password" value={inputData.password}onChange={handledata}></input>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
        




        </form>
        





    </div>
    </>
  )
}

export default App;



