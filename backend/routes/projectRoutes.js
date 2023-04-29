const express = require('express');
const router = express.Router();

const {
	createProject,
	getProjects,
	getProjectById,
	updateProject,
	deleteProject,
	getProjectsByCreatorId,
} = require('../controllers/projectController');


router.post('/projects', createProject);
router.get('/projects', getProjects);
router.get('/projects/:id', getProjectById);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

router.get('/projects/createdBy/:creatorId', getProjectsByCreatorId);

module.exports = router;