import React ,{ useEffect }from "react";
import style from "./homepage.module.css"
import {useNavigate} from "react-router-dom";
import { soundEffect } from "../../sounds/VFXsounds";
import  btnSound  from "../index/images/home-page-sound/impact-6291.mp3";
import { confirmAlert } from 'react-confirm-alert'; 
import { optionsFn } from '../../sounds/confirmAlert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function HomePage(props){
    props.setLocation("homePage")
    const navigate = useNavigate();
    const oneTime = props.countOnce === 0

    function handleClick(event){
        navigate('/' + event.target.name)
        soundEffect(btnSound)
    }

    useEffect(()=>{
      if(oneTime){
        confirmAlert(optionsFn(props.setMute));
        props.setCountOnce(1)
      }
    })
    
    const btnsOptions = [
                <div className={style.btn_div}>
                    <button className={style.btn} onClick={handleClick} name="login">LogIn</button>
                </div>,
                <div className={style.btn_div}>
                    <button className={style.btn} onClick={handleClick} name="sigup">SignUp</button>
                </div>
    ]
    return(
        <div className={style.homePage}>
            <div className={style.background}></div>
            <h1 className={style.h1}>BitIsland</h1>
            <div className={style.buttonContainer}>
                {btnsOptions}
            </div>
        </div>
    )
}
export default HomePage