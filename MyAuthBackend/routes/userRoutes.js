const express = require('express');

const router = express.Router();


// CREATE
router.post('/create', (req, res) => {

    const { name, email } = req.body;

    res.json({

        message: "User Created ✅",

        user: {
            name,
            email
        }

    });

});


// READ
router.get('/all', (req, res) => {

    res.json({

        message: "All Users"

    });

});


// UPDATE
router.put('/update/:id', (req, res) => {

    res.json({

        message: "User Updated ✅"

    });

});


// DELETE
router.delete('/delete/:id', (req, res) => {

    res.json({

        message: "User Deleted ✅"

    });

});


module.exports = router;