const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Meeting = require('./Meeting');

const Transcript = sequelize.define('Transcript', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  meetingId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Meeting,
      key: 'id'
    }
  },
  content: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: 'JSON array of transcript segments with timestamps and speaker info'
  },
  rawTranscriptPath: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'S3 path to raw transcript file'
  },
  processingStatus: {
    type: DataTypes.ENUM('pending', 'diarizing', 'transcribing', 'completed', 'failed'),
    defaultValue: 'pending'
  },
  processingError: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  metadata: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {}
  }
}, {
  timestamps: true
});

module.exports = Transcript;
