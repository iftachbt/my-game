import { UsersRoute, UserPrefix } from "./users/users.route.js";
import { CharacterRoute, CharacterPrefix } from "./character/character.route.js";
import { errorMid } from "../error_handling/error.handling.js";

export const connectRoutes = (app) => {
  app.use(UserPrefix, UsersRoute);
  app.use(CharacterPrefix, CharacterRoute);
  app.use(errorMid);
};
