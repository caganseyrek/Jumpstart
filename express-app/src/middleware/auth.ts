import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.toString();
  if (token) {
    try {
      const tokenValue = token.split(" ")[1]; // Bearer token
      const decoded = verify(tokenValue, process.env.JWT_ACCESS_SECRET as string);
      req.body.user = decoded;
      return next();
    } catch (error) {
      return res.status(401).send("Unauthorized");
    }
  }
  return res.status(401).send("Unauthorized");
};
