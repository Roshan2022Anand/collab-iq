import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import User from '@/model/user';

export async function GET() {
    try {
        // Connect to the database
        console.log("GetAllUsers API called");
        
        await connectDB();
        const users = await User.find({}); // Fetch all users with only name and email fields
        const userData = users.map(user => ({
            name: user.name,
            email: user.email
        }));        
        console.log(userData);
        return NextResponse.json({userData}, { status: 200 });
    } catch (error) {
        console.log("error in GetAllUsers");
        return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
    }
}