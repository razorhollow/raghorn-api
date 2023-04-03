'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
        }
      },
      paymentDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      paymentMethod: {
        type: Sequelize.ENUM('cash', 'check', 'credit card', 'paypal', 'venmo', 'cashapp', 'other'),
        allowNull: false,
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
    await queryInterface.dropTable('Payments');
  }
};