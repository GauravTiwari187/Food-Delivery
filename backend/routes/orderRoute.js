import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeorder, varifyOrder, userOrders } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeorder);
orderRouter.post("/verify", varifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);

export default orderRouter;