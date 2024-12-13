'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      uuid: { type: Sequelize.STRING, unique: true, allowNull: false },
      // role_id: { 
      //   type: Sequelize.INTEGER, 
      //   references: { model: 'roles', key: 'id' },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL',
      // },
      username: { type: Sequelize.STRING, unique: true, allowNull: false },
      first_name: { type: Sequelize.STRING, allowNull: false },
      last_name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.STRING, allowNull: true },
      phone_number: { type: Sequelize.STRING, allowNull: true },
      email: { type: Sequelize.STRING, unique: true, allowNull: false },
      address: { type: Sequelize.JSON, allowNull: true },
      dob: { type: Sequelize.DATE, allowNull: true },
      avatar_url: { type: Sequelize.STRING, allowNull: true },
      access_token: { type: Sequelize.TEXT, allowNull: true },
      refresh_token: { type: Sequelize.TEXT, allowNull: true },
      location: { type: Sequelize.JSON, allowNull: false },
      balance: { type: Sequelize.FLOAT, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
