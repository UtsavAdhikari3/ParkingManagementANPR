const express = require('express');
const multer = require('multer');
const {
  logEntry,
  logExit,
  searchVehicle,
  getParkingLogs, // Import getParkingLogs for fetching logs
} = require('../controllers/parkingController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Handle image uploads

// Entry endpoint with image upload
router.post('/entry', upload.single('image'), logEntry);

// Exit endpoint
router.post('/exit' , upload.single('image'), logExit);

// Fetch parking logs
router.get('/logs', getParkingLogs); // Add /logs endpoint for fetching parking logs

// Search vehicle by license plate
router.get('/search', searchVehicle);

module.exports = router;
