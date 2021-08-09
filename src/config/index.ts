import dotenv from "dotenv"
//@ts-ignore
import cloudinary from "cloudinary"

/* ENVIRONMENT VARIABLES */
if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

export const MONGO_URI = process.env.MONGO_URI || "";
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME || "";
export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY || "";
export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET || "";

/*CONFIG CLOUDINARY*/

//@ts-ignore
cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET
})