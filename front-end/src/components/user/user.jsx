import React from "react";
import { logout } from "../../actions/apiHandle";
import { useNavigate } from "react-router-dom";

 function UserProfile(props){
    const navigate = useNavigate();

    function logoutHandler(){
        logout()
        props.setUser(false)
    }
    
    return(
        <div >
            <div ></div>
            <h1>hello {props.user.username}</h1>
            <div>
                <button className="btn" onClick={() => navigate('/createCharacter')} name="newGame">new game</button>
            </div>
            <div>
                <button className="btn" onClick={logoutHandler} >logout</button>
            </div>
            <div>
                <button className="btn" onClick={() => navigate(-1)} >back</button>
            </div>
        </div>
    )
}
export default UserProfile