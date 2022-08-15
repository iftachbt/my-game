import React, { useState } from "react";
import style from "./homepage.module.css"
import {
    useNavigate
  } from "react-router-dom";
import { logout, testTemp } from "../../actions/apiHandle";

function HomePage(props){
    const navigate = useNavigate();

    function handleClick(event){
        if(!props.auth) navigate('/' + event.target.name)
        else navigate('/startPage')
    }

    return(
        <div className={style.homePage}>
                <div onClick={ () =>  testTemp()}>temp test</div>
                <div onClick={ () =>  logout()}>logout</div>
            <div className={style.background}></div>
            <h1>My-Game</h1>
            <div>
                <button className="btn" onClick={handleClick} name="login">start</button>
            </div>
            <div>
                <button className="btn" onClick={handleClick} name="sigup">SignUp</button>
            </div>
        </div>
    )
}
export default HomePage