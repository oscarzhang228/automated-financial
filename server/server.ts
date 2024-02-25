import express, { Request, Response } from "express";
import user from "./routes/user";
import cors from "cors";

const app: any = express();
const port: number = 8080;

app.use(cors());

app.use("/user", user);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
