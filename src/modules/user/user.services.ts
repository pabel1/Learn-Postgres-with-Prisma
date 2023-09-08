import express from "express";

const router = express.Router();

router.route("/get-user").get();

export const userRouter = router;
