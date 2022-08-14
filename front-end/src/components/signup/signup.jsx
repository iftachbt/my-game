import React, { useState,useEffect } from "react";
import { submitAndGetUser } from "../../actions/apiHandle";
import { useNavigate } from "react-router-dom";

function SignUp(props){

    useEffect(() => {if(props.auth) navigate("/startPage")})
    const navigate = useNavigate();
    const [user,setUser]=useState({fname:"",lname:"",password:"",userName:"",email:""})

    function handleChange(event){
        const { name, value } = event.target
        setUser(preValue =>{
            return({...preValue,[name]:value})
        })
    }
    async function handleClick(event){
        event.preventDefault()
        const res = await submitAndGetUser(user,"signUp")
        console.log("res", res);
        if(res !== "err"){
            props.setUserState(res);
                props.setAuth(true);
                navigate('/startPage')
        }
        else console.log(`res ${res}: something went wrong!`);

    }

    return(
        <div>
            <h1>signUp</h1>
            <div>
                <form>
                <label>first name:</label>
                <input onChange={handleChange} type="text" name="fname" value={user.fname} />
                <label>last name:</label>
                <input onChange={handleChange} type="text" name="lname" value={user.lname} />
                <label>userName:</label>
                <input onChange={handleChange} type="text" name="userName" value={user.userName} />
                <label>email:</label>
                <input onChange={handleChange} type="email" name="email" value={user.email} />
                <label>password:</label>
                <input onChange={handleChange} type="password" name="password" value={user.password} />
                <button onClick={handleClick} type="submit">SignUp</button>
                </form>
            </div>
        </div>
    )
}
export default SignUp