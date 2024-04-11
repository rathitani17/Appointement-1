import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const generateToken = (user) => {
    console.log(process.env.JWT_SECRET_KEY);
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d",

    })
}

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;
    try {
        let user = null;

        if (role === "patient") {
            user = await User.findOne({ email });
        } else if (role === "doctor") {
            user = await Doctor.findOne({ email });
        }
        // check if user exist

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        // hash password

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        let newUser; // Declare a new variable to store the user document

        if (role === "patient") {
            newUser = new User({
                email,
                password: hashPassword,
                name,
                photo,
                gender,
                role
            });
        } else if (role === "doctor") {
            newUser = new Doctor({
                email,
                password: hashPassword,
                name,
                photo,
                gender,
                role
            });
        }

        await newUser.save(); // Save the new user document

        return res.status(200).json({ success: true, message: "User created successfully" });

    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        return res.status(500).json({ success: false, message: "Internal server error, Try again" });
    }
};

export const login = async (req, res) => {
    console.log(req);
    const { email } = req.body;
    console.log(email);
    try {
        let user = null
        const patient = await User.findOne({ email });
        console.log(patient);
        const doctor = await Doctor.findOne({ email });
        if (patient) {
            user = patient
        }
        if (doctor) {
            user = doctor
        }
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        console.log(isPasswordMatch);
        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const token = generateToken(user);
        const { password, role, appointments, ...rest } = user._doc
        return res.status(200).json({ success: true, message: "Successfully logged in", token, data: { ...rest }, role });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ success: false, message: "Failed to login" });
    }
};
