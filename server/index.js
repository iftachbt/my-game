import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { connectRoutes } from "./routes/index.routes.js";
import { connectDB } from "./mongoDB/DB.js";
import { sessionConfig } from "./routes/users/users.auth.js";
import { corsOptions } from "./cors.service.js";

const app = express();

app.use(express.static("public"));
app.use(cookieParser(process.env.AUTH_SESSION_SECRET));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionConfig()));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 4000;

connectRoutes(app);

connectDB(process.env.DB_URL).then(() => app.listen(port, () => console.log(`Listening on port ${port}`)));
