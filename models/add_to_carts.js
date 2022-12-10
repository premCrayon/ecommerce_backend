'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddToCarts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

       //created by
       AddToCarts.belongsTo(models.UserProfiles, {
        onDelete: "CASCADE",
        foreignKey: "created_by"
      });

      //product
       //created by
       AddToCarts.belongsTo(models.Products, {
        onDelete: "CASCADE",
        foreignKey: "product_id"
      });

    }
  }
  AddToCarts.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
    },
    quantity: {
      type: DataTypes.FLOAT
    },
    product_id:{
      type: DataTypes.UUID
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
  }, {
    sequelize,
    tableName: 'add_to_carts',
    modelName:'AddToCarts'
  });
  return AddToCarts;
};