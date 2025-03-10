const express = require('express');
const multer = require('multer');
const { processAudio } = require('../services/audioProcessing');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }, // Limit file size to 100MB
});

// Endpoint to upload audio and start processing
router.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    const audioBuffer = req.file.buffer;
    const result = await processAudio(audioBuffer);
    res.status(200).json({ message: 'Audio processed successfully', result });
  } catch (error) {
    console.error('Error processing audio:', error);
    res.status(500).json({ error: 'Failed to process audio' });
  }
});

module.exports = router;
