exports.up = async function(knex) {
	await knex.schema.createTable("sales", (table) => {
		table.increments("id")
		table.integer("vehicle_id").notNull().unique()
    table.text("salesperson").notNull()
    table.real("price").notNull()
    table.text("customer")
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("sales")
}
