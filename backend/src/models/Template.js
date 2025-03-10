const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Template = sequelize.define('Template', {
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
  type: {
    type: DataTypes.ENUM('meeting', 'project', 'person'),
    allowNull: false,
    comment: 'Type of template (meeting note, project, or person)'
  },
  structure: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: 'Structure and fields of the template'
  },
  systemPrompt: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Custom system prompt for AI generation'
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  isDefault: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isPublic: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  metadata: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {}
  }
}, {
  timestamps: true
});

module.exports = Template;
