import { Request, Response } from "express"

export const addImage = async (req: Request, res: Response) => {
    
    return res.render("image_form");
}