'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('user_profiles', 'role_id', {
        type: Sequelize.INTEGER,
         references: { model: 'role_master', key: 'id' }
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









