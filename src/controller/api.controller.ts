import { Request, Response } from "express"

interface responseJSON {
  first_number: number,
  second_number: number,
  operator: mathOperators,
  question: string
  answer: number,
}
type mathOperators = '+' | '-' | '*' | '/';

const operators: Array<mathOperators> = ['+', '-', '*', '/']
const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max - 1);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomOperator(operatorsArray: Array<mathOperators>): mathOperators {
  const randomPosition = getRandomIntInclusive(0, operatorsArray.length)
  return operatorsArray[randomPosition]
}

function getRandomNumber(numbersArray: Array<number>) {
  const randomPosition = getRandomIntInclusive(0, numbersArray.length)
  return numbersArray[randomPosition]
}

function getAnswer(op: string, firstNumber: number, secondNumber: number) {
  let answer = 0
  if (op === '+') answer = firstNumber + secondNumber
  if (op === '-') answer = firstNumber - secondNumber
  if (op === '*') answer = firstNumber * secondNumber
  if (op === '/') answer = firstNumber / secondNumber

  return answer
}

function questionGenerator(operators: Array<mathOperators>, nums: Array<number>): responseJSON {
  const operator = getRandomOperator(operators)
  const firstNumber = getRandomNumber(nums)
  let secondNumber = getRandomNumber(nums)

  while ((operator === '/' && secondNumber === 0) || secondNumber > firstNumber && firstNumber !== 0) {
    secondNumber = getRandomNumber(nums)
  }

  const answer = getAnswer(operator, firstNumber, secondNumber)

  return ({
    first_number: firstNumber,
    second_number: secondNumber,
    operator: operator,
    question: `${firstNumber} ${operator} ${secondNumber}`,
    answer: answer,
  })
}

export const getRandomArithmeticQuestion = (_req: Request, res: Response) => {
  const data = questionGenerator(operators, numbers)
  return res.json(data)
}