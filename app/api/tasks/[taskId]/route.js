import { connectDB } from "@/lib/db";
import { getResponseMessage } from "@/lib/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";



export async function GET(request, { params }) {

    const { taskId } = params;

    try {

        await connectDB();
        const task = await Task.findById(taskId);
        return NextResponse.json(task)
    } catch (error) {
        console.log(error);
        return getResponseMessage('can not get task', 404, false);
    }

}



export async function PUT(request, { params }) {

    try {
        const { taskId } = params;
        const { title, content, status } = await request.json();
        let task = await Task.findById(taskId);
        task.title = title;
        task.content = content;
        task.status = status;
        await connectDB();

        const updatedTask = await task.save();
        return NextResponse.json(updatedTask);

    } catch (error) {
        console.log(error);
        getResponseMessage('could not put task', 404, false)
    }


}

export async function DELETE(request, { params }) {


    try {

        const { taskId } = params;
        await connectDB();
        await Task.deleteOne({
            _id: taskId
        })

        return NextResponse.json({
            message: 'user deleted',
            success: true
        })

    } catch (error) {
        console.error(error);
        getResponseMessage('could not delete', 404, false)
    }


}