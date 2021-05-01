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
					template: "What is the capital of XXXXX?",
					type: 2,
					is_first: null,
					table_name: "capitals",
					column_name: "capital",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "How many people live in XXXXX?",
					type: 2,
					is_first: null,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "In what continent is XXXXX?",
					type: 2,
					is_first: null,
					table_name: "capitals",
					column_name: "continent",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are there more people in XXXXX than in YYYYY?",
					type: 3,
					is_first: false,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are there less people in XXXXX than in YYYYY?",
					type: 3,
					is_first: true,
					table_name: "population_density",
					column_name: "population",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is XXXXX larger than YYYYY?",
					type: 3,
					is_first: false,
					table_name: "population_density",
					column_name: "area_km2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is XXXXX smaller than YYYYY?",
					type: 3,
					is_first: true,
					table_name: "population_density",
					column_name: "area_km2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does XXXXX have a higher population density than YYYYY?",
					type: 3,
					is_first: false,
					table_name: "population_density",
					column_name: "density_popkm2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does XXXXX have a lower population density than YYYYY?",
					type: 3,
					is_first: true,
					table_name: "population_density",
					column_name: "density_popkm2",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is the quality of life in XXXXX higher than the quality of life in YYYYY?",
					type: 3,
					is_first: false,
					table_name: "quality_of_life_indices",
					column_name: "quality_of_life_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is the quality of life in XXXXX lower than the quality of life in YYYYY?",
					type: 3,
					is_first: true,
					table_name: "quality_of_life_indices",
					column_name: "quality_of_life_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Is the crime rate of XXXXX higher than the crime rate in YYYYY?",
					type: 3,
					is_first: false,
					table_name: "crime_indices",
					column_name: "crime_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are restaurants in XXXXX more expensive than restaurants in YYYYY?",
					type: 3,
					is_first: false,
					table_name: "cost_of_living_indices",
					column_name: "restaurant_price_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Are restaurants in XXXXX less expensive than restaurants in YYYYY?",
					type: 3,
					is_first: true,
					table_name: "cost_of_living_indices",
					column_name: "restaurant_price_index",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does XXXXX have a higher litercy rate than YYYYY?",
					type: 3,
					is_first: false,
					table_name: "countries",
					column_name: "literacy",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does XXXXX have a lower litercy rate than YYYYY?",
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
					template: "Does XXXXX have a morality rate of higher than ZZZZZ%",
					type: 4,
					is_first: false,
					table_name: "countries",
					column_name: "deathrate",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					template: "Does XXXXX have a morality rate of lower than ZZZZZ%",
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
