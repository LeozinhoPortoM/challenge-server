const db = require("../config/sequelize");
const Sequelize = require("sequelize");

const Car = db.define(
  "Car",
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
    marca: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    year_manufacture: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.STRING(200),
      allowNull: false,
    },
    name_user: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    email_user: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    phone_user: {
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


module.exports = Car;