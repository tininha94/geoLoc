'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Traking);
    }
  }
  Product.init({
    trakingId: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    quant: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;s
};