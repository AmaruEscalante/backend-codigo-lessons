import express from 'express';
import { json } from "body-parser";
import { createServer } from 'http';
import { connect } from 'mongoose';
import { Server as socketio } from 'socket.io';

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.httpServer = new createServer(this.app);
        this.io = new socketio(this.httpServer, { cors: { origin: "*" } }) // Permite el acceso de todos lados
        this.routes();
        this.listenSockets();
        if (typeof Server.instance === "object") {
            console.log("There is an instance already running");
            return Server.instance;
        } else {
            console.log("There isn't a previous instance");
            Server.instance = this;
        }
    }

    bodyParser() {
        this.app.use(json());
    }

    routes() {
        this.app.get("/", (req, res) => {
            res.send("Bienvenido a mi API");
        });
    }

    listenSockets() {
        console.log("Listening to sockets");
        this.io.on("connect", (client) => {
            console.log(`Client ${client.id} has been connected`);
            client.on('cordinates', (data) => {
                console.log(data);
            })
        })
    }

    start() {
        this.httpServer.list(this.port, () => {
            console.log("Server is running");
            connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,

            }).then(() => {
                console.log("DB Connected succesfully");

            })
        })
    }
}


