"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("quality_of_life_indices", {
			id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			country: {
				primaryKey: true,
				type: Sequelize.STRING,
			},
			quality_of_life_Index: {
				type: Sequelize.INTEGER,
			},
			purchasing_power_index: {
				type: Sequelize.FLOAT,
			},
			safety_index: {
				type: Sequelize.FLOAT,
			},
			health_care_index: {
				type: Sequelize.FLOAT,
			},
			cost_of_living_index: {
				type: Sequelize.FLOAT,
			},
			property_price_to_income_ratio: {
				type: Sequelize.FLOAT,
			},
			traffic_commute_time_index: {
				type: Sequelize.FLOAT,
			},
			pollution_index: {
				type: Sequelize.FLOAT,
			},
			climate_index: {
				type: Sequelize.FLOAT,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("quality_of_life_indices");
	},
};
