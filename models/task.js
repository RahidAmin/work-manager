import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true
    }

})
