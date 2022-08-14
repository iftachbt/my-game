import React, { useState } from "react";
import style from "./header.module.css"
import {
    useNavigate
  } from "react-router-dom";
function Header(props){
    const navigate = useNavigate();
   
    return(
        <div className={style.main}>
            <div className={style.tab}><p onClick={() => {navigate("/")}}>home page</p></div>
            <div className={style.tab}><p onClick={() => {navigate(-1)}}>go back</p></div>
            <div className={style.tab}><p>tab 2</p></div>
            <div className={style.tab}><p>tab 3</p></div>
            <div className={style.tab}><p>tab 4</p></div>
            <div className={style.tab}></div>
            <div className={style.tab}></div>
            <div className={style.tab}></div>
            <div className={style.tab}></div>
            <div className={[style.tab,style.logIn].join(" ")}><p>user</p></div>
        </div>
    )
}

export default Header;