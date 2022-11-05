"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  users.init(
    {
      profile_image: {
        type: DataTypes.STRING,
      },
      mobile_no: {
        type: DataTypes.STRING,
      },
      country_code: {
        type: DataTypes.STRING,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email_id: {
        type: DataTypes.STRING,
        unique: true
      },
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
    }
  );
  return users;
};