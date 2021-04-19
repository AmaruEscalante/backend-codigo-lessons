import express from "express";

export class Server{
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 8000;

    }    

    startServer(){
        this.app.listen(this.port, ()=>{
            console.log(`Sever running succesfully on: 127.0.0.0:${this.port}`);
        })
    }
}