
import { Router } from 'express'
import { getAllBookings } from '../controllers/booking-controllers.js'
import { getOneBooking } from '../controllers/booking-controllers.js'


 export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)
bookingRouter.get('/bookings/:id', getOneBooking)