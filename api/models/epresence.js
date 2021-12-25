'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class epresence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      epresence.belongsTo(models.users,{
        as: "employe",
        foreignKey: {
          name: "id_user"
        }
      })
    }
  };
  epresence.init({
    id_user: DataTypes.INTEGER,
    type: DataTypes.ENUM('IN', 'OUT'),
    is_approve: DataTypes.ENUM('TRUE', 'FALSE'),
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'epresence',
  });
  return epresence;
};