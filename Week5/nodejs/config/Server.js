import express from "express";
import { jobs_router } from "../routers/jobs";

export class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.routes();
    }

    routes() {
        this.app.get("/", (req, res) => {
            res.send("Hello, welcome to my API 😋");
        });

        this.app.use(jobs_router);
    }

    startServer(){
        this.app.listen(this.port, ()=>{
            console.log(`Sever running succesfully on: 127.0.0.0:${this.port}`);
        })
    }
}