import { Schema, model } from "mongoose";

const phoneSchema = new Schema({
    city_code: Schema.Types.Number,
    number: {
        type: Schema.Types.Number,
        required: true,
    }
},{
    _id: false,
    timestamps: false,
});

const userSchema = new Schema(
    {
        name: {
            required: true,
            type: Schema.Types.String,
            maxlength: 50,
            minlength: 10,
        },
        last_name: {
            required: true,
            type: Schema.Types.String,
        },
        address: Schema.Types.String,
        photo: Schema.Types.String,
        gender: {
            required: true, 
            type: Schema.Types.String,
        },
        phones: [phoneSchema],
    },
    {
        timestamps: false,
    }
);

export const User = model('user', userSchema);