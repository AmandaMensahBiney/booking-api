import {Schema, model} from 'mongoose';
const bookingSchema = new Schema({

    firstName : {
        type: String,
        //required: true
    },

    lastName : {
        type: String,
        //required: true
    },

    sex : {
        type : String,
        enum : {
            values : ['male', 'female']
        }
    },

    seatNumber :{
        type: Number
    },

    email :{
        type: String,
        unique: true,
    },
});

export const booking = model('Booking', bookingSchema)