'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_master', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue:new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue:new Date()
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('role_master');
  }
};