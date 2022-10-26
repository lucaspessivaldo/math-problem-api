import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = 5000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Server is running'
  })
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})