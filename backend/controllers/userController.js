const User = require('../models/User');

// Получение списка всех пользователей
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Создание нового пользователя
exports.createUser = async (req, res) => {
    console.log(req.body);
	const user = new User({
		name: req.body.name,
		experience: req.body.experience,
		skills: req.body.skills,
		projects: [],
		description: req.body.description,
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Удаление пользователя по ID
exports.deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Пользователь удален' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Получение пользователя по ID
exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const userId = req.params.id;
		const updatedUser = req.body;

		// Проверяем, что в запросе есть данные для обновления
		if (!updatedUser) {
			res.status(400).json({ message: 'Нет данных для обновления' });
			return;
		}

		// Обновляем данные пользователя в базе данных
		const result = await User.findByIdAndUpdate(userId, updatedUser, {
			new: true, // Возвращать обновленного пользователя
			runValidators: true, // Выполнять проверку валидации для обновленных данных
		});

		// Проверяем, что пользователь был найден и обновлен
		if (!result) {
			res.status(404).json({ message: 'Пользователь не найден' });
			return;
		}

		// Возвращаем обновленный объект пользователя
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Ошибка сервера' });
	}
}
