import express, { Express, Request, Response } from 'express'
import apiRouter from './router/api.router'

const app: Express = express()
const port = 5000

app.use(express.json())

app.use('/api', apiRouter)

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Server is running'
  })
})

app.listen(port, () => {
  console.log(`✅ Server is running at port ${port}`)
})