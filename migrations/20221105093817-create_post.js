'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      name: {
        type: sequelize.STRING
      },
      description: {
        type: sequelize.STRING
      },
      post_image: {
        type: sequelize.STRING
      },
      created_by: {
        type: sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};