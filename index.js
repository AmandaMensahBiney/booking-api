import express from 'express';
import { bookingRouter } from './routes/booking-routes.js';
import cors from 'cors'



//create an express app
const app = express();

app.use(cors()) 
//Define routes
app.use(bookingRouter);


//listen for incoming requests
app.listen(3000, function() {
    console.log('App is listening on port 3000')
});