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

/**
 * POST /user?email=&password?
 * Creates a new user in the database with the email and password and then get a unique id for the user and return it
 * TODO: Password Encyrption
 * @params email
 * @params password
 * @returns unique id of the user
 */
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

/**
 * GET /user?username=&email
 * get the unique id for the user and return it
 * @params email
 * @params password
 * @returns unique id of the user
 */
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

/**
 * GET /user/transaction?id=
 * Returns a JSON in the format
 * @params id
 * @returns Transcation object
 * {
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
