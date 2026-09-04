import { Router } from "express";

import authRouter from './auth.route.js'
import userRouter from './user.routes.js'
import chatRouter from './chat.routes.js'
import { authMiddleWare } from "../middlerware/auth.middleware.js";

const router = Router();

router.use("/auth",authRouter)
//router.use(authMiddleWare)
router.use("/user",userRouter)
router.use("/chat",chatRouter)
export default router;