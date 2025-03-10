const User = require('./User');
const Meeting = require('./Meeting');
const Transcript = require('./Transcript');
const MeetingNote = require('./MeetingNote');
const Project = require('./Project');
const Person = require('./Person');
const Template = require('./Template');
const sequelize = require('../config/database');

// User associations
User.hasMany(Meeting, { foreignKey: 'createdBy', as: 'meetings' });
User.hasMany(Project, { foreignKey: 'createdBy', as: 'projects' });
User.hasMany(Person, { foreignKey: 'createdBy', as: 'people' });
User.hasMany(Template, { foreignKey: 'createdBy', as: 'templates' });

// Meeting associations
Meeting.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Meeting.belongsTo(Project, { foreignKey: 'projectId', as: 'project' });
Meeting.belongsTo(Template, { foreignKey: 'templateId', as: 'template' });
Meeting.hasOne(Transcript, { foreignKey: 'meetingId', as: 'transcript' });
Meeting.hasOne(MeetingNote, { foreignKey: 'meetingId', as: 'notes' });

// MeetingAttendee association table
const MeetingAttendee = sequelize.define('MeetingAttendee', {}, { timestamps: true });
Meeting.belongsToMany(Person, { through: MeetingAttendee, as: 'attendees' });
Person.belongsToMany(Meeting, { through: MeetingAttendee, as: 'meetings' });

// Project associations
Project.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Project.hasMany(Meeting, { foreignKey: 'projectId', as: 'meetings' });

// ProjectMember association table
const ProjectMember = sequelize.define('ProjectMember', {
  role: {
    type: sequelize.Sequelize.STRING,
    allowNull: true
  }
}, { timestamps: true });
Project.belongsToMany(Person, { through: ProjectMember, as: 'members' });
Person.belongsToMany(Project, { through: ProjectMember, as: 'projects' });

// Person associations
Person.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Person.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Transcript associations
Transcript.belongsTo(Meeting, { foreignKey: 'meetingId', as: 'meeting' });

// MeetingNote associations
MeetingNote.belongsTo(Meeting, { foreignKey: 'meetingId', as: 'meeting' });
MeetingNote.belongsTo(Template, { foreignKey: 'templateId', as: 'template' });

// Template associations
Template.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Template.hasMany(Meeting, { foreignKey: 'templateId', as: 'meetings' });
Template.hasMany(MeetingNote, { foreignKey: 'templateId', as: 'notes' });

// Export models and associations
module.exports = {
  sequelize,
  User,
  Meeting,
  Transcript,
  MeetingNote,
  Project,
  Person,
  Template,
  MeetingAttendee,
  ProjectMember
};
