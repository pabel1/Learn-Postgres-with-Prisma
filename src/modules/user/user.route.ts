import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// Router.post("/create-user", userController.createUser);
router.route("/create-user").post(userController.createUser);

export const userRouter = router;
