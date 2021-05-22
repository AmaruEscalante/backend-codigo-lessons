import { Schema, model } from "mongoose";

const coordinatesSchema = new Schema(
    {
        x: {
            type: Schema.Types.Decimal128,
            required: true,
        },
        y: {
            type: Schema.Types.Decimal128,
            required: true,
        },
    },
    {_id: false, timestamps: false}
);

const userSchema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true,
        },
        coordinates: [coordinatesSchema],
    },
    { timestamps: false }
)