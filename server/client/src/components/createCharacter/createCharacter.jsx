import React, { useState, useEffect } from "react";
import { Formik,Form } from 'formik';
import { Grid } from '@mui/material';
import TextField  from '../formFilling/TextField.form';
import { useNavigate } from "react-router-dom";
import { saveCharacter } from "../../actions/character/character";
import { SelectClass } from "./selectClass";
import { awaitToast } from "../../actions/toastAlert";
import style from "./createCharacter.module.css";
import { ThemeProvider } from '@mui/material/styles';
import {GridBackground } from './create.style';
import  btnSound  from "../index/images/home-page-sound/impact-6291.mp3";
import { soundEffect } from "../../sounds/VFXsounds";
import { validationSchema } from "./createChar.validate";

function CreateCharacter(props){

  const raceList = ["human","elf","dwarf","dragonborn"]
    const [race , setRace] = useState("elf")
  const navigate = useNavigate();

 
  async function handleClick(name){
    const character = {...name,race: race}
    const req = await awaitToast(saveCharacter(character),"creating avater")
    req !== "err"
    ?navigate("/startPage")
    :setRace("elf")
    soundEffect(btnSound)
  }
  
  return(
      <div className={style.background}>
        <div className={style.mainContiner}>
            <div>
                <h1 className={style.h1}>select race</h1>
                <div className={style.raceList}>
                    {raceList.map((className, index) => <SelectClass 
                    setRace={setRace}
                    race={race}
                    value={className}
                    id={index}
                    />)}
                </div>
           </div>
          <Formik
            validationSchema={validationSchema}
            initialValues={{name: ""}}
            onSubmit={value => handleClick(value)}
          >            
            <Form>
            <Grid container spacing={4}>
              <div className={style.grid}>
              <ThemeProvider theme={GridBackground}>
                <Grid item xs={12} >
                  <TextField 
                    name="name"
                    label="character name"
                    color="primary"
                  />
                </Grid>
                </ThemeProvider>
              </div>
                <Grid item xs={12}>
                  <div className={style.btn_div}>
                  <p className={style.p}>Create</p>
                  <div className={style.btn} ></div>
                  <button className={style.push} type="submit"></button>
                </div>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </div>
  )
}
export default CreateCharacter