import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import apiRouter from './router/api.router'

const app: Express = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api', apiRouter)
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'MATH PROBLEM API'
  })
})

app.listen(port, () => {
  console.log(`✅ Server is running at port ${port}`)
})