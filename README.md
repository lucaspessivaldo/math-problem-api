# Math Problem API

<p>
  <img alt="" src="https://img.shields.io/badge/NodeJS-black?style=flat-square&logo=nodedotjs&logoColor=white" />
  <img alt="" src="https://img.shields.io/badge/TypeScript-black?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="" src="https://img.shields.io/badge/Express-black?style=flat-square&logo=express&logoColor=white" />
  <img alt="" src="https://img.shields.io/badge/Licence-MIT-gray?style=flat-squar&labelColor=black" />
</p>

A random math problem generator API. Every request will generate a random
response, with one of those operators: addition, subtraction, multiplication, or
division.

```json
//Response example
{
  "first_number": 4,
  "second_number": 1,
  "operator": "+",
  "question": "4 + 1",
  "answer": 5
}
```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/lucaspessivaldo/math-problem-api
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Usage

1. Run the API
   ```sh
   npm start
   ```
2. GET /api
   ```sh
   curl http://localhost:5000/api
   ```
