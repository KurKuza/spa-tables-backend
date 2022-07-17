require('dotenv').config()
const express = require('express')
const cors = require('cors')

const db = require('./db')

// port from environment variable (.env) or 5000
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

app.get(`/get`, async (req, res) => {
	try {
		const results = await db.query(
			`select * from spatable order by id limit 100;`
		)

		res.send(results.rows)

	} catch (err) {
		console.log('err', err)
	}
})

const start = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server Ok Port: http://localhost:${PORT}`)
		})
	} catch (err) {
		console.log(err)
	}
}
start()