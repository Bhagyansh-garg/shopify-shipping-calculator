const express = require('express');
const router = express.Router();
const { calculateShipping } = require('../controllers/shippingController');

router.post('/calculator', async (req, res) => {
  try {
    const { customerAddress } = req.body;
    const result = await calculateShipping(customerAddress);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
