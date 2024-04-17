const express = require('express')
const personRouter = require('./routers/person.routers')
const breakdownRouter = require('./routers/breakdown.routers')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())

app.use('/api', personRouter)
app.use('/api', breakdownRouter)


app.listen(PORT, () => console.log (`server started on port ${PORT}`))

