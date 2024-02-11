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

// 65c93b18c4cd85192b101b41
/*
Routes for /user
*/

/* GET /user?id=
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
