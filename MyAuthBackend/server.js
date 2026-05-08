const express = require('express');

const cors = require('cors');

const app = express();


// Routes Import
const authRoutes =
require('./routes/authRoutes');

const verifyToken =
require('./middleware/authMiddleware');

const userRoutes =
require('./routes/userRoutes');


// Middleware
app.use(express.json());

app.use(cors());


// Protected Route
app.get(
    '/profile',

    verifyToken,

    (req, res) => {

        res.json({

            message:
            "Welcome Protected Route 🔐",

            user:
            req.user

        });

    }
);


// Routes Use
app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes);


// Default Route
app.get('/', (req, res) => {

    res.send("API Running ✅");

});


// Server Start
app.listen(3000, () => {

    console.log(
        "Server Running ✅"
    );

});