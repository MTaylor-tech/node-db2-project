const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const sales = await db.select("*").from("sales")

		res.json(sales)
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const sale = await db
			.first("*")
			.from("sales")
			.where("id", req.params.id)

		res.json(sale)
	} catch (err) {
		next(err)
	}
})

router.put("/:id", async (req, res, next) => {
	try {
		const payload = {
		  vehicle_id: req.body.vehicle_id,
      salesperson: req.body.salesperson,
      price: req.body.price,
			// id, vehicle_id, salesperson, price, customer
		}

    if (req.body.customer) {
      payload.customer = req.body.customer
    }

		await db("sales").update(payload).where("id", req.params.id)
		const sale = await db.first("*").from("sales").where("id", req.params.id)

		res.json(sale)
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try {
		await db("sales").where("id", req.params.id).del()
		res.status(204).json({message:"Entry Deleted"})
	} catch (err) {
		next(err)
	}
})

module.exports = router
