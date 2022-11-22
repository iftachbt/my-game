import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("name require")
    .matches(/^[aA1-zZ9]+$/, "only numbers and letters"),
});
