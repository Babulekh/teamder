const port = process.env.PORT ?? 3000;
const db_host = 'mongo';
const db_name = 'teamder'

module.exports = {
	port: port,
	db_host: db_host,
	db_name: db_name,
};