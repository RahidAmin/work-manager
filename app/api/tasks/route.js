import { connectDB } from "@/lib/db";
import { getResponseMessage } from "@/lib/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";





///Get all the tasks

export async function GET(request) {

    try {
        await connectDB();
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.error(error)
        return getResponseMessage('error in getting data', 404, false)
    }


}

export async function POST(request) {

    const { title, content, status } = await request.json();

    //fetching logged user id
    const authToken = request.cookies.get('authToken')?.value;
    const data = jwt.verify(authToken, process.env.JWT_SECRET);

    console.log(data._id)
    try {

        const task = new Task({
            title,
            content,
            userId: data._id,
            status

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