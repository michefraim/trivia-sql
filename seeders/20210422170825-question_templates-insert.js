"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"question_templates",
			[
				{
					template: "Which country is most populous?",
					type: 1,
					is_first: false,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country is least populous?",
					type: 1,
					is_first: true,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country is the largest by total area?",
					type: 1,
					is_first: false,
					table_name: "population_density",
					column_name: "area_km2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country is the smallest by total area?",
					type: 1,
					is_first: true,
					table_name: "population_density",
					column_name: "area_km2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country is the most densely populated?",
					type: 1,
					is_first: false,
					table_name: "population_density",
					column_name: "density_popkm2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country is the least densely populated?",
					type: 1,
					is_first: true,
					table_name: "population_density",
					column_name: "density_popkm2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the most cell phones per person?",
					type: 1,
					is_first: false,
					table_name: "countries",
					column_name: "phones",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the least cell phones per person?",
					type: 1,
					is_first: true,
					table_name: "countries",
					column_name: "phones",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "What is the capital of X?",
					type: 2,
					is_first: null,
					table_name: "capitals",
					column_name: "capital",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "How many people live in X?",
					type: 2,
					is_first: null,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "In what continent is X?",
					type: 2,
					is_first: null,
					table_name: "capitals",
					column_name: "continent",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are there more people in X than in Y?",
					type: 3,
					is_first: false,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are there less people in X than in Y?",
					type: 3,
					is_first: true,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is X larger than Y?",
					type: 3,
					is_first: false,
					table_name: "population_density",
					column_name: "area_km2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is X smaller than Y?",
					type: 3,
					is_first: true,
					table_name: "population_density",
					column_name: "area_km2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does X have a higher population density than Y?",
					type: 3,
					is_first: false,
					table_name: "population_density",
					column_name: "density_popkm2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does X have a lower population density than Y?",
					type: 3,
					is_first: true,
					table_name: "population_density",
					column_name: "density_popkm2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is the quality of life in X higher than the quality of life in Y?",
					type: 3,
					is_first: false,
					table_name: "quality_of_life_indices",
					column_name: "quality_of_life_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is the quality of life in X lower than the quality of life in Y?",
					type: 3,
					is_first: true,
					table_name: "quality_of_life_indices",
					column_name: "quality_of_life_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is the crime rate of X higher than the crime rate in Y?",
					type: 3,
					is_first: false,
					table_name: "crime_indices",
					column_name: "crime_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are restaurants in X more expensive than restaurants in Y?",
					type: 3,
					is_first: false,
					table_name: "cost_of_living_indices",
					column_name: "restaurant_price_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are restaurants in X less expensive than restaurants in Y?",
					type: 3,
					is_first: true,
					table_name: "cost_of_living_indices",
					column_name: "restaurant_price_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does X have a higher litercy rate than Y?",
					type: 3,
					is_first: false,
					table_name: "countries",
					column_name: "literacy",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does X have a lower litercy rate than Y?",
					type: 3,
					is_first: true,
					table_name: "countries",
					column_name: "literacy",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the highest deathrate?",
					type: 1,
					is_first: false,
					table_name: "countries",
					column_name: "deathrate",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the lowest deathrate?",
					type: 1,
					is_first: true,
					table_name: "countries",
					column_name: "deathrate",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the highest birthrate?",
					type: 1,
					is_first: false,
					table_name: "countries",
					column_name: "birthrate",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the lowest birthrate?",
					type: 1,
					is_first: true,
					table_name: "countries",
					column_name: "birthrate",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the most arable land?",
					type: 1,
					is_first: false,
					table_name: "countries",
					column_name: "arable",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Which country has the least arable land?",
					type: 1,
					is_first: true,
					table_name: "countries",
					column_name: "arable",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does X have a morality rate of higher than Z%",
					type: 4,
					is_first: false,
					table_name: "countries",
					column_name: "deathrate",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does X have a morality rate of lower than Z%",
					type: 4,
					is_first: true,
					table_name: "countries",
					column_name: "deathrate",
					created_at: new Date(),
					updated_at: new Date(),
				},
			].map((template, i) => ({ id: i + 1, ...template })),
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("question_templates", null, {});
	},
};
