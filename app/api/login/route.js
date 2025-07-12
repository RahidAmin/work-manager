
import { connectDB } from "@/lib/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

import jwt from 'jsonwebtoken';


export async function POST(request) {


    const { email, password } = await request.json();



    try {
        await connectDB();
        //1.get user
        const user = await User.findOne({
            email: email
        })
        if (user === null) {
            throw new Error("User not found 1")

        }
        console.log(user)


        //2.password check
        const matched = bcrypt.compareSync(password, user.password)
        if (!matched) {
            throw new Error("Password not matched..!!")
        }
        //3.create token
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        },
            process.env.JWT_SECRET
        )
        console.log("token is: ", token)

        const response = NextResponse.json({
            message: "Login Success....",
            success: true,
            user: user.name,
        })

        response.cookies.set("authToken", token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            httpOnly: true,
        })

        return response



    } catch (error) {
        console.log("Catch Error:", error);
        return NextResponse.json({
            message: error.message,
            success: false
        }, { status: 500 })
    }

}