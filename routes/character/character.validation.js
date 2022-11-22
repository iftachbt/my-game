import * as yup from "yup";
import { validationMidFactory } from "../utils/validation.js";

const characterCreationYupSchema = yup.object().shape({
  name: yup.string().required("name is require"),
  race: yup.string().required("race is require"),
});

export const characterCreationValidation = validationMidFactory(characterCreationYupSchema);
