import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://geatstack:30052024@cluster0.wkx5eig.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}