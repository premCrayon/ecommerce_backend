'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('users', 'profile_image', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('users', 'mobile_no', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('users', 'country_code', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('users', 'email_id', {
        type: Sequelize.STRING,
        unique: true
      }),
      queryInterface.addColumn('users', 'user_name', {
        type: Sequelize.STRING,
        unique: true,
      }),
      queryInterface.addColumn('users', 'first_name', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('users', 'last_name', {
        type: Sequelize.STRING,
      }),
    ])
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};









