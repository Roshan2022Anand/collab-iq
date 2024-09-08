import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
    },
    qualification: {
        type: String,
        required: [true, 'Qualification is required'],
    },
    field: {
        type: String,
        required: [true, 'Field is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{strict:false});

// Export the User model, or use the existing one if it already exists
export default mongoose.models.User || mongoose.model("User", UserSchema);