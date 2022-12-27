import {model, Schema} from "mongoose";
import Room from "./room.model";

const employeeSchema = new Schema({
    code: {
        type: String,
        required: [true, 'Please inclue employee code']
    },
    name: {
        type: String,
        required: [true, 'Please include car name']
    },
    age: {
        type: Number,
        required: [true, 'Please include age']
    },
    salary: {
        type: Number,
        required: [true, 'Please include salary']
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
});

const Employee = model('Car', employeeSchema);

export default Employee;