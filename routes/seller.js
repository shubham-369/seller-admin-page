const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/seller');

router.post('/index',sellerController.postData);
router.get('/index',sellerController.getData);
router.delete('/index', sellerController.deleteData);
router.get('/',sellerController.app);

module.exports = router;