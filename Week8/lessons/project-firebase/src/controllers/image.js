import { uploadFile, deleteFile } from "../utils/FirebaseFileManager";

export const uploadImage = async(req, res) =>{
    try {
        const link = await uploadFile(req.file);
        console.log(req.file);
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

export const deleteImage = async (req, res)=>{
    console.log(req.query);
    const { image } = req.query;
    // return res.json({
    //     success: true,
    // });
    try {
        const response = await deleteFile(image);
        console.log(response);
        return res.status(200).json({
            success: true,
            content: response,
            message: "Image deleted succesfully",
        })
    } catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error at image deletion.",
        });
    }
};