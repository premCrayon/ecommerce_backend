'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recently_viewed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recently_viewed.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUID4
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
    created_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
    viwed_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
    updated_by:{
      type: DataTypes.UUID,
      references: { model: 'user_profiles', key: 'id' }
    },
    product_id:{
      type: DataTypes.UUID,
      references: { model: 'products', key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'RecentlyViewed',
    tableName:'recently_viewed'
  });
  return recently_viewed;
};