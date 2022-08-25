import { UsersRoute, UserPrefix } from "./users/users.route.js";
import { CharacterRoute, CharacterPrefix } from "./character/character.route.js";
import { gameSessionPrefix, gameSessionRoute } from "./gameSessions/session.route";
import { errorMid } from "../error_handling/error.handling.js";

export const connectRoutes = (app) => {
  app.use(UserPrefix, UsersRoute);
  app.use(CharacterPrefix, CharacterRoute);
  app.use(gameSessionPrefix, gameSessionRoute);
  app.use(errorMid);
};
