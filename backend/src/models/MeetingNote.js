const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Meeting = require('./Meeting');

const MeetingNote = sequelize.define('MeetingNote', {
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
  summary: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Executive summary of the meeting'
  },
  outline: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: 'Structured outline of meeting topics and discussions'
  },
  actionItems: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: 'List of action items with assignees and deadlines'
  },
  content: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: 'Full structured content of the meeting notes'
  },
  templateData: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: 'Template-specific data used to generate notes'
  },
  templateId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: 'Reference to the template used, if any'
  },
  format: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'markdown',
    comment: 'Format of the meeting notes (markdown, html, etc.)'
  },
  aiGenerated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  synced: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: 'Whether the notes have been synced to project and people knowledge bases'
  },
  version: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: 'Version number of the notes for revision tracking'
  }
}, {
  timestamps: true
});

module.exports = MeetingNote;
