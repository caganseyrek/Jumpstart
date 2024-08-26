import express, { Router } from "express";

import { exampleController } from "@/controllers/controller";

import auth from "@/middleware/auth";

const router: Router = express.Router();

router.post("/route", auth, exampleController);

export const exampleRoute: Router = router;
