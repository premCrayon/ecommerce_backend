'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       PaymentMethods.hasOne(models.OrderItems, {
        onDelete: "CASCADE",
        foreignKey: "payment_method"
      });
    }
  }
  PaymentMethods.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      method: {
        type: DataTypes.STRING
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
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
    modelName: 'PaymentMethods',
    tableName:'payment_methods'
  });
  return PaymentMethods;
};