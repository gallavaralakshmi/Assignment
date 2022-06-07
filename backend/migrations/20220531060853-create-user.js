'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER,
       
      },
      name: {
        allowNull:false,
        type: Sequelize.TEXT
      },
      age: {
        type: Sequelize.INTEGER
      },
      skills: {
        type: Sequelize.TEXT
      },
      email: {
        allowNull:false,
        type: Sequelize.TEXT,
        unique:true,
       
      },
      password: {
        allowNull:false,
        type: Sequelize.TEXT
      },
      mobile: {
        allowNull:false,
        type: Sequelize.TEXT
      },
      gdo: {
        allowNull:false,
        type: Sequelize.TEXT
      },
      role: {
        allowNull:false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('users');
  }
};