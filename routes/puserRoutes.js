const express = require('express');
const PUser = require('../model/puserModel');
const router = express.Router();

router.post('/plogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const puser = await PUser.findOne({ email, password });

    if (!puser) {
      return res.status(401).json({ message: 'Invalid email or password for patient' });
    }

    res.status(200).json({ message: 'Patient login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;