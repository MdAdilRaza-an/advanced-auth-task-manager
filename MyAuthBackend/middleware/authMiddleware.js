const jwt = require('jsonwebtoken');


// Middleware function
const verifyToken = (req, res, next) => {

    // token read
    const token =
    req.headers.authorization;

    // token check
    if (!token) {

        return res.send(
            "Access Denied ❌"
        );
    }

    try {

        // verify token
        const verified =
        jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // user data save
        req.user = verified;

        // next step
        next();

    } catch (err) {

        res.send(
            "Invalid Token ❌"
        );

    }

};


module.exports = verifyToken;