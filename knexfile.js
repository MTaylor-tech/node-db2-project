module.exports = {
	client: "sqlite3", // specifying the DBMS
	connection: {
		filename: "./data/car-dealer.db3", // location of our database file
	},
	useNullAsDefault: true, // a flag required for SQLite specifically
}
