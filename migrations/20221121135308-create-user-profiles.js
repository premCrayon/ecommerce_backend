'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_profiles', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.literal('gen_random_uuid()')
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email_id: {
        type: Sequelize.STRING,
        unique:true
      },
      address: {
        type: Sequelize.TEXT
      },
      mobile_no:{
        type: Sequelize.STRING,
        unique:true
      },
      password:{
        type: Sequelize.STRING
      },
      country_code:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    // await queryInterface.dropTable('user_profiles');
  }
};