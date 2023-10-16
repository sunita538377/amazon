import React, { useState } from 'react'
import amazon1 from '../Images/amazon-2-logo-svgrepo-com.svg'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div className="mainContainer" >
            <div className='logo' >
                <img src={amazon1} style={{width:"150px" , height:"100px"}}/>
            </div>
            <div className='inputRegion' style={{border:"1px solid gray", padding:"20px" , borderRadius:"8px", width:"25%"}}>
                <div  style={{fontSize:"bold" , marginBottom:"8" , fontWeight:"lighter"}}>
                    <h2>Sign in</h2>
                </div>
                <TextInput label={"Email or mobile phone number"}  className={"my-6"}
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput label={"Password"} 
                    value={password}
                    setValue={setPassword}
                />
                <div  style={{width:"100%" , display:"flex" , justifyContent:"center"}}>
                    <button  style={{backgroundColor:"yellow" , width:"100%" , padding:"8px" , border:"none" , borderRadius:"8px"}}>
                        Sign in 
                    </button>
                </div>
                <div style={{display:"flex" , justifyContent:"center"}}>
                    <Link to={"/update"} style={{color:"blue" , paddingBottom:"10px" , paddingTop:"10px"}}>
                        Forgot your password?
                    </Link>
                </div>
                <div style={{fontSize:"14px"}}>
                    By continuing, you agree to Amazon's <span style={{color:"blue"}}>Conditions of Use</span> and <span style={{color:"blue"}}>Privacy Notice.</span>
                </div>
                <div style={{display:"flex" , flexDirection:"row"}}>
                    <input type="checkbox" name="rememberMe" value="true" tabindex="4" />
                    <div style={{paddingLeft:"5px"}}>  Keep me signed in.</div>  
                </div>
                <div >
                <h5 style={{display:"flex" ,justifyContent:"center" }}>New to Amazon</h5>
                    
                </div>
            </div>
        </div>
  )
}

export default Login