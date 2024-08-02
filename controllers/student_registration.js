import { student_registrations } from "../database/student_registrations_schema.js";
import { hasspassword } from "../helpers/haspassword.js";
import { validationResult,matchedData } from "express-validator";

export const studentRegistrationController = async (req, res) => { 
  const results = validationResult(req);

  if (!results.isEmpty()) return res.status(400).json(results.errors);
  let data = matchedData(req);
  data.password = await hasspassword(data.password);
  const student = new student_registrations(data);
  try {
    const saveStudent = await student.save();
    if (!saveStudent) {
      throw new Error("Error");
    } else {
      return res.json({ msg: "OKAY" }); 
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};