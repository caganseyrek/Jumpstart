import express, { Router } from "express";
import auth from "../middleware/auth";
import { exampleController } from "../controllers/controller";

const router: Router = express.Router();

router.post("/route", auth, exampleController);

export const exampleRoute: Router = router;
