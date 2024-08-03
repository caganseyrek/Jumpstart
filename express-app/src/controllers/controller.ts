import { NextFunction, Request, Response } from "express";
import exampleModel from "../models/model";

const exampleController = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const user = req.user;
  if (!user) return res.status(401).send("Unauthorized");

  // Example
  exampleModel.findByIdAndUpdate();
  res.cookie("access/refresh token", "token value", {
    httpOnly: true,
    secure: true,
    maxAge: 60000 * 60,
    sameSite: "strict",
  });
};

const refresh = (req: Request, res: Response, _next: NextFunction) => {
  const user = req.user;
  if (!user) return res.status(401).send("Unauthorized");
};

const logout = (_req: Request, _res: Response, _next: NextFunction) => {};

export { exampleController, refresh, logout };
