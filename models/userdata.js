import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    githubId: String,
    name: String,
    username: String,
    avatar: String,
    headline: String,
    bio: String,
    location:String,
    isOnboarded:{type: Boolean, default:false},

},{timestamps: true})


export default mongoose.model.user || mongoose.model("User", userSchema)