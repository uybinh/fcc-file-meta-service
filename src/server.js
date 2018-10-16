const path = require("path")
const PORT = process.env.PORT || 5000
const express = require("express")
const apiRouter = require("./router/api")
const app = express()
/*eslint no-console: ["off"] */
app
	.use(express.static(path.resolve(__dirname, "public")))
	.listen(PORT, () => console.log(`App is litening on port ${PORT} ...`))

app.get("/", (req, res) =>
	res.sendFile(path.resolve(__dirname, "public/index.html"))
)

app.use("/api", apiRouter)

app.use((req, res, next) => {
	res
		.status(404)
		.type("text")
		.send("Not found! :(")
})
