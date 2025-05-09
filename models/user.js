import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        // required:true
        required: [true, "Email required"],

    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
    about: String,
    imageUrl: String,
    // address: {
    //     street: String,
    //     city: String,
    //     country: String,
    //     pinCode: Number,
    // }
})

export const User = mongoose.models.workManagerUsers || mongoose.model("workManagerUsers", userSchema);