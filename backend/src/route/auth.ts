import { Router } from "express";
import { registerOrLogin } from "./../controller/auth";

const router = Router();

router.post("/join", registerOrLogin);

export { router };
