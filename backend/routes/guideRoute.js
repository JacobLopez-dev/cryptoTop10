const express = require('express')
const router = express.Router()
const {getGuides, getGuide, createGuide, deleteGuide, updateGuide} = require('../controllers/guideController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').post(protect, createGuide)

router.route('/all-guides').get(getGuides)

router.route('/:slug')
    .get(getGuide)
    .delete(deleteGuide)
    .put(protect, updateGuide)

module.exports = router