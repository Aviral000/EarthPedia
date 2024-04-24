const CatchAsync = require("../utils/CatchAsync");
const httpStatus = require("http-status");
const { signing, logging } = require("../services/user.service");

const signup = CatchAsync(async (req, res) => {
    const { name, email, password, address } = req.body;

    const userData = {
        name,
        email,
        password,
        address
    };

    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    const registerUser = await signing(userData);

    return res.send(registerUser);
});

const login = CatchAsync(async (req, res) => {
    const { email, password } = req.body;

    const userData = { email, password };

    const registeredUser = await logging(userData);
    return res.send(registeredUser);
});

module.exports = { signup, login }