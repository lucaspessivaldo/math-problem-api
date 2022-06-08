const express = require('express')
const router = express.Router();

function getRandomArrayElement(arr) {
  const min = 0
  const max = arr.length - 1
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return arr[randomNumber]
}

function getRandomOperator() {
  const operators = ['+', '-', '*', '/']
  return getRandomArrayElement(operators)
}

function getRandomNumber() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return getRandomArrayElement(numbers)
}

router.get('/', (req, res) => {
  const number1 = getRandomNumber()
  const number2 = getRandomNumber()
  const operator = getRandomOperator()

  res.json({
    message: 'Math question',
    expression: `${number1} ${operator} ${number2}`,
    number1: number1,
    number2: number2,
    operator: operator,
  })
})

module.exports = router