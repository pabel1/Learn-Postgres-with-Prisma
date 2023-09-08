import express from "express";

const router = express.Router();

router.get("/get-user", (req, res) => {
  console.log("hello");
  res.send("hello");
});

export const userRouter = router;
