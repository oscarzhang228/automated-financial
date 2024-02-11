import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
/* GET /user
Returns a JSON in the format
    {
        id,
        transaction_type (income vs expense),
        transaction_amount,
        category (like grocery etc)
    }
*/
router.get("/", async (req: Request, res: Response) => {
  try {
    res.send("OK");
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

export default router;
