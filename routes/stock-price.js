const express = require('express');
const router = express.Router();
const stockPriceData = require('../stock-price');

router.get('/:sku', (req, res) => {
    try {
        const sku = req.params.sku;
        const stockPrice = stockPriceData[sku];

    if (!stockPrice) {
            return res.status(404).json({ error: 'SKU not found' });
        }

        res.json(stockPrice);
    } catch (error) {
        console.error('Error in stock-price route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; 