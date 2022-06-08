const express = require('express')
const home = require('./routers/home')
const api = require('./routers/api')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/', home)
app.use('/api', api)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})