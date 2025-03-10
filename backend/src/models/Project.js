const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
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
  timeline: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Month-by-month timeline of project milestones'
  },
  goals: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Project goals with progress tracking'
  },
  tasks: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Task list in Notion/ClickUp format'
  },
  sections: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
    comment: 'Customizable project sections with content'
  },
  miscellaneous: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
    comment: 'Miscellaneous information that doesn\'t fit elsewhere'
  },
  status: {
    type: DataTypes.ENUM('active', 'completed', 'on-hold', 'archived'),
    defaultValue: 'active'
  },
  metadata: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {}
  }
}, {
  timestamps: true
});

module.exports = Project;
