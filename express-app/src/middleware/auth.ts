import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default (req: Request, _res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);
    req.user = decoded;
  }

  next();
};
