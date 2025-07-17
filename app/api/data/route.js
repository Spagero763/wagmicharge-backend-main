import { Router } from "express";
import { handleDataOrder } from "../../../lib/order-service.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const result = await handleDataOrder(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Data order failed" });
  }
});

export default router;
