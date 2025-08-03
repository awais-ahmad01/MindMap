const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyToken, verifyEmail, resendVerificationEmail } = require('../controllers/auth-controller');

router.post('/register', registerUser); 
router.post('/login', loginUser);
router.get('/verifyToken', verifyToken);
router.get('/verifyEmail', verifyEmail);
router.post('/resendVerification', resendVerificationEmail)

module.exports = router;