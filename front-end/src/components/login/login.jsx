import React, { useState, useEffect } from "react";
import { submitAndGetUser } from "../../actions/apiHandle";
import { useNavigate } from "react-router-dom";

function LogIn(props){
    const navigate = useNavigate();
    useEffect(() => {if(props.auth) navigate("/startPage")})

    const [outPutUser,setOutputUser] = useState({password:"",username:""})

    function handleChange(event){
        const { name, value } = event.target
        setOutputUser(preValue => ({...preValue,[name]:value}))

    }
    async function handleClick(event){
        event.preventDefault()
        const res = await submitAndGetUser(outPutUser,"logIn")
        if(res !== "err") {
            props.setUserState(res);
            props.setAuth(true);
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
                <input onChange={handleChange} type="username" name="username" value={outPutUser.username} />
                <label>password:</label>
                <input onChange={handleChange} type="password" name="password" value={outPutUser.password} />
                <button onClick={handleClick} type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default LogIn