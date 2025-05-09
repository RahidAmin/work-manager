import { connectDB } from "@/lib/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"

connectDB();

export async function GET(response) {
    let users = [];


    try {

        users = await User.find().select("-password");

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to get users",
            success: false
        })
    }


    // const users = [
    //     {
    //         name: 'rahid amin',
    //         phone_no: '012345',
    //         course: 'javaScript'
    //     },
    //     {
    //         name: 'mujibul haque',
    //         phone_no: '012345',
    //         course: 'bangla'
    //     },
    //     {
    //         name: 'mota shanto',
    //         phone_no: '012345',
    //         course: 'english'
    //     }
    // ]
    return NextResponse.json(users);
}



//Create user
export async function POST(request) {

    //fetch user details from request

    const { name, email, password, about, imageUrl } = await request.json();

    //create user object with user model

    const user = new User({
        name, email, password, about, imageUrl
    })

    try {

        const createdUser = await user.save();

        const response = NextResponse.json(createdUser, {
            status: 201
        })
        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: 'Failed to fetch user',
            status: false
        })
    }


    // const body = request.body;
    // console.log(body);
    // console.log(request.method)
    // console.log(request.headers)
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextUrl.searchParams);

    //it returns promise
    // const jsonData = await request.json()
    // const textData = await request.text();
    // console.log(jsonData);
    // console.log(textData);

    // return NextResponse.json({
    //     "message": 'this is post from user'
    // })
}


//url veriable
