import { connectDB } from "@/lib/db";
import { getResponseMessage } from "@/lib/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {

    const { userId } = params;

    try {
        const tasks = await Task.find({
            userId: userId
        })
        return NextResponse.json(tasks);
    } catch (error) {
        console.error(error)
        return getResponseMessage('error to getting task', 404, false);
    }



}