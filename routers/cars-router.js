const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const cars = await db.select("*").from("cars")

		res.json(cars)
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const car = await db
			.first("*")
			.from("cars")
			.where("id", req.params.id)

		res.json(car)
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const payload = {
			vin: req.body.vin,
			make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      // id, vin, make, model, mileage, transmission, title_status
		}

    if (req.body.transmission) {
      payload.transmission = req.body.transmission
    }

    if (req.body.title_status) {
      payload.title_status = req.body.title_status
    }

		const [vehicleID] = await db.insert(payload).into("cars")
		const car = await db.first("*").from("cars").where("id", vehicleID)

		res.status(201).json(car)
	} catch (err) {
		next(err)
	}
})


router.put("/:id", async (req, res, next) => {
	try {
    const payload = {
			vin: req.body.vin,
			make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      // id, vin, make, model, mileage, transmission, title_status
		}

    if (req.body.transmission) {
      payload.transmission = req.body.transmission
    }

    if (req.body.title_status) {
      payload.title_status = req.body.title_status
    }

		await db("cars").update(payload).where("id", req.params.id)
		const car = await db.first("*").from("cars").where("id", req.params.id)

		res.json(car)
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try {
		await db("cars").where("id", req.params.id).del()
		res.status(204).json(message:"Entry Deleted").end()
	} catch (err) {
		next(err)
	}
})

module.exports = router
