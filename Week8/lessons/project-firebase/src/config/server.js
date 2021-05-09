import express from "express";
import { json } from "body-parser";
import { user_router } from "../routes/user";
import { image_router } from "../routes/image";
import { connect } from "mongoose";

require("dotenv").config();

export class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.bodyParser();
        this.CORS();
        this.logger();
        this.routes();
    }

    CORS(){
        this.app.use((req,res, next)=>{
            // Permitir los origenes (dominios) para que puedan consultar a mi API
            res.header("Access-Control-Allow-Origin", "*");

            res.header("Access-Control-Allow-Header", "Content-Type", "Authorization");

            res.header("Access-Control-Allow-Methods", "GET, POST, PUT")

            next();
        });
    }

    logger(){
        this.app.use((req, res, next)=>{
            console.log('Log');
            next();
        })
    }

    bodyParser(){
        this.app.use(json());
    }

    routes(){
        this.app.use(user_router);
        this.app.use(image_router);
        this.app.get("/", (req, res) => {
        res.send("Bienvenido a mi API 😀");
        });
    }

    start(){
        this.app.listen(this.port, async ()=>{
            console.log(
                `Server succesfully running on port ${this.port}`
            );
            connect(process.env.MONGO_DB, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true,
            })
            .then(()=>{
                console.log('Database connected successfully');
            })
            .catch(err=>{
                console.log(err);
            })

        });
    }
}