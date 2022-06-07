'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usergoals', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'users'
          },
          key:'id'
        },
        allowNull:false,
      },
      goal_name: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      status: {
        type: Sequelize.TEXT
      },
      created_date:{
        type:Sequelize.DATEONLY,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usergoals');
  }
};