import * as yup from "yup";
import { validationMidFactory } from "../utils/validation.js";

const gameSessionCreationYupSchema = yup.object().shape({
  name: yup.string().required("name is require"),
});

export const gameSessionCreationValidation = validationMidFactory(gameSessionCreationYupSchema);
