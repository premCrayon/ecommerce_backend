'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recently_vieweds', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.literal('gen_random_uuid()')
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
      viwed_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      updated_by:{
        type: Sequelize.UUID,
        references: { model: 'user_profiles', key: 'id' }
      },
      product_id:{
        type: Sequelize.UUID,
        references: { model: 'products', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recently_vieweds');
  }
};