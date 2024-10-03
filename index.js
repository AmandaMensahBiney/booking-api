import express from 'express';
import { bookingRouter } from './routes/booking-routes.js';


//create an express app
const app = express();

//Define routes
app.use(bookingRouter);


//listen for incoming requests
app.listen(3000, function() {
    console.log('App is listening on port 3000')
});