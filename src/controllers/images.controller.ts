//@ts-ignore
import { Request, Response } from "express"
import Photo from "../database/models/Photo";
//@ts-ignore
import fs from "fs-extra";
//@ts-ignore
import cloudinary from "cloudinary"

/*-------------------------------------------------------------*/

export const allImages = async(req: Request, res: Response) => {
    const photos = await Photo.find();

    console.log(photos)
    return res.render('images', {
        photos
    })
}

export const view = async (req: Request, res: Response) => {
    const photos = await Photo.find();
    return res.render("image_form", { photos });
}


export const addImage = async (req: Request, res: Response) => {
    
    const { title, description } = req.body;

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPhoto = new Photo({
        title,
        description,
        imageURL: result.secure_url,
        public_id: result.public_id
    });

    await newPhoto.save()

    await fs.unlink(req.file.path)

    res.json({ message: "Success" })
}