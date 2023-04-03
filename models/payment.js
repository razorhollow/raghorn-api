'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Profile, {
        foreignKey: 'memberId'
      })
    }
  }
  Payment.init({
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0,
      }
    },
    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    paymentMethod: {
      type: DataTypes.ENUM('cash', 'check', 'credit card', 'paypal', 'venmo', 'cashapp', 'other'),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};