import passport from "passport";
import { Strategy } from "passport-local";
import { student_registrations } from "../database/student_registrations_schema.js";
import { compareHashedPassword } from "../helpers/haspassword.js";

passport.serializeUser((user, done) => {
    done(null,user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await student_registrations.findById(id)
        if (!user) throw new Error("User not found")
        done(null,user)
    } catch (error) {
        done(error,null)
    }
})

export default passport.use(
  new Strategy(
    { usernameField: "addmission", passwordField: "password" },
    async (addmission, password, done) => {
      try {
        const user = await student_registrations.find({ addmission });
        if (!user) throw new Error("invalid index number");
        console.log(user[0]);
        if (!(await compareHashedPassword(password, user[0].password)))
          throw new Error("Wrong Credentials");
        done(null, user[0]);
      } catch (error) {
        done(error.message, null);
      }
    }
  )
); 