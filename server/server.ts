import express, { Request, Response } from "express";
import compression from "compression"; // compresses requests
import bodyParser from "body-parser";
import user from "./routes/user";

const app = express();
const port = 8080;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", user);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
