const express = require('express');
const router = express.Router();
const vtpassService = require('../services/vtpassService');

// POST /order - receive and fulfill order
router.post('/', async (req, res) => {
    try {
        const orderData = req.body;
        // Validate orderData as needed
        // ...existing code...

        // Fulfill order with VTpass
        const vtpassResult = await vtpassService.fulfillOrder(orderData);

        // Respond to frontend
        res.status(200).json({ success: true, data: vtpassResult });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;