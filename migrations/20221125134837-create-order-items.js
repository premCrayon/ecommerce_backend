'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_items', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.literal('gen_random_uuid()')
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      product_id:{
        type: Sequelize.UUID,
        references: { model: 'products', key: 'id' }
      },
      created_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      updated_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      delivery_address:{
        type: Sequelize.TEXT,
      },
      shipping_address:{
        type: Sequelize.TEXT,
      },
      delivery_date:{
        type: Sequelize.DATE,
      },
      booked_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      delivery_status:{
        type: Sequelize.INTEGER,
        references: { model: 'delivery_status', key: 'id' }
      },
      payment_method:{
        type: Sequelize.INTEGER,
        references: { model: 'payment_method', key: 'id' }
      },
      payment_status:{
        type: Sequelize.INTEGER,
        references: { model: 'payment_status', key: 'id' }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_items');
  }
};