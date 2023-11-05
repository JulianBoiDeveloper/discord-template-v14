const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dashboard')
		.setDescription('Afficher le dashboard'),
	async execute(interaction) {
		// Execute

	},
};
