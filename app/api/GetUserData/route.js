import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import User from '@/model/user';
import Stats from '@/model/stats';

export async function POST(request) {
    try {
        // Connect to the database
        console.log("GetUserData API called");
        
        await connectDB();
        const { tempUserEmail } = await request.json();        
        const user = await User.findOne({ email: tempUserEmail});
        const stats = await Stats.findOne({ email: tempUserEmail });
        return NextResponse.json({ user, stats }, { status: 200 });
    } catch (error) {
        console.log("error in GetUserData");
        return NextResponse.json({ message: "Error adding user" }, { status: 500 });
    }
}