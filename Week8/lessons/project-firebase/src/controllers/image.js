import { uploadFile } from "../utils/FirebaseFileManager";

export const uploadImage = async(req, res) =>{
    try {
        const link = await uploadFile(req.file);
        return res.status(201).json({
            success: true,
            content: link,
            message: "Image uploaded successfully",
        });
    } catch (err) {

        console.log(err)
        return res.status(500).json({
            success: false,
            content: err,
            message: "Error at image upload.",
        });
    }
};