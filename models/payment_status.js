'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentStatus.hasOne(models.OrderItems, {
        onDelete: "CASCADE",
        foreignKey: "payment_status"
      });
    }
  }
  PaymentStatus.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    is_delete: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
   }, {
    sequelize,
    modelName: 'PaymentStatus',
    tableName: 'payment_status',

  });
  return PaymentStatus;
};