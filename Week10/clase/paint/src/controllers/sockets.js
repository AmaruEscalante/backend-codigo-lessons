import Server from '../config/server';
import { User } from "../models/user";

export const inputCoordinate = async(data) =>{
    // I create the instance of my server, and due to Singleton pattern it will be created only once
    const objServer = new Server();
    // extract the client info sent from the socket.
    const { x,y, user_name} = data;
    const {coordinates } = await User.findOne({
        name: user_name});
    coordinates.push(
        {
            x,y,
        }
    );

    await User.findOneAndUpdate({ name: user_name}, {coordinates});
    //
}