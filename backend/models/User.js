import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  plan: { type: String, default: "free" },
  youtubeChannelId: String,
  instagramToken: String,
  tiktokToken: String,
});

export default mongoose.model("User", UserSchema);
