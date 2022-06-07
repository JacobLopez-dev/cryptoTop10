const express = require('express')
const router = express.Router()
const {getGuides, getGuide, createGuide, deleteGuide, updateGuide} = require('../controllers/guideController')
const {protect} = require('../middleware/authMiddleware')

// Create a Guide
router.route('/').post(protect, createGuide)

// All Guides
router.route('/all-guides').get(getGuides)

// Single Guide actions
router.route('/:slug')
    .get(getGuide)
    .delete(deleteGuide)
    .put(protect, updateGuide)

module.exports = router