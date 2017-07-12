'use strict';

var Sequelize = require('sequelize');

var db = require('../../_db');

var Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  paragraphs: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  }
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('user'),
        as: 'author'
      }]
    })
  }
});

module.exports = Story;
