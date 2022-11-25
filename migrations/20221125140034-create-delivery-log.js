'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('delivery_logs', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.literal('gen_random_uuid()')
      },
      order_id:{
        type: Sequelize.UUID,
        references: { model: 'order_items', key: 'id' }
      },
      description:{
        type:Sequelize.TEXT
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
      created_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      updated_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('delivery_logs');
  }
};