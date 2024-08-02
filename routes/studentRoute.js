import { Router } from "express";

import { checkSchema, matchedData, validationResult } from "express-validator";
import { createUserValidation } from "../validationSchema/validation_schema.js";
import { studentRegistrationController } from "../controllers/student_registration.js";
import { studentLoginController } from "../controllers/student_login.js";
import passport from "passport";
import "../strategies/local_strategy.js"

const studentRouter = Router()

studentRouter.post(
  "/student_registrations",
  checkSchema(createUserValidation),
  studentRegistrationController
);

studentRouter.post("/student_login", passport.authenticate("local") ,studentLoginController);


export default studentRouter