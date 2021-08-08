import dotenv from "dotenv"

if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

export const MONGO_PASS = process.env.MONGO_PASS || "";
export const MONGO_DBNAME = process.env.MONGO_DBNAME || "";
