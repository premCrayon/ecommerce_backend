'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       //created by
       OrderItems.belongsTo(models.UserProfiles, {
        onDelete: "CASCADE",
        foreignKey: "created_by"
      });

       //created by
       OrderItems.belongsTo(models.UserProfiles, {
        onDelete: "CASCADE",
        foreignKey: "booked_by"
      });

      //delivery status
      OrderItems.belongsTo(models.DeliveryStatus, {
        onDelete: "CASCADE",
        foreignKey: "delivery_status"
      });

       //payment_method
       OrderItems.belongsTo(models.PaymentMethods, {
        onDelete: "CASCADE",
        foreignKey: "payment_method"
      });

      //payment_method
      OrderItems.belongsTo(models.PaymentStatus, {
        onDelete: "CASCADE",
        foreignKey: "payment_status"
      });

      //order product
      OrderItems.hasMany(models.OrderItemProduct, {
        onDelete: "CASCADE",
        foreignKey: "order_id"
      });
    }
  }
  OrderItems.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
    },
    quantity: {
      type: DataTypes.FLOAT
    },
    created_by:{
      type: DataTypes.UUID,
    },
    updated_by:{
      type: DataTypes.UUID,
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
    delivery_address:{
      type: DataTypes.TEXT,
    },
    shipping_address:{
      type: DataTypes.TEXT,
    },
    delivery_date:{
      type: DataTypes.DATE,
    },
    booked_by:{
      type: DataTypes.UUID,
    },
    delivery_status:{
      type: DataTypes.INTEGER,
    },
    payment_method:{
      type: DataTypes.INTEGER,
    },
    payment_status:{
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'OrderItems',
    tableName: 'order_items',

  });
  return OrderItems;
};