const express = require('express');
const crypto = require('crypto');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

const numberCrypto = () => crypto.randomBytes(8).toString('hex');

router.post('/', validateLogin, async (_req, res) => {
  try {
    return res.status(200).json({ token: numberCrypto() });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;