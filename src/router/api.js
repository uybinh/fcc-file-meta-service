const express = require("express")
const router = express.Router()
const formidable = require("formidable")
require("../db/database")

router.post("/upload", (req, res) => {
	const form = new formidable.IncomingForm()
	form.maxFileSize = 10 * 1024 * 1024
	form.parse(req, function(err, fields, files) {
		if (err) return res.json(err)
		const { name, type, size } = files.upfile
		res.json({ name, type, size })
	})
})

module.exports = router
