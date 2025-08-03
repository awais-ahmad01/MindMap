const express = require('express');
const router = express.Router();

const { createJournal, getDashboardData, getAllJournals } = require('../controllers/journal-controller');


router.post('/createJournal', createJournal);
router.get('/getDashboardData/:userId', getDashboardData);
router.get('/getAllJournals/:userId', getAllJournals);

module.exports = router;