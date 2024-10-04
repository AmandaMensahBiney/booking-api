import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import { bookingRouter } from './routes/booking-routes.js';
import cors from 'cors'

await mongoose.connect(process.env.MONGO_URI);


//create an express app
const app = express();

const PORT = 3000


app.use(cors());
//Define routes
app.use(express.json());
app.use(bookingRouter)


//listen for incoming requests
app.listen(PORT,() => {
    console.log('App is listening on port 3000')
})