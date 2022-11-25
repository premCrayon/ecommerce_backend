'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  delivery_status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'delivery_status',
  });
  return delivery_status;
};