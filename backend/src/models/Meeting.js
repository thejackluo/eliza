const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Meeting = sequelize.define('Meeting', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  duration: {
    type: DataTypes.INTEGER, // Duration in seconds
    allowNull: true
  },
  recordingUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  recordingType: {
    type: DataTypes.ENUM('zoom', 'teams', 'meet', 'physical', 'upload'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('scheduled', 'recording', 'processing', 'completed', 'failed'),
    defaultValue: 'scheduled'
  },
  templateId: {
    type: DataTypes.UUID,
    allowNull: true
  },
  projectId: {
    type: DataTypes.UUID,
    allowNull: true
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  audioPath: {
    type: DataTypes.STRING,
    allowNull: true
  },
  microphoneAudioPath: {
    type: DataTypes.STRING,
    allowNull: true
  },
  desktopAudioPath: {
    type: DataTypes.STRING,
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

// Associations will be established in a separate file that handles all associations

module.exports = Meeting;
