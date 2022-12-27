import express from 'express';

import { getMyOrders, placeOrder } from '../controllers/order.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post("/createorder", placeOrder);
router.get("/myorder", isAuthenticated, getMyOrders);


export default router;

