'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('add_to_carts', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('add_to_carts');
  }
};