const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	experience: {
		type: String,
		required: true,
	},
	skills: [
		{
			type: String,
			required: true,
		},
	],
	projects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project',
		},
	],
	description: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('User', userSchema);
