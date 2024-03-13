import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
    try {
        // Get the last 50 transactions and sort them by the latest date they were created
        const transactions = await Transaction.find().limit(50).sort({ createdAt: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;
