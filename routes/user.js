const { Router } = require('express');
const User = require('../models/user');

const router = Router();

router.get('/signIn', (req, res) => {
    return res.render('signIn');
});

router.get('/signUp', (req, res) => {
    return res.render('signUp');
});

router.post('/signIn', async(req, res) => {
    const { email, password } = req.body;
    const user = await User.matchPassword(email, password);
    console.log("user", user);
    return res.redirect('/');
})

router.post('/signUp', async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect('/');
});

module.exports = router;
