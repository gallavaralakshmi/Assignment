/*'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    
      name: DataTypes.TEXT,
      age: DataTypes.INTEGER,
      skills: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
      mobile: DataTypes.TEXT,
      gdo: DataTypes.TEXT,
      role: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
*/

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,

    },
    skills: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
      unique:true,
      allowNull:false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gdo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users;
};
