'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeliveryStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DeliveryStatus.hasOne(models.OrderItems, {
        onDelete: "CASCADE",
        foreignKey: "delivery_status"
      });
    }
  }
  DeliveryStatus.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    is_delete: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
  }, {
    sequelize,
    modelName: 'DeliveryStatus',
    tableName:'delivery_status'
  });
  return DeliveryStatus
  ;
};