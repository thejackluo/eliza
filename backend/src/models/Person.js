const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Person = sequelize.define('Person', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: User,
      key: 'id'
    },
    comment: 'If this person is also a user of the system'
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  meetingHistory: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'History of meetings this person has attended'
  },
  contributions: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Key contributions and insights from meetings'
  },
  actionItems: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Action items assigned to this person'
  },
  aiSummary: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'AI-generated summary of this person based on meetings'
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
    comment: 'Custom tags for categorizing the person'
  },
  projects: {
    type: DataTypes.ARRAY(DataTypes.UUID),
    allowNull: true,
    defaultValue: [],
    comment: 'Projects this person is involved in'
  },
  userNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Private notes added by the user'
  },
  networkConnectivity: {
    type: DataTypes.ENUM('low', 'medium', 'high'),
    allowNull: true,
    defaultValue: 'low',
    comment: 'Level of connectivity based on meeting frequency and tones'
  },
  metadata: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {}
  }
}, {
  timestamps: true
});

module.exports = Person;
