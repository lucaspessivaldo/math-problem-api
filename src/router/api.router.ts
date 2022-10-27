import { Router } from 'express'
import { getRandomArithmeticQuestion } from '../controller/api.controller'
const router = Router()

router.get('/', getRandomArithmeticQuestion)

export default router