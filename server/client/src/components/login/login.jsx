import React, { useState, useEffect } from "react";
import { logIn } from "../../actions/user";
import { useNavigate } from "react-router-dom";


function LogIn(props){

    const navigate = useNavigate();

    useEffect(() => {if(props.user) navigate("/startPage")})

    const [outPutUser,setOutputUser] = useState({password:"",username:""})

    function handleChange(event){
        const { name, value } = event.target
        setOutputUser(preValue => ({...preValue,[name]:value}))
    }
    async function handleClick(event){
        event.preventDefault()
        const res = await logIn(outPutUser)
        if(res !== "err") {
            props.setUser(res);
            navigate('/startPage')
            }
        else console.log(`res ${res}: could not found`);
    }
    return(
        <div>
            <h1>LogIn</h1>
            <div>
                <form>
                <label>username:</label>
                <input 
                onChange={handleChange} 
                type="username" name="username" 
                value={outPutUser.username} 
                />
                <label>password:</label>
                <input 
                onChange={handleChange} 
                type="password" name="password" 
                value={outPutUser.password} />
                <button onClick={handleClick} type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default LogIn