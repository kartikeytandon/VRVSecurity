const express = require('express');
const { createRole } = require('../controllers/roleController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/roles', authenticate, authorize(['Admin']), createRole);

module.exports = router;