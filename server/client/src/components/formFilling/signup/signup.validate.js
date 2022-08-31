import * as yup from "yup";

export const validationSchema = yup.object().shape({
  fname: yup
    .string()
    .min(2, "should be of minimum 2 characters")
    .matches(/^[^!@#$%^&*()\-_=+{};:'/,<.>0-9]+$/, "only letters")
    .required("first name require"),
  lname: yup
    .string()
    .required("password require")
    .min(2, "should be of minimum 2 characters")
    .matches(/^[^!@#$%^&*()\-_=+{};:'/,<.>0-9]+$/, "only letters"),
  userName: yup
    .string()
    .required("username require")
    .matches(/^[aA1-zZ9]+$/, "only numbers and letters"),
  password: yup
    .string()
    .required("password require")
    .matches(/^[aA1-zZ9]+$/, "only numbers and letters")
    .min(6, "password should be of minimum 6 characters"),
  email: yup.string().email("invaild email").required("email require"),
});
