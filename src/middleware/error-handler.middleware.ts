import { Request, Response, NextFunction } from "express";
import DatabaseError from "../models/errors/database.error.model";
import ForbiddenError from "../routes/forbidden.error.model";
const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof DatabaseError) {
    res.sendStatus(400);
  } else if (error instanceof ForbiddenError) {
    res.sendStatus(403);
  } else {
    res.sendStatus(500);
  }
};
export default errorHandler;
