import express, { Router, Request, Response } from "express";
import mongoose from "mongoose";
import "dotenv/config";

const router: Router = express.Router();

// Connect to MongoDB
const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}@atlascluster.yp4qa9x.mongodb.net/Users?retryWrites=true&w=majority`;
try {
  mongoose.connect(mongoUrl);
} catch (error: any) {
  console.log(error.message);
}

// schemas / models
const transaction_schema = new mongoose.Schema({
  id: Number,
  transaction_type: String,
  transaction_amount: Number,
  category: String,
});
const Transaction = mongoose.model("transactions", transaction_schema);

const user_schema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("users", user_schema);
/*
Routes for /user
*/

// Note: I'm going to directly store passwords but we need to encyrpt them.

/* POST /user?email=&password? */
router.post("/", async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const password = req.query.password;
    const user = await User.create({ email, password });
    res.send(user._id);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

/* GET /user?username=&email*/
router.get("/", async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const password = req.query.password;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send("User not found");
    } else {
      if (user.password === password) {
        res.send(user._id);
      } else {
        res.status(401).send("Invalid password");
      }
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

/* GET /user/transaction?id=
Returns a JSON in the format
    {
        id,
        transaction_type (income vs expense),
        transaction_amount,
        category (like grocery etc)
    }
*/
router.get("/transaction", async (req: Request, res: Response) => {
  try {
    const id = req.query.id;
    const transaction = await Transaction.findById(id);

    res.send(transaction);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;
