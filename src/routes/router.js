const express = require('express');
const method = {} = require('../controllers/itemsController');

const router = express.Router();

router.get('/api/items', method.searchItems);
router.get('/api/items/:itemId', method.searchItem);

module.exports = router;
