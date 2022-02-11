import { Router, Request, Response, NextFunction } from "express";
import userRepository from "../repositories/user.repository";

import JWT, { SignOptions } from "jsonwebtoken";
import basicAuthenticationMiddleware from "../middleware/basic-authentication.middleware";
import ForbiddenError from "./forbidden.error.model";
import jwtAuthenticationMiddleware from "../middleware/jwt-authentication.middleware";
const authorizationRoute = Router();

authorizationRoute.post(
  "/token",
  basicAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) {
        throw new ForbiddenError("Usuário não informado");
      }
      const jwtPayload = { username: user?.username };
      const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: "15m" };
      const secretKey = "my_secret_key";
      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
      res.status(200).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);
authorizationRoute.post(
  "/token/validate",
  jwtAuthenticationMiddleware,
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(200);
  }
);
authorizationRoute.post(
  "/token/refresh",
  jwtAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) {
        throw new ForbiddenError("Usuário não informado");
      }
      const jwtPayload = { username: user?.username };
      const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: "15m" };
      const secretKey = "my_secret_key";
      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
      res.status(200).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);

export default authorizationRoute;
