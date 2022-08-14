import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { connectRoutes } from "./routes/index.routes.js";
import { connectDB } from "./mongoDB/DB.js";
import { sessionConfig } from "./routes/users/users.auth.js";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionConfig()));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 4000;

connectRoutes(app);

connectDB().then(() => app.listen(port, () => console.log(`Listening on port ${port}`)));
