'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cancelled_orders', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.literal('gen_random_uuid()')
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
      created_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      updated_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      cancelled_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      order_id:{
        type: Sequelize.UUID,
        references: { model: 'order_items', key: 'id' }
      },
      product_id:{
        type: Sequelize.UUID,
        references: { model: 'products', key: 'id' }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cancelled_orders');
  }
};