'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductAssets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       //product
       ProductAssets.belongsTo(models.Products, {
        onDelete: "CASCADE",
        foreignKey: "id"
      });
    }
  }
  ProductAssets.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUID4
    },
    url:{
      type:DataTypes.TEXT
    },
    is_active:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    product_id:{
      type: DataTypes.UUID,
      references: { model: 'products', key: 'id' }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:Date.now()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:Date.now()
    },
    created_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
    updated_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
    is_delete: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, {
    sequelize,
    modelName: 'ProductAssets',
    tableName:'product_assets'
  });
  return ProductAssets;
};