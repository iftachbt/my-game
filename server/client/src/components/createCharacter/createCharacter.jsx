import React, { useState, useEffect } from "react";
import { Formik,Form } from 'formik';
import { Grid,Button } from '@mui/material';
import * as yup from 'yup';
import TextField  from '../formFilling/TextField.form';
import Submit from "../formFilling/submit.btn";
import { useNavigate } from "react-router-dom";
import { saveCharacter } from "../../actions/character/character";
import { SelectClass } from "./selectClass";
import { awaitToast } from "../../actions/toastAlert";
import style from "./createCharacter.module.css";
import { ThemeProvider } from '@mui/material/styles';
import { Btn,GridBackground } from './create.style';

function CreateCharacter(props){

  const raceList = ["human","elf","dwarf","dragonborn"]
    const [race , setRace] = useState("elf")
  const navigate = useNavigate();

  const validationSchema=yup.object().shape({
      name: yup
      .string()
      .required("name require")
      .matches(/^[aA1-zZ9]+$/, 'only numbers and letters'),
  })
  async function handleClick(name){
    const character = {...name,race: race}
    const req = await awaitToast(saveCharacter(character),"creating avater")
    console.log("req",req)
    req !== "err"
    ?navigate("/startPage")
    :setRace("elf")
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
                   <button className={style.btn} type="submit">Create</button>
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