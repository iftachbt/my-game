import { User } from "../../mongoDB/DB.js";

export const getUserByMail = (email) => User.findOne({ email }).exec();
