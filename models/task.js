import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status:
    {
        type: String,
        enum: ["pending", "completed", "just-added"],
        default: "pending"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

})

export const Task = mongoose.models.task || mongoose.model('task', TaskSchema);
