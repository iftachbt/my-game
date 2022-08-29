import React, { useState, useEffect } from "react";
import { Formik,Form } from 'formik';
import { Grid } from '@mui/material';
import * as yup from 'yup';
import TextField  from '../formFilling/TextField.form';
import Submit from "../formFilling/submit.btn";
import { useNavigate } from "react-router-dom";
import { saveCharacter } from "../../actions/character/character";
import { SelectClass } from "./selectClass";
import { awaitToast } from "../../actions/toastAlert";
import style from "./createCharacter.module.css";


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
      <div>
        <div >
          <h1>Login</h1>
            <div>
                <h1>select race</h1>
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
                <Grid item xs={6}>
                  <TextField 
                    name="name"
                    label="character name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Submit>submit</Submit>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </div>
  )
}
export default CreateCharacter