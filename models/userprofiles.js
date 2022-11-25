'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserProfiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfiles.belongsTo(models.RoleMaster, {
        // as:"role_master",
        onDelete: "CASCADE",
        foreignKey: "role_id"
      });
    }
  }
  UserProfiles.init({
      id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email_id: {
        type: DataTypes.STRING,
        unique:true
      },
      address: {
        type: DataTypes.TEXT
      },
      mobile_no:{
        type: DataTypes.STRING,
        unique:true
      },
      password:{
        type: DataTypes.STRING
      },
      country_code:{
        type: DataTypes.STRING
      },
      role_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue:Date.now()
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue:Date.now()
      },
    }
    , {
    sequelize,
    tableName:'user_profiles',
    modelName: 'UserProfiles',
  });
  return UserProfiles;
};