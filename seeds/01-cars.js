exports.seed = async function(knex) {
	await knex("cars").insert([
		{ vin: "JH4DC4440RS004255", make: "Acura", model: "Integra", year: 1994, mileage: 110557.5 },
		{ vin: "1FAFP58S11A177991", make: "Ford", model: "Taurus", year: 2001, mileage: 80963.2 },
    { vin: "1C4GJWAG0DL544058", make: "Jeep", model: "Wrangler", year: 2013, mileage: 93019.6 },
    { vin: "3VWSB81H8WM210368", make: "Volkswagen", model: "Jetta", year: 1998, mileage: 126348.0 },
    { vin: "1C4RJFAG8DC537142", make: "Jeep", model: "Grand Cherokee", year: 2013, mileage: 55632.9 },
	])
}


// id, vin, make, model, mileage, transmission, title_status
