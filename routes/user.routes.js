import { Router } from "express";

const router = Router();

router.get('/',(req,res) => {
    res.status(200).json({"message" : "This is the auth route"})
})

router.post('/',(req,res) => {
    res.status(201).json({
        "data" : ""
    })
})

export default router;
