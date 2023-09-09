import express from "express";
import { userRouter } from "./modules/user/user.route";

const router = express.Router();

// user routes
router.use("/user", userRouter);



export const allroutes = router;
