import { connectDB } from "@/lib/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

//get single user
export async function GET(response, { params }) {
    await connectDB();

    const { userId } = params;
    const user = await User.findById(userId);

    return NextResponse.json(user);
}





//delete user
export async function DELETE(response, { params }) {

    console.log(params);
    const { userId } = params;
    // const userId = params.userId;

    try {
        await User.deleteOne(
            {
                _id: userId
            }
        )
        return NextResponse.json({
            message: "user deleted",
            success: true
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'error in deleting user',
            success: false
        })
    }

    // console.log("User id: ", userId)

}


//Update user

export async function PUT(request, { params }) {

    const { userId } = params;
    const { name, password, about, imageUrl } = await request.json();

    try {
        const user = await User.findById(userId);
        user.name = name;
        user.password = password;
        user.about = about;
        user.imageUrl = imageUrl;
        await connectDB();
        const updatedUser = await user.save();
        return NextResponse.json(updatedUser)

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to update user",
            success: false
        })
    }

}