export const getAllBookings = (req, res, next) => {
   res.status(200).json('These are all bookings');
}


export const getOneBooking = (req, res, next) => {
   res.status(200).json('This is the booking');
}