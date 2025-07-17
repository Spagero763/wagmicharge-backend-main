import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId:    String,
  service:   String,
  amount:    Number,
  status:    String,
  reference: String,
  metadata:  Object,
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);
export { Order };
