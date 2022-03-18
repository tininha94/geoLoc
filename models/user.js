'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Traking);
    } 
  }
  User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User'
  });
  return User;
}; 