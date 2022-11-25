'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  delivery_log.init({
    id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'delivery_log',
  });
  return delivery_log;
};