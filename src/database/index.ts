import mongoose from "mongoose";
import { MONGO_URI } from "../config";

const connection = async () => {
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export default connection;