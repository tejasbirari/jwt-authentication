require('dotenv').config();
const userModel = require('../database/models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async(req, res) => {

    // existing user check
    // hashed password
    // user createion
    // token generation

    const {username, email, password} = req.body;

    try {

        const existingUser = await userModel.findOne({email: email});

        if(existingUser){
            return res.status(400).json({ message: "User already exists"});
        }

        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash( `${password}`, saltRounds);

        const createUser = await userModel.create({
            username: username,
            email: email,
            password: hashedPassword
        })

        const token = jwt.sign( { email: createUser.email, id: createUser._id }, process.env.SECRET_KEY )

        res.status(201).json({ user: createUser, token: token })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong"})
    }

}

const signin = async(req, res) => {

    const {username, password} = req.body;

    try {

        const existingUser = await userModel.findOne({ username: username });
        if(!existingUser){
            return res.status(404).json({ message: "User not found" })
        }

        console.log(password);
        console.log(existingUser.password);

        const matchPassword = await bcrypt.compare(`${password}`, `${existingUser.password}`)

        console.log(matchPassword);

        if(!matchPassword){
            return res.status(400).json({ message: 'Incorrect Password'})
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY);

        res.status(201).json({ user: existingUser.username, token: token })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong"})
    }
}

module.exports = { signup, signin }