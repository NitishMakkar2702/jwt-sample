const express = require('express')
const router = express.Router()
const {checkUser} = require('./controller')
const jwt = require("jsonwebtoken");

// A demo get route
router.get("/", (req, res) => {
    res.json({
        route: "/",
        authentication: false,
    });
});

router.post("/login", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    let user = await checkUser(name,password)
    if (user.isPresent) {
        const token = jwt.sign(user.user, "secret");
        res.json({
            login: true,
            token: token,
            data: user.user,
        });
    } else {
        res.json({
            login: false,
            error: "please check name and password.",
        });
    }
});

router.get("/auth", (req, res) => {

    const token = req.body.token;
    if (token) {
        const decode = jwt.verify(token, "secret");
        res.json({
            login: true,
            data: decode,
        });
    } else {
        res.json({
            login: false,
            data: "error",
        });
    }
});

module.exports = router