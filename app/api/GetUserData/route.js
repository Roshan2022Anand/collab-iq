import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import User from '@/model/user';
import Stats from '@/model/stats';

export async function POST(request) {
    try {
        // Connect to the database
        await connectDB();
        const { userEmail } = await request.json();
        const user = await User.findOne({ email: userEmail });
        const stats = await Stats.findOne({ email: userEmail });
        return NextResponse.json({ user, stats }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error adding user" }, { status: 500 });
    }
}