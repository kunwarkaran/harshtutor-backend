import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import "dotenv/config";
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("Google Profile:", profile);

        // Later:
        // 1. Check if user exists in database
        // 2. Create user if user doesn't exist
        // 3. Return user

        return done(null, profile);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;