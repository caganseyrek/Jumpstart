import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

import exampleModel from "@/models/model";

const exampleController = async (req: Request, res: Response) => {
  /*
   * Example login controller
   */
  try {
    const { email } = req.body;
    const user = await exampleModel.findOne({ email: email }).exec();

    // If user does not exists
    if (!user) {
      return res.status(409).send("Wrong e-mail or password");
    }

    const token = sign(
      { data: (user._id as string) + new Date().toISOString() },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: "1 day" },
    );

    res.cookie("token", token, {
      // domain: FRONTENTD_URL,
      httpOnly: true,
      // secure: true,
      maxAge: 60000 * 60 * 24 * 1, // 1 day
      // sameSite: "strict",
      signed: true,
    });

    return res.status(200).send("Success");
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

export default exampleController;
