const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
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
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userType: {
    type: DataTypes.ENUM('student', 'professional'),
    allowNull: false,
    defaultValue: 'professional'
  },
  settings: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: {
      meetingNotes: {
        defaultTemplate: null,
        systemPrompt: null,
        processingModel: 'gpt-4',
        detailLevel: 'medium',
        sectionMode: true,
        autoSyncToProjects: true,
        autoSyncToPeople: true
      },
      projects: {
        sections: ['timeline', 'goals', 'tasks'],
        detailLevel: 'medium',
        showLineNumbers: true,
        confirmRevert: true,
        systemPrompt: null,
        changeStrictness: 'medium'
      },
      people: {
        showContributions: true,
        aiSummaries: true,
        editAiInsights: true,
        showPeopleInProjects: true,
        trackActionItems: true,
        detailLevel: 'medium',
        revisionTracking: true,
        showLineNumbers: true,
        confirmRevert: true,
        changeStrictness: 'medium'
      }
    }
  }
}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
});

// Instance method to check password
User.prototype.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
