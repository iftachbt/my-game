import React, { useState, useEffect } from "react";
import { logIn } from "../../../actions/user";
import { useNavigate } from "react-router-dom";
import { Formik,Form } from 'formik';
import { Grid,IconButton,InputAdornment } from '@mui/material';
import * as yup from 'yup';
import TextField  from '../TextField.form';
import Button from "../submit.btn";
import {Visibility,VisibilityOff} from '@mui/icons-material';
import {awaitToast} from '../../../actions/toastAlert';
import style from './login.module.css';

function LogIn(props){

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  useEffect(() => {if(props.user) navigate("/startPage")})

 
  const validationSchema=yup.object().shape({
      username: yup
      .string()
      .required("username require")
      .matches(/^[^!@#$%^&*()\-_=+{};:'/,<.>]+$/, 'only numbers and letters'),
      password: yup
      .string()
      .matches(/^[^!@#$%^&*()\-_=+{};:,<.>]+$/, 'only numbers and letters')
      .required("password require")
      .min(6,"password should be of minimum 6 characters")
  })

  async function handleClick(values){
    console.log(values);
      const res = await awaitToast(logIn(values),"logged in")
      if(res !== "err") {
          props.setUser(res);
          navigate('/startPage')
          }
      else console.log(`res ${res}: could not found`);
  }
  return(
      <div>
        <div className={style.container}>
          <h1>Login</h1>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              username: "",
              password: ""
          }}
            onSubmit={values => handleClick(values)}
          >            
            <Form>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField 
                    name="username"
                    label="username"
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
export default LogIn