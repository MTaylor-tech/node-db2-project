const express = require("express")
const helmet = require("helmet")
const generalRouter = require("./routers/general-router")
const carsRouter = require("./routers/cars-router")
const salesRouter = require("./routers/sales-router")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())
server.use("/", generalRouter)
server.use("/cars", carsRouter)
server.use("/sales", salesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
