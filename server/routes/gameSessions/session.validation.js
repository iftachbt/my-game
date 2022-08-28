import * as yup from "yup";
import { validationMidFactory } from "../utils/validation.js";

const gameSessionCreationYupSchema = yup.object().shape({
  name: yup.string().required("name is require"),
  characterId: yup.string().required("characterId is require"),
  difficulty: yup.string().required("difficulty is require"),
  ATK: yup.number().typeError("ATK is require"),
  shield: yup.number().typeError("shield is require"),
  HP: yup.number().typeError("HP is require"),
  gold: yup.number().typeError("gold is require"),
  level: yup.number().typeError("level is require"),
  kills: yup.number().typeError("kills is require"),
  deaths: yup.number().typeError("deaths is require"),
});

export const gameSessionCreationValidation = validationMidFactory(gameSessionCreationYupSchema);
