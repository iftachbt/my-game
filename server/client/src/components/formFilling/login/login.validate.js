import * as yup from "yup";

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("username require")
    .matches(/^[^!@#$%^&*()\-_=+{};:'/,<.>]+$/, "only numbers and letters"),
  password: yup
    .string()
    .matches(/^[^!@#$%^&*()\-_=+{};:,<.>]+$/, "only numbers and letters")
    .required("password require")
    .min(6, "password should be of minimum 6 characters"),
});
