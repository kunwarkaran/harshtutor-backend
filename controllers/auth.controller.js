import { findOrCreateGoogleUser } from "../services/auth.service.js";
import { generateToken } from "../utils/jwt.utils.js";

export const googleCallback = async (req, res) => {
  try {
    const user = await findOrCreateGoogleUser(req.user);

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });


    res.status(200).json({
      message: "Google authentication successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Authentication failed",
    });
  }
};