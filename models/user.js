const Sequelize = require("sequelize");
const db = require("../util/db");
const bcrypt = require("bcryptjs");

const Ussers = db.define(
  "Ussers",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Ussers",
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10, "a");
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

module.exports = Ussers;
