import express from "express";
import { userRouter } from "./modules/user/user.route";

const router = express.Router();

// user routes

router.use("/user", userRouter);

// router.route("/get-user",(req:Request,res:Response)={
// console.log("first")
// })

export const allroutes = router;
