import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import session from 'express-session'
import studentRouter from './routes/studentRoute.js'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'



mongoose
  .connect("mongodb://127.0.0.1:27017/albit") 
  .then(() => console.log("connectd"))
  .catch((err) => console.log(err));
 
dotenv.config()
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 
//app.use(CookieParser())
app.use(cookieParser())
app.use(session({
    secret: "wb0sha7ds932shj4j2",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge : 6000 * 60
    },
    store: MongoStore.create({
        client:mongoose.connection.getClient()
    })
}))
app.use(passport.initialize())
app.use(passport.session())

///Student Routes
app.use("/api",studentRouter)





app.listen(port,()=>console.log(`Server is running on port ${port}`))