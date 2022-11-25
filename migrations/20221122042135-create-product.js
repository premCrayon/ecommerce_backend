'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.literal('gen_random_uuid()')
      },
      name:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      details:{
        type:Sequelize.TEXT
      },
      serial_no:{
        type:Sequelize.TEXT
      },
      category_id:{
        type: Sequelize.INTEGER,
        references: { model: 'categoty_master', key: 'id' }
      },
      cost:{
        type:Sequelize.FLOAT,
        allowNull:false
      },
      discount_percentage:{
        type:Sequelize.FLOAT,
        allowNull:false
      },
      brand:{
        type:Sequelize.STRING
      },
      product_weight:{
        type:Sequelize.FLOAT
      },
      stock:{
        type:Sequelize.FLOAT
      },
      is_active:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};