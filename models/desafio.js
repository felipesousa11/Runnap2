'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Desafio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Desafio.belongsTo(models.User);
      Desafio.hasMany(models.Activity);


    }
  };
  Desafio.init({
    name: DataTypes.STRING,
    distancia: DataTypes.FLOAT,
    inicio: DataTypes.DATE,
    fim: DataTypes.DATE,
    inscrito: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    activityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Desafio',
  });
  return Desafio;
};