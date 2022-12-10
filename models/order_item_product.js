'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItemProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //payment_method
      OrderItemProduct.belongsTo(models.OrderItems, {
        onDelete: "CASCADE",
        foreignKey: "product_id"
      });
    }
  }
  OrderItemProduct.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUID4
    },
    order_id:{
      type: DataTypes.UUID,
    },
    product_id:{
      type: DataTypes.UUID,
    },
    count:{
      type: DataTypes.FLOAT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    created_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
    updated_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
  }, {
    sequelize,
    modelName: 'OrderItemProduct',
    tableName: 'order_item_product',

  });
  return OrderItemProduct;
};