const db = require("../config/sequelize");
const Sequelize = require("sequelize");

const User = db.define(
  "User",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    created_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: db.literal("NOW()"),
    },
    updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: db.literal("NOW()"),
    }

  },
  {
    underscored: true,
    timestamps: false
  }

);


module.exports = User;