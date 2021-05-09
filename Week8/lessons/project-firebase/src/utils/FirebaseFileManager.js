import { Storage } from "@google-cloud/storage";

const storage = new Storage({
    projectId: "codigo-project",
    keyFilename: "./firebase-cred.json",

});

// create the storage instance

const bucket = storage.bucket("codigo-project.appspot.com")

export const uploadFile = (file) => {
    return new Promise((resolve, reject)=>{
        // validate that file is uploaded
        if(!file) return reject("File wasn't found");
        // define the name which the file will be stored in firebase
        const fileName = bucket.file(file.originalname);
        // additional config such as extension and format
        const blobStream = fileName.createWriteStream({
            metadata:{
                contentType: file.mimeType,
            },
        });
        // upload process generates a second plane through which states can be controlled
        blobStream.on("error", (error)=>{
            // if file has a problem uploading to firebase
            return reject(error);
        });
        blobStream.on("finish", ()=>{
            // if file finishes uploading successfully
            fileName.getSignedUrl({
                action: "read",
                expires: "12-31-2021",
            })
            .then((link)=>{
                return resolve(link);
            })
            .catch((error)=>{
                return reject(error);
            });
        });
        // end the process of firebase connection
        // then we sendthe file content
        // This is the beginning and the end of the connection with firebase after that
        blobStream.end(file.buffer);
    });

}