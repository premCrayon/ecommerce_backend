'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add_to_carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  add_to_carts.init({
    quantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'add_to_carts',
  });
  return add_to_carts;
};