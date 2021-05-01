"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"capitals",
			[
				{
					country: "Afghanistan",
					capital: "Kabul",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Aland Islands",
					capital: "Mariehamn",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Albania",
					capital: "Tirana",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Algeria",
					capital: "Algiers",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "American Samoa",
					capital: "Pago Pago",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Andorra",
					capital: "Andorra la Vella",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Angola",
					capital: "Luanda",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Anguilla",
					capital: "The Valley",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Antarctica",
					capital: "N/A",
					continent: "Antarctica",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Antigua and Barbuda",
					capital: "Saint John's",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Argentina",
					capital: "Buenos Aires",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Armenia",
					capital: "Yerevan",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Aruba",
					capital: "Oranjestad",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Australia",
					capital: "Canberra",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Austria",
					capital: "Vienna",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Azerbaijan",
					capital: "Baku",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bahamas",
					capital: "Nassau",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bahrain",
					capital: "Manama",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bangladesh",
					capital: "Dhaka",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Barbados",
					capital: "Bridgetown",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Belarus",
					capital: "Minsk",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Belgium",
					capital: "Brussels",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Belize",
					capital: "Belmopan",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Benin",
					capital: "Porto-Novo",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bermuda",
					capital: "Hamilton",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bhutan",
					capital: "Thimphu",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bolivia",
					capital: "La Paz",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bosnia and Herzegovina",
					capital: "Sarajevo",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Botswana",
					capital: "Gaborone",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Brazil",
					capital: "Brasilia",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "British Indian Ocean Territory",
					capital: "Diego Garcia",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "British Virgin Islands",
					capital: "Road Town",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Brunei Darussalam",
					capital: "Bandar Seri Begawan",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Bulgaria",
					capital: "Sofia",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Burkina Faso",
					capital: "Ouagadougou",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Burundi",
					capital: "Bujumbura",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cambodia",
					capital: "Phnom Penh",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cameroon",
					capital: "Yaounde",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Canada",
					capital: "Ottawa",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cape Verde",
					capital: "Praia",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cayman Islands",
					capital: "George Town",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Central African Republic",
					capital: "Bangui",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Chad",
					capital: "N'Djamena",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Chile",
					capital: "Santiago",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "China",
					capital: "Beijing",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Christmas Island",
					capital: "The Settlement",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cocos Islands",
					capital: "West Island",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Colombia",
					capital: "Bogota",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Comoros",
					capital: "Moroni",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cook Islands",
					capital: "Avarua",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Costa Rica",
					capital: "San Jose",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cote d'Ivoire",
					capital: "Yamoussoukro",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Croatia",
					capital: "Zagreb",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cuba",
					capital: "Havana",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Curaçao",
					capital: "Willemstad",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Cyprus",
					capital: "Nicosia",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Czech Republic",
					capital: "Prague",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Democratic Republic of the Congo",
					capital: "Kinshasa",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Denmark",
					capital: "Copenhagen",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Djibouti",
					capital: "Djibouti",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Dominica",
					capital: "Roseau",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Dominican Republic",
					capital: "Santo Domingo",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Ecuador",
					capital: "Quito",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Egypt",
					capital: "Cairo",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "El Salvador",
					capital: "San Salvador",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Equatorial Guinea",
					capital: "Malabo",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Eritrea",
					capital: "Asmara",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Estonia",
					capital: "Tallinn",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Ethiopia",
					capital: "Addis Ababa",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Falkland Islands",
					capital: "Stanley",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Faroe Islands",
					capital: "Torshavn",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Federated States of Micronesia",
					capital: "Palikir",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Fiji",
					capital: "Suva",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Finland",
					capital: "Helsinki",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "France",
					capital: "Paris",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "French Polynesia",
					capital: "Papeete",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "French Southern and Antarctic Lands",
					capital: "Port-aux-Français",
					continent: "Antarctica",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Gabon",
					capital: "Libreville",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Georgia",
					capital: "Tbilisi",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Germany",
					capital: "Berlin",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Ghana",
					capital: "Accra",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Gibraltar",
					capital: "Gibraltar",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Greece",
					capital: "Athens",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Greenland",
					capital: "Nuuk",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Grenada",
					capital: "Saint George's",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Guam",
					capital: "Hagatna",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Guatemala",
					capital: "Guatemala City",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Guernsey",
					capital: "Saint Peter Port",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Guinea",
					capital: "Conakry",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Guinea-Bissau",
					capital: "Bissau",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Guyana",
					capital: "Georgetown",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Haiti",
					capital: "Port-au-Prince",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Heard Island and McDonald Islands",
					capital: "N/A",
					continent: "Antarctica",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Honduras",
					capital: "Tegucigalpa",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Hong Kong",
					capital: "N/A",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Hungary",
					capital: "Budapest",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Iceland",
					capital: "Reykjavik",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "India",
					capital: "New Delhi",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Indonesia",
					capital: "Jakarta",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Iran",
					capital: "Tehran",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Iraq",
					capital: "Baghdad",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Ireland",
					capital: "Dublin",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Isle of Man",
					capital: "Douglas",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Israel",
					capital: "Jerusalem",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Italy",
					capital: "Rome",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Jamaica",
					capital: "Kingston",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Japan",
					capital: "Tokyo",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Jersey",
					capital: "Saint Helier",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Jordan",
					capital: "Amman",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Kazakhstan",
					capital: "Astana",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Kenya",
					capital: "Nairobi",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Kiribati",
					capital: "Tarawa",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Kosovo",
					capital: "Pristina",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Kuwait",
					capital: "Kuwait City",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Kyrgyzstan",
					capital: "Bishkek",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Laos",
					capital: "Vientiane",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Latvia",
					capital: "Riga",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Lebanon",
					capital: "Beirut",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Lesotho",
					capital: "Maseru",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Liberia",
					capital: "Monrovia",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Libya",
					capital: "Tripoli",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Liechtenstein",
					capital: "Vaduz",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Lithuania",
					capital: "Vilnius",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Luxembourg",
					capital: "Luxembourg",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Macau",
					capital: "N/A",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Macedonia",
					capital: "Skopje",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Madagascar",
					capital: "Antananarivo",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Malawi",
					capital: "Lilongwe",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Malaysia",
					capital: "Kuala Lumpur",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Maldives",
					capital: "Male",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Mali",
					capital: "Bamako",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Malta",
					capital: "Valletta",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Marshall Islands",
					capital: "Majuro",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Mauritania",
					capital: "Nouakchott",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Mauritius",
					capital: "Port Louis",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Mexico",
					capital: "Mexico City",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Moldova",
					capital: "Chisinau",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Monaco",
					capital: "Monaco",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Mongolia",
					capital: "Ulaanbaatar",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Montenegro",
					capital: "Podgorica",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Montserrat",
					capital: "Plymouth",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Morocco",
					capital: "Rabat",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Mozambique",
					capital: "Maputo",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Myanmar",
					capital: "Rangoon",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Namibia",
					capital: "Windhoek",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Nauru",
					capital: "Yaren",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Nepal",
					capital: "Kathmandu",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Netherlands",
					capital: "Amsterdam",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "New Caledonia",
					capital: "Noumea",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "New Zealand",
					capital: "Wellington",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Nicaragua",
					capital: "Managua",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Niger",
					capital: "Niamey",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Nigeria",
					capital: "Abuja",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Niue",
					capital: "Alofi",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Norfolk Island",
					capital: "Kingston",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "North Korea",
					capital: "Pyongyang",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Northern Cyprus",
					capital: "North Nicosia",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Northern Mariana Islands",
					capital: "Saipan",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Norway",
					capital: "Oslo",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Oman",
					capital: "Muscat",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Pakistan",
					capital: "Islamabad",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Palau",
					capital: "Melekeok",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Palestine",
					capital: "Jerusalem",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Panama",
					capital: "Panama City",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Papua New Guinea",
					capital: "Port Moresby",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Paraguay",
					capital: "Asuncion",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Peru",
					capital: "Lima",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Philippines",
					capital: "Manila",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Pitcairn Islands",
					capital: "Adamstown",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Poland",
					capital: "Warsaw",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Portugal",
					capital: "Lisbon",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Puerto Rico",
					capital: "San Juan",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Qatar",
					capital: "Doha",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Republic of Congo",
					capital: "Brazzaville",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Romania",
					capital: "Bucharest",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Russia",
					capital: "Moscow",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Rwanda",
					capital: "Kigali",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saint Barthelemy",
					capital: "Gustavia",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saint Helena",
					capital: "Jamestown",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saint Kitts and Nevis",
					capital: "Basseterre",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saint Lucia",
					capital: "Castries",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saint Martin",
					capital: "Marigot",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saint Pierre and Miquelon",
					capital: "Saint-Pierre",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saint Vincent and the Grenadines",
					capital: "Kingstown",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Samoa",
					capital: "Apia",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "San Marino",
					capital: "San Marino",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Sao Tome and Principe",
					capital: "Sao Tome",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Saudi Arabia",
					capital: "Riyadh",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Senegal",
					capital: "Dakar",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Serbia",
					capital: "Belgrade",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Seychelles",
					capital: "Victoria",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Sierra Leone",
					capital: "Freetown",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Singapore",
					capital: "Singapore",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Sint Maarten",
					capital: "Philipsburg",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Slovakia",
					capital: "Bratislava",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Slovenia",
					capital: "Ljubljana",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Solomon Islands",
					capital: "Honiara",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Somalia",
					capital: "Mogadishu",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Somaliland",
					capital: "Hargeisa",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "South Africa",
					capital: "Pretoria",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "South Georgia and South Sandwich Islands",
					capital: "King Edward Point",
					continent: "Antarctica",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "South Korea",
					capital: "Seoul",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "South Sudan",
					capital: "Juba",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Spain",
					capital: "Madrid",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Sri Lanka",
					capital: "Colombo",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Sudan",
					capital: "Khartoum",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Suriname",
					capital: "Paramaribo",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Svalbard",
					capital: "Longyearbyen",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Swaziland",
					capital: "Mbabane",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Sweden",
					capital: "Stockholm",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Switzerland",
					capital: "Bern",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Syria",
					capital: "Damascus",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Taiwan",
					capital: "Taipei",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Tajikistan",
					capital: "Dushanbe",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Tanzania",
					capital: "Dar es Salaam",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Thailand",
					capital: "Bangkok",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "The Gambia",
					capital: "Banjul",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Timor-Leste",
					capital: "Dili",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Togo",
					capital: "Lome",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Tokelau",
					capital: "Atafu",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Tonga",
					capital: "Nuku'alofa",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Trinidad and Tobago",
					capital: "Port of Spain",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Tunisia",
					capital: "Tunis",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Turkey",
					capital: "Ankara",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Turkmenistan",
					capital: "Ashgabat",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Turks and Caicos Islands",
					capital: "Grand Turk",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Tuvalu",
					capital: "Funafuti",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Uganda",
					capital: "Kampala",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Ukraine",
					capital: "Kyiv",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "United Arab Emirates",
					capital: "Abu Dhabi",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "United Kingdom",
					capital: "London",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "United States",
					capital: "Washington",
					continent: "Central America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Uruguay",
					capital: "Montevideo",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "US Minor Outlying Islands",
					capital: "Washington",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "US Virgin Islands",
					capital: "Charlotte Amalie",
					continent: "North America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Uzbekistan",
					capital: "Tashkent",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Vanuatu",
					capital: "Port-Vila",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Vatican City",
					capital: "Vatican City",
					continent: "Europe",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Venezuela",
					capital: "Caracas",
					continent: "South America",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Vietnam",
					capital: "Hanoi",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Wallis and Futuna",
					capital: "Mata-Utu",
					continent: "Australia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Western Sahara",
					capital: "El-Aaiún",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Yemen",
					capital: "Sanaa",
					continent: "Asia",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Zambia",
					capital: "Lusaka",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					country: "Zimbabwe",
					capital: "Harare",
					continent: "Africa",
					created_at: new Date(),
					updated_at: new Date(),
				},
			].map((data, i) => ({ id: i + 1, ...data })),
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("capitals", null, {});
	},
};
