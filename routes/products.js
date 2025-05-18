const express = require('express');
const router = express.Router();
const products = require('../products');

router.get('/', (req, res) => {    
    try {
        res.json(products);
    } catch (error) {
        console.error('Error in products route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; 