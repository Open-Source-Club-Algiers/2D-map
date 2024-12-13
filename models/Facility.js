const mongoose = require('mongoose');

// Define the schema (database table schema) for a facility
const facilitySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true, // Name is mandatory
    },
    longitude: {
        type: Number,
        required: true, // Longitude is mandatory
    },
    latitude: {
        type: Number,
        required: true, // Latitude is mandatory
    },
    type: {
        type: String,
        required: true, // Type is mandatory
        
    },
    floor: {
        type: Number,
        required: true, // Floor is mandatory
    },
});

// Define the task model so we can use it to interact with the facility collection
const Facility = mongoose.model('Facility', facilitySchema);

// Function to add a new facility
const addFacilityModel = async (name, longitude, latitude, type, floor) => {
    const facility = new Facility({
        Name: name,
        longitude: longitude,
        latitude: latitude,
        type: type,
        floor: floor,
    });
    const savedFacility = await facility.save();
    return savedFacility;
};

// Function to get all facilities
const getAllFacilityModel = async () => {
    try {
        const facilities = await Facility.find();  // Fetch all facilities
        return facilities;
    } catch (error) {
        throw new Error('Error fetching facilities: ' + error.message);
    }
};

module.exports = { getAllFacilityModel, addFacilityModel };
