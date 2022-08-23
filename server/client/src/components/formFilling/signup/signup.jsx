import React, { useState, useEffect } from "react";
import { signUp } from "../../../actions/user";
import { useNavigate } from "react-router-dom";
import { Formik,Form } from 'formik';
import { Grid,IconButton,InputAdornment } from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import * as yup from 'yup';
import TextField  from '../TextField.form';
import Button from "../submit.btn";
import style from "./signup.module.css";

function SignUp(props){

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  useEffect(() => {if(props.user) navigate("/startPage")})

  const validationSchema=yup.object().shape({
    fname: yup
      .string()
      .min(2,"should be of minimum 2 characters")
      .matches(/^[^!@#$%^&*()\-_=+{};:'/,<.>0-9]+$/, 'only letters')
      .required("first name require"),
      lname: yup
      .string()
      .required("password require")
      .min(2,"should be of minimum 2 characters")
      .matches(/^[^!@#$%^&*()\-_=+{};:'/,<.>0-9]+$/, 'only letters'),
      userName: yup
      .string()
      .required("username require")
      .matches(/^[aA1-zZ9]+$/, 'only numbers and letters'),
      password: yup
      .string()
      .required("password require")
      .matches(/^[aA1-zZ9]+$/, 'only numbers and letters')
      .min(6,"password should be of minimum 6 characters"),
      email: yup
      .string()
      .email("invaild email")
      .required("email require")
    })

  async function handleClick(values){
    console.log(values);
    const res = await signUp(values)
    console.log("res", res);
    if(res !== "err"){
        props.setUser(res);
        navigate('/startPage')
    }
    else console.log(`res ${res}: something went wrong!`);
  }

  return(
      <div>
        <div className={style.container}>
          <h1>register</h1>
          <Formik
            validationSchema={validationSchema}
            initialValues={{fname:"",lname:"",password:"",userName:"",email:""}}
            onSubmit={values => handleClick(values)}
          >            
            <Form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField 
                    name="fname"
                    label="first name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    name="lname"
                    label="last name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    name="userName"
                    label="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    name="email"
                    label="email"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField 
                    name="password"
                    label="password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button>submit</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </div>
  )
}
export default SignUp