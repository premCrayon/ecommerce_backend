'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recently_viewed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recently_viewed.init({
    id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'recently_viewed',
  });
  return recently_viewed;
};