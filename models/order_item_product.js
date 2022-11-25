'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_item_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_item_product.init({
    id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'order_item_product',
  });
  return order_item_product;
};