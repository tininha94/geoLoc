'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Traking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Traking.belongsTo(models.Users)
      Traking.hasMany(models.Products)

    }
  }
  Traking.init({
    userId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    lastLocal: DataTypes.STRING,
    lastDt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Traking',
  });
  return Traking;
};