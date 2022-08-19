const Sequelize = require("sequelize");
const db = require("../util/db");
const Photos = require("./photos");

const Captions = db.define("Captions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  PhotoId: {
    type: Sequelize.INTEGER,
  },
});

Captions.belongsTo(Photos);

module.exports = Captions;
