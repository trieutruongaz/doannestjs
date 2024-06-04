import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder,verifyOrder,userOrders } from '../controllers/orderControlller.js'

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",authMiddleware,verifyOrder);
orderRouter.post("/userOrders",authMiddleware,userOrders);

export default orderRouter;