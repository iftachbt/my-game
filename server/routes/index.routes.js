import { UsersRoute } from "./users/users.route.js";
import { CharacterRoute } from "./character/character.route.js";
import { errorMid } from "../error_handling/error.handling.js";

export const connectRoutes = (app) => {
  app.use(UsersRoute);
  app.use(CharacterRoute);
  app.use(errorMid);
};
