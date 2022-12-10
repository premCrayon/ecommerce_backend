'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerReview.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUID4
    },
    description: {
      type: DataTypes.TEXT
    },
    rating: {
      type: DataTypes.FLOAT
    },
    created_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
    updated_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
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
    modelName: 'CustomerReview',
    tableName: 'customer_review',

  });
  return CustomerReview;
};