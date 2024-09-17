import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import User from '@/model/user';

export async function POST(request) {
    console.log("post request done");

    try {
        // Connect to the database
        await connectDB();
        //  { userName, userAge, userQualification, userField, userEmail })
        const { userName, userAge, userQualification, userField, userEmail, userBio } = await request.json();
        //adding user basic details to DB
        const user = await User.findOneAndUpdate({ email: userEmail }, { name: userName, age: userAge, qualification: userQualification, field: userField, bio: userBio }, { new: true, runValidators: true })

        if (!user) return NextResponse.json({message: 'User not found' }, { status: 404 });

        return NextResponse.json({ message: "User updated successfully",data:user }, { status: 200 });
    } catch (error) {
        console.log("error in update user", error);
        return NextResponse.json({ message: "Error adding user",error:error.message }, { status: 500 });
    }
}