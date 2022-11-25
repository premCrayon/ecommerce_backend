'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoleMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoleMaster.hasOne(models.UserProfiles, {
        onDelete: "CASCADE",
        foreignKey: "role_id"
      });
    }
  }
  RoleMaster.init({
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue:new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue:new Date()
      }
    }
    , {
    sequelize,
    tableName:'role_master',
    modelName: 'RoleMaster',
  });
  return RoleMaster;
};