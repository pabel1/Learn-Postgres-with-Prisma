import cors from "cors";
import express, { Application } from "express";
import { allroutes } from "./allroutes";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", allroutes);

export default app;
