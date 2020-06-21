exports.seed = async function(knex) {
	await knex("sales").insert([
		{ vehicle_id: 2, salesperson: "Josh Bardwell", price: 15500.00 },
    { vehicle_id: 3, salesperson: "Steele Davis", price: 16430.00 },
	])
}


// id, vehicle_id, salesperson, price, customer
