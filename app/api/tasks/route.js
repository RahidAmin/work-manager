import { connectDB } from "@/lib/db";
import { getResponseMessage } from "@/lib/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";


connectDB();



///Get all the tasks

export async function GET(request) {

    try {

        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.error(error)
        return getResponseMessage('error in getting data', 404, false)
    }


}

export async function POST(request) {

    const { title, content, userId } = await request.json();

    try {

        const task = new Task({
            title,
            content,
            userId
        });

        const createdTask = await task.save()

        return NextResponse.json(createdTask, {
            status: 201
        })

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to create Task..",
            success: false
        })
    }


}