import mongoose from "mongoose";
import { User } from "@/models/user";

export const connectDB = async () => {
    try {

        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'work_manager',
        })
        console.log('db connected...');
        console.log('connectec with host: ', connection.host);


        //testing and creating new user
        // const user = new User({
        //     name: 'test name',
        //     email: 'test@email.com',
        //     password: 'test password',
        //     about: 'this is testing'
        // })

        // await user.save();
        // console.log('user is created')


    } catch (error) {
        console.error(error);
    }
}