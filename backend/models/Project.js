const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	skills: [String],
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	images: [String],
	dateCreated: { type: Date, default: Date.now },
	githubLink: String,
});

module.exports = mongoose.model('Project', projectSchema);
