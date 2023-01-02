'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CancelledOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        //product
        CancelledOrders.belongsTo(models.Products, {
          onDelete: "CASCADE",
          foreignKey: "product_id"
        });
  
    }
  }
  CancelledOrders.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUID4
    },
    order_id:{
      type: DataTypes.UUID
    },
    product_id:{
      type: DataTypes.UUID
    },
    is_active:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    is_delete:{
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
    }
  }, {
    sequelize,
    modelName: 'CancelledOrders',
    tableName:'cancelled_orders'
  });
  return CancelledOrders;
};