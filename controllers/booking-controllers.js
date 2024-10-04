import { BookingModel } from "../models/booking-model.js";

export const getAllBookings = async (req, res, next) => {

   try {
      const bookings = await BookingModel.find();
      res.status(200).json(bookings);
   } catch (error) {
      next (error)
      
   }
}


export const getOneBooking = (req, res, next) => {
   res.status(200).json('This is the booking');
}

export const postBooking = async (req, res, next) => {
   try {
      const newBooking = new BookingModel(req.body);
      const bookings = await newBooking.save()
      console.log('request', req)
   
      res.status(201).json("Booking was added!")
   } catch (error) {
      next(error);
      
   }
};

export const updateBooking = (req, res, next) =>{
res.status(200).json('update a booking')
}

export const deleteBooking = (req, res, next) =>{
   res.status(200).json ('delete a booking')
}