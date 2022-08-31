import React, { useState, useEffect } from "react";
import { signUp,logIn } from "../../../actions/user";
import { useNavigate } from "react-router-dom";
import { Formik,Form } from 'formik';
import { Grid,IconButton,InputAdornment } from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import TextField  from '../TextField.form';
import Button from "../submit.btn";
import style from "./signup.module.css";
import {awaitToast} from '../../../actions/toastAlert';
import { validationSchema } from "./signup.validate";

function SignUp(props){

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  async function handleClick(values){
    const res = await awaitToast(signUp(values),"signUp")
    if(res !== "err"){
      const resLogin = await logIn({username: values.userName , password: values.password})
      if(resLogin !== "err") {
        props.setUser(resLogin);
        navigate('/startPage')
      }
    }
    else console.log(`res ${res}: something went wrong!`);
  }

  return(
    <div className={style.body}>
      <div className={style.main_container}>
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
    </div>
  )
}
export default SignUp