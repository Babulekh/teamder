const Project = require('../models/Project');

exports.createProject = async (req, res) => {
	try {
		const { name, description, skills, creator, images, githubLink } = req.body;
		const project = new Project({
			name,
			description,
			skills,
			creator,
			images,
			githubLink,
		});
		await project.save();
		res.status(201).json(project);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: 'Could not create project' });
	}
};

exports.getProjects = async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Could not get projects' });
	}
};

exports.getProjectById = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project) {
			return res.status(404).json({ message: 'Project not found' });
		}
		res.json(project);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Could not get project' });
	}
};

exports.updateProject = async (req, res) => {
	try {
		const { name, description, skills, creator, images, githubLink } = req.body;
		const project = await Project.findByIdAndUpdate(
			req.params.id,
			{
				name,
				description,
				skills,
				creator,
				images,
				githubLink,
			},
			{ new: true }
		);
		if (!project) {
			return res.status(404).json({ message: 'Project not found' });
		}
		res.json(project);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: 'Could not update project' });
	}
};

exports.deleteProject = async (req, res) => {
	try {
		const project = await Project.findByIdAndDelete(req.params.id);
		if (!project) {
			return res.status(404).json({ message: 'Project not found' });
		}
		res.json(project);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Could not delete project' });
	}
};

exports.getProjectsByCreatorId = async (req, res) => {
  try {
    const creatorId = req.params.creatorId;

    // используем метод find для поиска проектов по id создателя
    const projects = await Project.find({ creator: creatorId });

    // возвращаем найденные проекты
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }}