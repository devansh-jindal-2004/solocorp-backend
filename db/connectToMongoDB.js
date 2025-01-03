import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to db")
    } catch (error) {
        console.log(error.message);
    }
}

export default connectToMongoDB