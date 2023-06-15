import express from "express";
import cors from "cors";

const app = express();


// Set up middleware
app.use(cors());
app.use(express.json)

// Set up routes and APIs


// Start the server
const PORT = 6000;
app.listen (PORT, ()=>{
    console.log(`App is listenning on port ${PORT}`)
})