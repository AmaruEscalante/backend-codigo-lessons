import { User } from "../models/user";

export const createUser = async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json({
            success: true,
            content: newUser,
            message: "User created successfully",
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error registering the user",
        });
    }
};