const UserSchema = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send("username and password are required");
        return;
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new UserSchema({ username, password: hashedPassword })
    await newUser.save().then(() => {
        res.send(`Account created successfully! Welcome aboard ${newUser.username} Log in to get started.`)
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = registerUser;