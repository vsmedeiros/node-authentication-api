import dotenv from 'dotenv';
dotenv.config()
import express, { Request, Response, NextFunction } from "express";
import jwtAuthenticationMiddleware from "./middleware/jwt-authentication.middleware";
import errorHandler from "./middleware/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor executando na porta: 3000!');
})