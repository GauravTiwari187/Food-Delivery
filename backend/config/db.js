import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://GauravTiwari148:Gaurav1234@cluster0.hfotbzs.mongodb.net/food-del'
    );
    console.log("DB Connected ✅");
}