import { Router } from "express";
import * as image_controller from "../controllers/image";
import Multer from "multer";

// Config multer middleware
const multer = Multer({
    storage: Multer.memoryStorage(), // this option indicates that file will be shortly stored in the RAM and not in the server
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})

export const image_router = Router();

image_router.route("/uploadImage")
    .post(multer.single("image"),image_controller.uploadImage);