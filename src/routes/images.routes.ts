import { Router } from "express";
import * as ImagesController from "../controllers/images.controller";

const router = Router();

// Prefix: /images

router.get('/add', ImagesController.addImage)
router.post('/add', ImagesController.addImage)

export default router;