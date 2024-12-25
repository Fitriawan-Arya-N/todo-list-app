'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add the 'todos' table with columns 'id', 'title', and 'completed'
     */
    await queryInterface.createTable('todos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,  // title cannot be null
      },
      completed: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,  // default value is 0 (not completed)
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Revert the 'up' migration by dropping the 'todos' table
     */
    await queryInterface.dropTable('todos');
  }
};
