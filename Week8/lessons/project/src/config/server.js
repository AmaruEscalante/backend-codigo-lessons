import express from "express";
import { json } from "body-parser";

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
    this.app.get("/", (req, res) => {
      res.send("Bienvenido a mi API 😀");
    });
    }

    start(){
        this.app.listen(this.port, ()=>{
            console.log(
                `Server succesfully running on port ${this.port}`
            );
        });
    }
}