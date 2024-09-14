import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import User from '@/model/user';
import Stats from '@/model/stats';

export async function POST(request) {
    console.log("post request done");
    
    try {
        // Connect to the database
        await connectDB();

        const { userName, userAge, userQualification, userField, userEmail } = await request.json();
        if (userEmail) {
            return NextResponse.json({ message: 'Email already exists. Please use a different email.' });
        }
        //adding user basic details to DB
        const newUser = new User({
            name: userName,
            email: userEmail,
            age: userAge,
            qualification: userQualification,
            field: userField,
            bio: "..",
            createdAt: new Date()
        });
        await newUser.save();

        //adding user stats to DB
        const newStats = new Stats({ email: userEmail, progress: 0, completed: 0 });
        await newStats.save();

        return NextResponse.json({ message: "User added successfully" }, { status: 200 });
    } catch (error) {
        console.log("error in AddUser", error);
        
        return NextResponse.json({ message: "Error adding user" }, { status: 500 });
    }
}