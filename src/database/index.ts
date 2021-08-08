import mongoose from "mongoose";
import { MONGO_PASS, MONGO_DBNAME } from "../config";

const connection = async () => {
    mongoose.connect(`mongodb+srv://admin:${MONGO_PASS}@yeisonbd.c7sxh.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export default connection;