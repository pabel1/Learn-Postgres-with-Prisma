import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// Router.post("/create-user", userController.createUser);
router.route("/create-user").post(userController.createUser);
router.route("/create-user-profile").post(userController.userProfile);
router.route("/get-users").get(userController.getUsers);

export const userRouter = router;
