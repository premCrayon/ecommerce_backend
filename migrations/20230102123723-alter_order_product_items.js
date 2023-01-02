'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('order_item_products', 'is_active', {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      }),
      queryInterface.addColumn('order_item_products', 'is_delete', {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      }),
    ])
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('order_item_products', 'is_active', {
        type: Sequelize.BOOLEAN
      }),
      queryInterface.removeColumn('order_item_products', 'is_delete', {
        type: Sequelize.BOOLEAN
      }),
    ])
  }
};









