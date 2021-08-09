//@ts-ignore
import { Router } from "express";
import * as ImagesController from "../controllers/images.controller";

const router = Router();

// Prefix: /images

router.get('/', ImagesController.allImages);
router.get('/images/add', ImagesController.view)
router.post('/images/add', ImagesController.addImage)

export default router;