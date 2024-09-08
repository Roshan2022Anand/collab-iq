import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import User from '@/model/user';
import Stats from '@/model/stats';

export async function POST(request) {
    try {
        // Connect to the database
        await connectDB();
        const { userEmail } = await request.json();
        await User.findOneAndDelete({ email: userEmail });
        await Stats.findOneAndDelete({ email: userEmail });
        return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting user" }, { status: 500 });
    }
}