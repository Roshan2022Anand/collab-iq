import mongoose from "mongoose";

const StatsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    progress: {
        type: Number,
        required: [true, 'Progress is required'],
    },
    completed: {
        type: Number,
        required: [true, 'Completed is required'],
    },
  
},{strict:false});

// Export the User model, or use the existing one if it already exists
export default mongoose.models.Stats || mongoose.model("Stats", StatsSchema);