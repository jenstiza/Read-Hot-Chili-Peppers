const express = require('express');
const router = express.Router();
const shelfCtrl = require('../../controllers/api/shelf');


router.get('/',  shelfCtrl.getAll);

module.exports = router;