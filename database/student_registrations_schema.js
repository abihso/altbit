import mongoose from "mongoose";


const student_registration = new mongoose.Schema({
    first_name: {
        type: mongoose.Schema.Types.String,
        required: true,
        
    },
    last_name: {
        type: mongoose.Schema.Types.String,
        required: true,
        
    },
    middle_name: {
        type: mongoose.Schema.Types.String,
        required: true,
        
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
        
    },
    addmission: {  
        type: mongoose.Schema.Types.String,
        required: true,
        unique:true
        
    },
    DOB: {
        type: mongoose.Schema.Types.String,
        
        
    },
},
{timestamps:true}
)

export const student_registrations = mongoose.model("registerStudent",student_registration)