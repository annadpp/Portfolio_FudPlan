import { Request, Response } from "express";

export const registerOrLogin = async (req: Request, res: Response) => {
  return res.send("yeah, you joined");
};
