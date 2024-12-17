const express = require('express');
const router = express.Router();
const facilityController = require('../controllers/facility');

// Get all facilities
router.get('/', facilityController.getAllFacilities);

// Add a new facility
router.post('/', facilityController.addFacility);

// Search facilities
router.post('/search', facilityController.searchFacilities);

router.post('/api/facilities/search', facilityController.searchFacilities);


router.get('/:id', facilityController.getFacilityById);



module.exports = router;
