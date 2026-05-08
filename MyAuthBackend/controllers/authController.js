const db = require('../config/db');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


// REGISTER API
exports.register = async (req, res) => {

    // body se data lena
    const { name, email, password } = req.body;

    // password hash karna
    const hashedPassword =
    await bcrypt.hash(password, 10);

    // SQL query
    const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    // database me save
    db.query(
        sql,
        [name, email, hashedPassword],

        (err, result) => {

            if (err) {

                console.log(err);

                return res.send(
                    "Registration Failed ❌"
                );
            }

            res.json({
    message: "User Not Found ❌"
}
            );

        }
    );

};
// LOGIN API
exports.login = (req, res) => {

    // body se data lena
    const { email, password } = req.body;

    // email check query
    const sql =
    "SELECT * FROM users WHERE email=?";

    db.query(

        sql,
        [email],

        async (err, result) => {

            // user nahi mila
            if (
                err ||
                result.length === 0
            ) {

                return res.send(
                    "User Not Found ❌"
                );

            }

            // user data
            const user = result[0];

            // password compare
            const match =
            await bcrypt.compare(
                password,
                user.password
            );

            // wrong password
            if (!match) {

                return res.send(
                    "Wrong Password ❌"
                );

            }

            // JWT token create
            const token =
            jwt.sign(

                { id: user.id },

                process.env.JWT_SECRET,

                { expiresIn: '1h' }

            );

            // success response
            res.json({

                message:
                "Login Success ✅",

                token

            });

        }

    );

};