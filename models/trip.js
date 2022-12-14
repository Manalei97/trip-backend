'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Trip extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Trip.belongsToMany(models.Member, {
				foreignKey: 'tripId',
				through: 'Subscriptions'
			})
			Trip.hasMany(models.Photo, {
				foreignKey: 'photoableId',
				constraints: false,
				scope: {
					photoableType: 'trip'
				}
			  });
		}
	}
	Trip.init({
		title: DataTypes.STRING,
		cost: DataTypes.INTEGER,
		date: DataTypes.DATE
	}, {
		sequelize,
		modelName: 'Trip',
	});
	return Trip;
};