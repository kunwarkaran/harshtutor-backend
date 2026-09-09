import { Router } from "express";
import passport from "../config/passport.js";
import { googleCallback } from "../controllers/auth.controller.js";

const router = Router();

router.get('/login',(req,res) => {
    res.status(200).json({"message" : "This is the auth route"})
})

// Start google authentication

// Start Google Authentication
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google redirects here after login
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/api/auth/login",
  }),
  googleCallback
);

export default router;
