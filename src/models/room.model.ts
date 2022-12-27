// import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

const Room = mongoose.model('Room', roomSchema);

export default Room;