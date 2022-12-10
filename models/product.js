'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      //created by
      Products.belongsTo(models.UserProfiles, {
        onDelete: "CASCADE",
        foreignKey: "created_by"
      });

      //product image
      Products.hasMany(models.ProductAssets, {
        onDelete: "CASCADE",
        foreignKey: "product_id"
      });

      //product Category
      Products.belongsTo(models.Category, {
        onDelete: "CASCADE",
        foreignKey: "category_id"
      });

      //add cart 
      Products.hasOne(models.AddToCarts, {
        onDelete: "CASCADE",
        foreignKey: "product_id"
      });

      //order items
      Products.hasMany(models.OrderItems, {
          onDelete: "CASCADE",
          foreignKey: "product_id"
        });

    }
  }
  Products.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
      },
      name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
      },
      details:{
        type:DataTypes.TEXT
      },
      serial_no:{
        type:DataTypes.TEXT
      },
      category_id:{
        type: DataTypes.INTEGER,
        // references: { model: 'categoty_master', key: 'id' }
      },
      cost:{
        type:DataTypes.FLOAT,
        allowNull:false
      },
      discount_percentage:{
        type:DataTypes.FLOAT,
        allowNull:false
      },
      brand:{
        type:DataTypes.STRING
      },
      product_weight:{
        type:DataTypes.FLOAT
      },
      stock:{
        type:DataTypes.FLOAT
      },
      is_active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
      },
      unique_no:{
        type:DataTypes.STRING
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue:new Date()
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue:new Date()
      },
      created_by:{
        type: DataTypes.INTEGER,
        references: { model: 'user_profiles', key: 'id' }
      },
    }, {
    sequelize,
    modelName: 'Products',
    tableName:'products'
  });
  return Products;
};