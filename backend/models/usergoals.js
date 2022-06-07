/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usergoals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
    }
  }
  usergoals.init({
    user_id: DataTypes.INTEGER,
    goal_id: DataTypes.INTEGER,
    status: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'usergoals',
  });
  return usergoals;
};
*/
/*
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Usergoals = sequelize.define('Usergoals', {
    
      
      user_id: DataTypes.INTEGER,
      goal_id: DataTypes.INTEGER,
      
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Usergoals;
};
*/
const Users=require("./user");

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usergoals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usergoals.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:Users,
        key:"id",
      }
    },
    goal_name:{
      type:DataTypes.TEXT,
    },
    status: {
      type:DataTypes.TEXT,
    },
    created_date:{
      type:DataTypes.DATEONLY,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'usergoals',
  });
  return Usergoals;
};