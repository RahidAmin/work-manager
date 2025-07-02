import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { User } from "@/models/user";
import { connectDB } from "@/lib/db";
export async function GET(request) {
    connectDB();
    const authToken = request.cookies.get('authToken')?.value;

    const data = jwt.verify(authToken, process.env.JWT_SECRET);
    console.log("data: ", data)
    const user = await User.findById(data._id).select("-password");


    return NextResponse.json(user);
}