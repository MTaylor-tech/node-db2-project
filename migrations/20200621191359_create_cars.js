exports.up = async function(knex) {
	await knex.schema.createTable("cars", (table) => {
		// table.integer("id").notNull().unique().primary()
		table.increments("id")
		table.text("vin").notNull().unique()
		table.text("make").notNull()
		table.text("model").notNull()
    table.integer("year").notNull()
		table.real("mileage").notNull()
    table.text("transmission")
    table.text("title_status")
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("cars")
}
