import express from "express";
import { getClient } from "../db";
import { Account } from "../models/account-types";

const accountRouter = express.Router();

export const errorResponse = (error: any, res: express.Response) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

// Get account by uuid
accountRouter.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const client = await getClient();

    const result = await client
      .db()
      .collection<Account>("accounts")
      .findOne({ uuid });

    if (!result) {
      res.status(404).json({ message: "Account Not Found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    return errorResponse(error, res);
  }
});

// Create a new account in mongodb with the provided account object
accountRouter.post("/", async (req, res) => {
  const account: Account = req.body;

  try {
    const client = await getClient();

    await client.db().collection<Account>("accounts").insertOne(account);

    res.status(201).json(account);
  } catch (error) {
    return errorResponse(error, res);
  }
});

export default accountRouter;
