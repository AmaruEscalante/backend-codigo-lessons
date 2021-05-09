import { Router } from "express";
import * as user_controller from "../controllers/user";

export const user_router = Router();

user_router.route("/users")
    .post(user_controller.createUser);