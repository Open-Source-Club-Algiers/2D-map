const { getAllFacilityModel, addFacilityModel, searchFacilitiesModel, getFacilityByIdModel } = require('../models/facility');

// Controller to get all facilities
exports.getAllFacilities = async (req, res) => {
    try {
        const facilities = await getAllFacilityModel();
        res.status(200).json(facilities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to add a new facility
exports.addFacility = async (req, res) => {
    const { name, longitude, latitude, type, floor } = req.body;

    if (!name || !longitude || !latitude || !type || !floor) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newFacility = await addFacilityModel(name, longitude, latitude, type, floor);
        res.status(201).json(newFacility);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.searchFacilities = async (req, res) => {
    const { searchTerm } = req.body;

    if (!searchTerm) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const facilities = await searchFacilitiesModel(searchTerm);
        res.status(200).json(facilities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to get a facility by ID
exports.getFacilityById = async (req, res) => {
    const { id } = req.params;

    try {
        const facility = await getFacilityByIdModel(id);
        if (!facility) {
            return res.status(404).json({ message: 'Facility not found' });
        }
        res.status(200).json(facility);
    } catch (err) {
        res.status(500).json({ message: 'Invalid ID format or server error' });
    }
};

