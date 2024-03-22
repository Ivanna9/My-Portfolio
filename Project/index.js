const express = require ('express')

const personRouter = require ('./routers/person.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use('/api', personRouter)
app.use(express.json())
app.listen(PORT, () => console.log (`server started on port ${PORT}`))