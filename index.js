import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { body, matchedData, validationResult } from 'express-validator'
import { student_registrations } from './database/student_registrations_schema.js'


mongoose
  .connect("mongodb://127.0.0.1:27017/albit") 
  .then(() => console.log("connectd"))
  .catch((err) => console.log(err));
 
dotenv.config()
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 

//Save Student to the database

app.post(
  "/api/student_registrations",
  [
    body("first_name")
      .isString()
      .withMessage("Must be a string")
      .notEmpty()
      .withMessage("must not be empty")
      .isLength({ min: 1 })
      .withMessage("word length is short"),
    body("last_name")
      .isString()
      .withMessage("Must be a string")
      .isLength({ min: 1 })
      .withMessage("word length is short"),
    body("middle_name")
      .isString()
      .withMessage("Must be a string")
      .isLength({ min: 1 })
      .withMessage("word length is short"),
    body("password")
      .isString()
      .withMessage("Must be a string")
      .isLength({ min: 1 })
      .withMessage("word length is short"),
    body("addmission")
      .isString()
      .withMessage("Must be a string")
      .isLength({ min: 1 })
      .withMessage("word length is short"),
  ],
  async (req, res) => {
    const results = validationResult(req);

    if (!results.isEmpty()) return res.status(400).json(results.errors);
    const data = matchedData(req);
    const student = new student_registrations(data);
    try {
      const saveStudent = await student.save();
        if (!saveStudent)
        {
            throw new Error("Error ma nigga");
        } else { 
            return res.json({ msg: "OKAY" });
            
            }
    } catch (error) {     
      return res.json({ msg: error.message });
    }

    
  }
);


app.listen(port,()=>console.log(`Server is running on port ${port}`))