'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categoty_master', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      product_no: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Date.now()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Date.now()
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
    // await queryInterface.dropTable('categoty_master');
  }
};