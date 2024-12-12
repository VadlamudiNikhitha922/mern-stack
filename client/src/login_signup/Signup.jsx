import React,{useState} from 'react';
import {Link} from "react-router-dom";
import style from "./login.module.css";
import {userNavigate} from "react-router-dom";


const Signup = () => {
  const[name,setname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();



  const onSubmit=async(e)=>{
    e.preventDefault()
    try{
      const sendSign=await fetch(`http://localhost:4000/user/signup`,{
        method:"POST",
        headers:{
          "content-Type":"application/json"},
        body:JSON.stringify({name,email,password}),
      });
      const response=await sendSign.json();


      if(sendSign.ok){
        alert("Registartion Successfull");
        console.log(response);
      }else{
        alert("Registration Failed");
      }
    }catch(error){
       console.log(error);
    }
  };
  return (
    <div className={style.body}>
      <h1 className= {style.hello}>Signup</h1>
      <div className={style.inside}>
        <input className={style.inp} type="text"name="" id=""placeholder="Username" onChange={(e)=>setname(e.target.value)}/><br /><br />
        <input className={style.inp} type="text"name=""id=""placeholder="Email" onChange={(e)=>setemail(e.target.value)}/><br /><br />
        <input className={style.inp} type="password"name=""id=""placeholder="Password" onChange={(e)=>setpassword(e.target.value)} /><br /><br />
        <button className={style.but} onClick={onSubmit} type='submit'>Submit</button>
      </div>
      <div className={style.outside}>
      <p>Already have an account?
      <Link to="/">Login</Link>
      </p>
      </div>
      <p>Already have an account?<Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Signup