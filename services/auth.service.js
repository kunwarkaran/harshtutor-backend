import User from "../model/user.model.js";

export const findOrCreateGoogleUser = async (profile) => {
  const googleId = profile.id;
  const email = profile.emails?.[0]?.value;
  const name = profile.displayName;
  const avatar = profile.photos?.[0]?.value;

  if (!email) {
    throw new Error("Google account does not have an email");
  }

  let user = await User.findOne({ googleId });

  if (!user) {
    user = await User.create({
      googleId,
      email,
      name,
      avatar,
      provider: "google",
    });
  }

  return user;
};